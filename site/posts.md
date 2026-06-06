---
layout: bento.njk
title: Jenish Jain — Drawings
seo_title: Jenish Jain | Drawing Portfolio | Caricatures & Sketches
slug: posts
description: >
  Caricatures and sketches — my visual side project. Inspired by cameronmarkart.
---

<main class="bento">

  <!-- Intro tile: 7 cols × 3 rows -->
  <section class="tile t-intro">
    <div class="label">/drawings</div>
    <h1>Jenish<br><em>draws.</em></h1>
    <p class="intro-sub">Caricatures &amp; sketches — my visual side project. {{ collections.posts | length }} pieces so far.</p>
  </section>

  {% for post in collections.posts %}
    {% set postHref = "/" + post.data.slug + "/" %}

    {% if loop.index === 1 %}

  <!-- Featured tile: 5 cols × 3 rows -->
  <a class="tile t-drawing t-drawing--5 t-drawing--featured" href="{{ postHref }}">
    <img src="{{ post.data.thumb }}" alt="{{ post.data.title }}" loading="eager" />
    <div class="drawing-overlay">
      <div class="label">/latest</div>
      <div class="drawing-title">{{ post.data.title }}</div>
      <div class="drawing-meta">{{ post.date | simpleDate }}</div>
    </div>
  </a>

    {% else %}

  {# Cycle: positions 0-5 map to cols 5,4,3,3,5,4 — rows A and B alternate #}
  {% set drawPos = loop.index - 2 %}
  {% set cycle = drawPos % 6 %}
  {% if cycle == 0 or cycle == 4 %}
    {% set colClass = "t-drawing--5" %}
  {% elif cycle == 1 or cycle == 5 %}
    {% set colClass = "t-drawing--4" %}
  {% else %}
    {% set colClass = "t-drawing--3" %}
  {% endif %}

  <a class="tile t-drawing {{ colClass }}" href="{{ postHref }}">
    <img src="{{ post.data.thumb }}" alt="{{ post.data.title }}" loading="lazy" />
    <div class="drawing-overlay">
      <div class="drawing-title">{{ post.data.title }}</div>
      <div class="drawing-meta">{{ post.date | simpleDate }}</div>
    </div>
  </a>

    {% endif %}
  {% endfor %}

  <!-- Stats tile: 4 cols × 3 rows -->
  <section class="tile t-stats">
    <div class="label">/counters</div>
    <div class="stats-grid">
      <div><div class="stat-n">{{ collections.posts | length }}</div><div class="stat-k">sketches</div></div>
      <div><div class="stat-n">∞</div><div class="stat-k">to draw</div></div>
      <div><div class="stat-n">1</div><div class="stat-k">muse</div></div>
      <div><div class="stat-n">0</div><div class="stat-k">regrets</div></div>
    </div>
  </section>

  <!-- Portfolio link tile: 3 cols × 3 rows -->
  <a class="tile t-link" href="https://jenishjain.in" target="_blank" rel="noopener">
    <div class="label">/also me</div>
    <div class="link-head">jenishjain.in</div>
    <div class="link-sub">portfolio + blog ↗</div>
  </a>

</main>

<style>
  /* Taller rows for portrait image tiles */
  .bento { grid-auto-rows: 200px; }

  /* ── Intro tile: 7 cols × 3 rows ── */
  .t-intro {
    grid-column: span 7;
    grid-row: span 3;
    background: var(--ink);
    color: var(--paper);
  }
  .t-intro .label { color: rgba(243,237,225,0.5); }
  .t-intro .label::before { background: var(--accent); }
  .t-intro h1 {
    font-family: var(--display);
    font-size: clamp(52px, 7vw, 108px);
    line-height: 0.88;
    margin: auto 0 0;
    font-weight: 400;
  }
  .t-intro h1 em { font-style: italic; color: var(--accent); }
  .t-intro .intro-sub {
    font-size: 14px;
    color: rgba(243,237,225,0.65);
    line-height: 1.5;
    margin-top: 18px;
    max-width: 38ch;
  }
  .t-intro::after {
    content: "";
    position: absolute; right: -100px; bottom: -100px;
    width: 320px; height: 320px;
    background: radial-gradient(closest-side, color-mix(in srgb, var(--accent) 35%, transparent), transparent);
    pointer-events: none;
  }

  /* ── Drawing tiles (shared) ── */
  .t-drawing {
    padding: 0;
    cursor: pointer;
    display: block;
    grid-row: span 3;
  }
  /* Column widths: cycling 5 → 4 → 3 → 3 → 5 → 4 */
  .t-drawing--5 { grid-column: span 5; }
  .t-drawing--4 { grid-column: span 4; }
  .t-drawing--3 { grid-column: span 3; }

  .t-drawing img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    border-radius: var(--radius);
    transition: transform .5s cubic-bezier(.2,.7,.2,1);
  }
  .t-drawing:hover img { transform: scale(1.04); }
  .t-drawing:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 48px rgba(0,0,0,0.2);
  }

  .drawing-overlay {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 16px 18px 18px;
    background: linear-gradient(transparent, rgba(21,18,14,0.8));
    border-radius: 0 0 var(--radius) var(--radius);
    color: var(--paper);
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .drawing-title {
    font-family: var(--display);
    font-size: clamp(15px, 1.6vw, 21px);
    line-height: 1.1;
  }
  .drawing-meta {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(243,237,225,0.5);
  }
  /* /latest pill on the featured tile */
  .t-drawing--featured .label {
    position: absolute;
    top: 14px; left: 14px;
    z-index: 2;
    color: rgba(243,237,225,0.9);
    margin: 0;
    background: rgba(21,18,14,0.45);
    padding: 4px 10px;
    border-radius: 999px;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
  .t-drawing--featured .label::before { background: var(--accent); }

  /* ── Stats tile: 4 cols × 3 rows ── */
  .t-stats {
    grid-column: span 4;
    grid-row: span 3;
    background: var(--accent-3);
    color: var(--paper);
  }
  .t-stats .label { color: rgba(243,237,225,0.65); }
  .t-stats .label::before { background: var(--ink); }
  .stats-grid {
    margin: auto 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 20px;
  }
  .stat-n {
    font-family: var(--display);
    font-size: clamp(28px, 3.2vw, 44px);
    line-height: 1;
  }
  .stat-k {
    font-family: var(--mono);
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.85;
    margin-top: 2px;
  }

  /* ── Portfolio link tile: 3 cols × 3 rows ── */
  .t-link {
    grid-column: span 3;
    grid-row: span 3;
    background: var(--accent);
    color: var(--ink);
  }
  .t-link .label::before { background: var(--ink); }
  .t-link .label { color: rgba(21,18,14,0.5); }
  .t-link .link-head {
    font-family: var(--display);
    font-size: clamp(20px, 2vw, 28px);
    line-height: 1.05;
    margin: auto 0 0;
  }
  .t-link .link-sub {
    font-family: var(--mono);
    font-size: 10px;
    margin-top: 6px;
    opacity: 0.65;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .t-link:hover { box-shadow: 0 16px 36px rgba(0,0,0,0.12); }

  /* ── Responsive ── */
  @media (max-width: 960px) {
    .bento { grid-auto-rows: 160px; }
    .t-intro { grid-column: span 6; grid-row: span 2; }
    .t-drawing, .t-drawing--5, .t-drawing--4, .t-drawing--3 {
      grid-column: span 3;
      grid-row: span 3;
    }
    .t-drawing--featured { grid-column: span 6; }
    .t-stats { grid-column: span 3; grid-row: span 2; }
    .t-link  { grid-column: span 3; grid-row: span 2; }
  }
  @media (max-width: 640px) {
    .bento { grid-auto-rows: 140px; }
    .t-intro { grid-column: span 2; grid-row: span 2; }
    .t-drawing, .t-drawing--5, .t-drawing--4, .t-drawing--3,
    .t-drawing--featured { grid-column: span 2; grid-row: span 3; }
    .t-stats, .t-link { grid-column: span 2; grid-row: span 2; }
  }
</style>
