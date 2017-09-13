---
title: Tables
description: Tables have some "baggage" from the olden days when folks used them for layout.  You know where they really shine?  When it's time to show tabular data.
layout: component
sections:
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
classes:
    - item:
        title: .table--border
        description: Add a border to the table
        tag: .table
    - item:
        title: .table--striped
        description: Add odd/even background highlighting to table
        tag: .table
---
<div class="container content">
    {% include docs__component-header.html %}

    {% for state in page.sections %}
    <hr class="divider">
    <div class="row">
        <a class="anchor--docs" id="{{ state.item.title | slugify }}"></a>
        <div class="card card--example">
            <div class="card__head">
                <div class="card__head__title">{{ state.item.title }}</div>
                {% if state.item.description %}<div class="card__head__subtitle">{{ state.item.description }}</div>{% endif %}
            </div>
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