---
layout: default
title: Portfolio
permalink: /portfolio/
---

<div  style="width: 100%; height:100px;"></div>

<section class="portfolio mb-3">
  <div class="container">
    <div class="row row-cols-1 row-cols-lg-4">
      {% for post in site.posts %}
      <div class="col  pb-4">

        <div class="portfolio-card card">
          <div style="height:180px;">
            <a href="{{ post.url | relative_url | replace: '.html', '' }}">
              {% if post.image %}
              <div class="portfolio-card-img" style="background-image: url('{{ post.image.path }}');"></div>
              {% else %}
              <div class="portfolio-card-img" style="background-image: url('{{ site.baseurl }}/assets/img/logo.png');"></div>
              {% endif %}
            </a>
          </div>
          <div class="card-body">
            <p class="card-text">{{ post.title }}</p>
            <a href="{{ post.url | relative_url | replace: '.html', '' }}" class="btn btn-secondary btn-sm">자세히보기</a>
          </div>
        </div>

      </div>
      {% endfor %}
    </div>
  </div>
</section>

