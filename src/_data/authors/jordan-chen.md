---
layout: layouts/author.njk
author: jordan-chen
pagination:
  data: collections.all
  size: 1
permalink: /authors/{{ author }}/
---

<div class="summary">
  <img src="/assets/images/jordan-chen.png" alt="Photo of Jordan Chen">
  <a href="/authors/jordan-chen/">{{ post.data.author }}</a>
  <p>{{ post.data.summary }}</p>
</div>
