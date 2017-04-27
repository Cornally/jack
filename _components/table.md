---
title: Tables
description: Tables have some "baggage" from the olden days when folks used them for layout.  You know where they really shine?  When it's time to show tabular data.
layout: component
states:
    - item:
        title: Default
        description: Your standard no-frills table.
        tpl: table.html
    - item:
        title: Striped
        description: Add alternate zebra-striping to your table by adding the <code>.table--striped</code> class to the table tag.
        tpl: table--striped.html
    - item:
        title: Border
        description: Add a border with the <code>.table--border</code> class to frame your table.
        tpl: table--border.html
---
<div class="container content">
    <h1>{{ page.title }}</h1>
    <p class="well">{{ page.description }}</p>

    {% for state in page.states %}
    <hr class="divider">
    <div class="row">
        <div class="card card--example">
            <div class="card__head">
            <div class="card__head__title">{{ state.item.title }}</div>
            {% if state.item.description %}<div class="card__head__subtitle">{{ state.item.description }}</div>{% endif %}
            </div>
            <div class="card__body">{% include {{ state.item.tpl }} %}</div>
        </div>
        <div class="card card--highlight">
            <div class="card__head">HTML <a class="copy" data-clipboard-target="#copy-{{ forloop.index }}">Copy HTML</a></div>
            <div class="card__body">{% highlight html %}{% include {{ state.item.tpl }} %}{% endhighlight %}</div>
            <textarea class="card__copy" id="copy-{{ forloop.index }}" readonly>{% include {{ state.item.tpl }} %}</textarea>
        </div>
    </div>
    {% endfor %}
</div>