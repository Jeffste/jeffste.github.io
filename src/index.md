---
title: Jeff - Product designer
layout: "base.njk"
data: colection.work
size: 6
reverse: true;
alias: posts
---

<div class="hero-work">
  <div class="title-home">
    <h1>Leave it better<br/> than you found it.</h1>
  </div>
  <div class="description">
  <p>Hi all, It’s Jeff Product designer from the Netherlands. Doing my best to create good-looking and delightful digital experiences. Currently designing Employee Listening solutions for Effectory, Amsterdam.</p>
  </div>
</div>

<div class="grid-home">

{% for post in collections.work %}

  <div class="card">
      <a href="{{post.url}}"><h5>{{post.data.title}}</h5></a>
      <img src="{{post.data.featuredImage}}" alt="card">
  </div>
{% endfor %}
</div>
