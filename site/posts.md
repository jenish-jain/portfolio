---
layout: bento.njk
title: Posts — Jenish Jain
seo_title: Posts — Jenish Jain's Engineering Blog
slug: posts
description: >
    I like to share my learnings, process of building something with others. I am not a regular writer but you can expect something rolling every few months ;)
---

<main class="bento">

  {% for post in collections.posts %}
    {% if post.data.url %}
      {% set postHref = post.data.url %}
      {% set isExternal = true %}
    {% else %}
      {% set postHref = "/" + post.data.slug + "/" %}
      {% set isExternal = false %}
    {% endif %}

    {% if loop.index === 1 %}

  <a class="tile t-feature" href="{{ postHref }}"{% if isExternal %} target="_blank" rel="noopener noreferrer"{% endif %}>
    <div class="label">/latest</div>
    <h2>{{ post.data.title }}</h2>
    <p class="desc">{{ post.data.description }}</p>
    <div class="post-meta">
      <span>{{ post.data.category }}</span>
      <span>{{ post.date | simpleDate }}</span>
    </div>
  </a>

    {% elif loop.index === 2 %}

  <a class="tile t-second" href="{{ postHref }}"{% if isExternal %} target="_blank" rel="noopener noreferrer"{% endif %}>
    <div class="label">/featured</div>
    <h2>{{ post.data.title }}</h2>
    <div class="post-meta">
      <span>{{ post.data.category }}</span>
      <span>{{ post.date | simpleDate }}</span>
    </div>
  </a>

    {% else %}

  <a class="tile t-post" href="{{ postHref }}"{% if isExternal %} target="_blank" rel="noopener noreferrer"{% endif %}>
    <div class="label">{{ post.data.category }}</div>
    <div class="ttl">{{ post.data.title }}</div>
    <div class="post-meta">
      <span>{{ post.date | simpleDate }}</span>
    </div>
  </a>

    {% endif %}
  {% endfor %}

  <section class="tile t-topics">
    <div class="label">/topics</div>
    <div class="cloud">
      <a href="/tag/kafka/">kafka</a>
      <a href="/tag/system-design/">system-design</a>
      <a href="/tag/productivity/">productivity</a>
      <a href="/tag/golang/">golang</a>
      <a href="/tag/terraform/">terraform</a>
      <a href="/tag/google-cloud/">google-cloud</a>
      <a href="/tag/distributed-systems/">distributed-systems</a>
      <a href="/tag/diy/">diy</a>
      <a href="/tag/automation/">automation</a>
      <a href="/tags/">all topics →</a>
    </div>
  </section>

  <a class="tile t-subscribe" href="/feed.xml">
    <div class="label">/subscribe</div>
    <div class="rss-head">RSS feed</div>
    <div class="rss-sub">Stay updated · new posts via feed reader</div>
  </a>

</main>
