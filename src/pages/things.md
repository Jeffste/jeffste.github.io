---
title: Things
---



{% for post in collections.posts %}

  <div class="cardThings">
      <span><a href="{{post.url}}"><h3>{{post.data.title}}</h3></a>
      <p>{{post.data.short}}</p></span>
    <!-- <span class="tag">Dones</span> -->
  </div>
{% endfor %}
