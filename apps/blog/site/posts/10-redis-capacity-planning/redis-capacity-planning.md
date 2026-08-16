---
date: 2026-08-16
title: >
  Redis was at 50% CPU. It was already too late.
seo_title: Redis Capacity Planning - Why CPU% Lies and When to Actually Scale | Redis Performance Guide
slug: redis-capacity-planning
description: >
  A production support question — "our self-managed Redis was at 50% CPU on a 4-core box, but latencies were already climbing, how do we know when to scale?" — turned into a real benchmark investigation. Here's the metric that actually matters, the thresholds to alert on, and when to scale up vs. scale out.
category: productivity
tags: [redis, capacity-planning, performance, devops, sre, monitoring, prometheus, engineering, software-engineering, databases]
site: blogsite
---

A few weeks ago I was pulled into a production support thread. A
self-managed Redis cluster — a 4-core, 32GB box, nothing exotic — was
showing rising latencies. The instinctive first move was to check CPU.
It read **50%**.

Fifty percent, on a machine with four cores, is the kind of number that
makes you look elsewhere. Half the machine is sitting idle. Surely Redis
isn't the bottleneck.

Except it was. And the question that came out of that thread stuck with
me: **how do you actually know, ahead of time, when a Redis instance
needs to scale — and whether "scale" means a bigger box or more of
them?**

I didn't have a confident answer. So I built a Redis instance, hammered
it with real traffic until it genuinely broke, and found out.

## The 50% CPU number was never the right number

Here's the thing almost nobody's dashboard accounts for: **Redis
executes commands on a single thread.** Not "mostly single-threaded" —
by default, one thread does all the work of reading your request,
running your command, and writing the response. GCP, AWS, your laptop,
it doesn't matter how many cores the box has. Redis will use, at most,
one of them for the thing that actually matters.

So on that 4-core box, Redis's ceiling isn't 400% CPU (all four cores) —
it's **100% of one core**. Which is 25% of the *host's* total capacity.
A host-level CPU chart showing "50%" on a 4-core machine could mean all
sorts of things — but one very plausible one is that Redis's own single
core is already maxed out, and something else is also busy, and the
average across four cores just happens to land on 50%. **The aggregate
number tells you almost nothing about whether the thing that actually
processes your commands is out of room.**

This is the debunk: **CPU% on the host is the wrong metric for Redis
capacity, full stop.** You need CPU as a fraction of *one core*,
specifically the core Redis's command loop runs on. Everything else in
this post is what happens once you start watching the right number.

## Proving it, not just asserting it

I didn't want to write "trust me, watch main-thread CPU" without
actually watching it happen. So I built a small benchmark rig — a
dedicated Redis instance and a separate load generator — and drove three
different traffic shapes at it with [YCSB](https://github.com/brianfrankcooper/YCSB):

- **Read-heavy** (95% reads / 5% writes) — a cache-like pattern
- **Write-dominant** (90% writes / 10% reads) — session stores, counters
- **Mixed** (50/50) — shopping carts, most "normal" app traffic

For each one, I climbed a load staircase — more concurrent requests,
more throughput — until Redis genuinely couldn't keep up, watching
server-side metrics via Prometheus the whole way.

### The three ceilings

| Traffic shape | Sustained ceiling | Main-thread CPU at ceiling |
|---|---|---|
| Read-heavy | ~25,000 ops/sec | ~93-99% |
| Mixed | ~26,200 ops/sec | ~85-97% |
| Write-dominant | ~28,700-29,000 ops/sec | ~75-85% |

Same hardware, three different ceilings. Writes are cheaper for Redis to
execute than reads in this record shape (writing a hash field is less
work than reading all of them back), so write-heavy traffic gets more
headroom before the single core saturates. **There's no single "Redis
can do N ops/sec" number — it depends entirely on what your traffic
actually looks like.** Which is exactly why watching CPU-of-one-core,
not a fixed throughput target, is the metric that survives your traffic
mix changing.

### The trap: Redis's own latency metric doesn't warn you either

I assumed, going in, that if CPU alone wasn't the smoking gun, at least
Redis's own reported latency would climb as a warning sign. It doesn't.
I pushed main-thread CPU from 58% to 93% — most of the way to
saturation — and Redis's own server-side p99 latency moved from **30
microseconds to 33**. Basically flat.

That's because Redis only times how long a command takes to *run*, not
how long it sat waiting in line first. Once the single core is busy,
new requests queue up — and that queueing delay, the thing that actually
makes your application feel slow, is invisible to Redis's own metrics.
**If your alerting watches Redis's reported latency, it will not warn
you in time.**

### Does Redis actually fall over, or just get slow?

One more thing worth knowing before you decide how urgently to react to
any of this: I pushed all three traffic shapes to **4x** their sustained
ceiling and held it there for two and a half minutes, to see what
"ignoring the warning" actually costs.

**Redis did not fail.** No errors, no dropped connections, nothing
crashed. It queued everything and kept serving, just slower.

But "just slower" isn't the same story for every traffic shape:

| Traffic shape | p99 latency at ceiling | p99 latency at 4x overload |
|---|---|---|
| Read-heavy | 23.7ms | **138.8ms** (~6x) |
| Mixed | 21.6ms | **134.3ms** (~6x) |
| Write-dominant | 19.6ms | 20.7ms (barely moves) |

Read-heavy and mixed traffic hit a wall and the tail latency explodes.
Write-dominant traffic degrades far more gracefully. If your service is
read-heavy, missing the warning threshold is a much bigger deal than if
it's write-heavy — worth knowing which kind of traffic you're actually
running before you decide how much margin to leave yourself.

## So: when do you scale up, and when do you scale out?

This is the part that actually answers the original question.

**Watch this metric:**
```
rate(redis_cpu_user_main_thread_seconds_total[1m])
  + rate(redis_cpu_sys_main_thread_seconds_total[1m])
```
— a fraction of *one* core, sourced from `redis_exporter`. Alert at
**70%** (start planning) and **90%** (act now). Not host CPU%. Not
Redis's own latency numbers.

**When the alert fires, don't reach for a bigger box by reflex.** Since
the bottleneck is one thread, adding vCPUs to the same instance does
almost nothing — proven directly in my testing, where a 2-vCPU host
behaved identically to what a single-core ceiling predicts regardless of
the second core sitting idle. The only *vertical* levers that genuinely
help are a CPU with a faster single core, or enabling Redis's I/O
threading (which offloads network handling, not command execution).

The real fix, almost always, is **scaling out**:
- **Read-heavy traffic → add read replicas.** Reads are the expensive
  operation; offloading them frees the primary's one core to focus on
  writes.
- **Write-heavy or mixed traffic → shard (Redis Cluster).** Replicas
  don't relieve write load; splitting the keyspace across multiple
  single-core shards does.
- One caveat worth taking seriously: sharding assumes reasonably even
  key access. If your traffic has hot keys, one shard can still hit the
  same ceiling alone while the others sit idle — worth checking your
  real access pattern before assuming sharding buys you a clean
  multiple of the single-instance ceiling.

That's the answer I wish I'd had in that support thread: the CPU number
everyone was staring at wasn't lying about the box — it was answering a
question nobody was actually asking.

## Digging deeper

The full write-up — every workload's complete load staircase, the raw
numbers, the methodology, and the actual Prometheus alerting rules I
ended up with — is here as a
[GitHub Gist](https://gist.github.com/jenish-jain/835fefec919d841711d76e1b60f76529).
