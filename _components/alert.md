---
title: Alerts
description: Cards can be used to isolate or create separation between content.  You may indicate state or include media (think photos or videos) in your cards.  They occupy 100% the width of their container by default.  In our examples, we wrap the cards with our grid construct to constrain the width.
layout: component
source:
    - item:
        scss: alert.scss
        folder: components
sections:
    - item:
        title: Basic Alerts
        tpl: alert.html
classes:
    - item:
        title: .alert--border
        description: Add a light solid border
        tag: .alert
    - item:
        title: .alert--shadow
        description: Add a light shadow (box-shadow)
        tag: .alert
    - item:
        title: .alert--no-padding
        description: Remove the default padding from the head/body
        tag: .alert
    - item:
        title: .alert--info
        description: Add blue informational treatment to card, derived from color mappings in <code>_colors.scss</code>
        tag: .alert
    - item:
        title: .alert--success
        description: Add green positive treatment to card, derived from color mappings in <code>_colors.scss</code>
        tag: .alert
    - item:
        title: .alert--warning
        description: Add orange warning treatment to card, derived from color mappings in <code>_colors.scss</code>
        tag: .alert
    - item:
        title: .alert--error
        description: Add red alert treatment to card, derived from color mappings in <code>_colors.scss</code>
        tag: .alert
---
<div class="container content">
    {% include docs__component-header.html %}
    
    {% for state in page.sections %}
    <hr class="divider">
    <div class="row">
        <a class="anchor--docs" id="{{ state.item.title | slugify }}"></a>
        <div class="card card--example">
            <div class="card__head">
                {{ state.item.title }}
                {% if state.item.description %}<div class="card__head__subtitle">{{ state.item.description }}</div>{% endif %}
            </div>
            <div class="card__body">
                <div class="row row--gap row--flex">
                    {% include {{ state.item.tpl }} section="example" %}
                </div>
            </div>
        </div>
        <div class="card card--highlight">
            <div class="card__head">HTML<a class="copy" data-clipboard-target="#copy-{{ forloop.index }}">Copy HTML</a></div>
            <div class="card__body">{% highlight html %}{% include {{ state.item.tpl }} %}{% endhighlight %}</div>
            <textarea class="card__copy" id="copy-{{ forloop.index }}" readonly>{% include {{ state.item.tpl }} %}</textarea>
        </div>
    </div>
    {% endfor %}
</div>