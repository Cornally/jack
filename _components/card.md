---
title: Cards
description: Cards can be used to isolate or create separation between content.  You may indicate state or include media (think photos or videos) in your cards.  They occupy 100% the width of their container by default.  In our examples, we wrap the cards with our grid construct to constrain the width.
layout: component
source:
    - item:
        scss: card.scss
        folder: components
sections:
    - item:
        title: Basic Cards
        tpl: card.html
    - item:
        title: Media Cards
        description: Include a photo or video thumbnail alongside your card content
        tpl: card--media.html
    - item:
        title: Stateful Cards
        description: Indicate state by adding the states defined inside <code>_colors.scss</code>
        tpl: card--states.html
classes:
    - item:
        title: .card--border
        description: Add a light solid border
        tag: .card
    - item:
        title: .card--shadow
        description: Add a light shadow (box-shadow)
        tag: .card
    - item:
        title: .card--no-padding
        description: Remove the default padding from the head/body
        tag: .card
    - item:
        title: .card--info
        description: Add blue informational treatment to card, derived from color mappings in <code>_colors.scss</code>
        tag: .card
    - item:
        title: .card--success
        description: Add green positive treatment to card, derived from color mappings in <code>_colors.scss</code>
        tag: .card
    - item:
        title: .card--warning
        description: Add orange warning treatment to card, derived from color mappings in <code>_colors.scss</code>
        tag: .card
    - item:
        title: .card--error
        description: Add red alert treatment to card, derived from color mappings in <code>_colors.scss</code>
        tag: .card
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