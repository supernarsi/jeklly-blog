---
layout: home
---

<div class="index-content tech">
    <div class="section">
        <ul class="artical-cate">
            <li><a href="/"><span>写作</span></a></li>
            <li class="on" style="text-align:center"><a href="/tech"><span>技术</span></a></li>
            <li style="text-align:right"><a href="/about.html"><span>于我</span></a></li>
        </ul>

        <div class="cate-bar"><span id="cateBar"></span></div>

        <ul class="artical-list">
        {% for post in site.categories.tech %}
            <li>
                <h2>
                    <a href="{{ post.url }}">{{ post.title }}</a>
                </h2>
                <div class="title-desc">{{ post.description }}</div>
            </li>
        {% endfor %}
        </ul>
    </div>
    <div class="aside">
    </div>
</div>
