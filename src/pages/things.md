---
title: Things
---



{% for post in collections.posts %}

  <div class="cardThings">
      <span><a href="{{post.url}}"><h4>{{post.data.title}}</h4></a>
      <p>{{post.data.short}}</p></span>
      <div class="cardBottom">
        <span class="date">{{ post.date | postDate }}</span>
        <!-- <span class="tag">{{ post.date | postDate }}</span> -->
      </div>
    <!-- <span class="tag">Dones</span> -->
  </div>
{% endfor %}
