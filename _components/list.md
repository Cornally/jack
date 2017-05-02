---
title: Lists
description: Lists let you repeat elements using semantic HTML tags.  You may also indicate state on your list items using the global state names defined in the <code>_colors.scss</code> partial.
layout: component
states:
    - item:
        title: Default
        description: null
        tpl: list.html
    - item:
        title: States
        description: Indicate States
        tpl: list--states.html
    - item:
        title: States Bars
        description: Indicate States w/ Bars
        tpl: list--states-bar.html
---
<div class="container content">
    <h1>{{ page.title }}</h1>
    <p class="well">{{ page.description }}</p>

    {% for state in page.states %}
    <hr class="divider">
    <div class="row">
        <div class="card card--example">
            <div class="card__head">{{ state.item.title }}</div>
            <div class="card__body">{% include {{ state.item.tpl }} %}</div>
        </div>
        <div class="card card--highlight">
            <div class="card__head">HTML<a class="copy" data-clipboard-target="#copy-{{ forloop.index }}">Copy HTML</a></div>
            <div class="card__body">{% highlight html %}{% include {{ state.item.tpl }} %}{% endhighlight %}</div>
            <textarea class="card__copy" id="copy-{{ forloop.index }}" readonly>{% include {{ state.item.tpl }} %}</textarea>
        </div>
    </div>
    {% endfor %}
</div>