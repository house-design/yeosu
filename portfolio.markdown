---
layout: default
title: Portfolio
permalink: /portfolio/
---

<section class="portfolio mb-5 pb-5">
  <div  style="width: 100%; height:100px;"></div>
  <div class="container">
    <div class="row justify-content-center justify-content-md-between">
      {% for post in site.posts %}
      <div class="col-auto mb-4 d-inline">
        <div class="portfolio-card card h-100" style="width: 15rem;">
          <div style="height:180px; overflow:hidden">
            <a href="{{ post.url | relative_url | replace: '.html', '' }}">
              {% if post.image %}
              <div class="portfolio-card-img" style="background-image: url('{{ post.image.path }}');"></div>
              {% else %}
              <div class="portfolio-card-img" style="background-image: url('{{ site.baseurl }}/assets/img/logo.png');"></div>
              {% endif %}
            </a>
          </div>
          <div class="card-body">
            <p class="card-text mb-0">{{ post.title }}</p>
            <!-- <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
          </div>
          <!-- <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div> -->
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>

