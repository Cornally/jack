---
title: Cards
description: Cards can be used to isolate or create separation between content.  You may indicate state or include media (think photos or videos) in your cards.  They occupy 100% the width of their container by default.  In our examples, we wrap the cards with our grid construct to constrain the width.
layout: component
states:
    - item:
        title: Default
        tpl: card.html
    - item:
        title: Media Card
        description: Include a photo or video thumbnail alongside your card content
        tpl: card--media.html
    - item:
        title: Stateful Card
        description: Indicate state by adding the states defined inside <code>colors.scss</code>
        tpl: card--states.html
---
<div class="container content">
    <h1>{{ page.title }}</h1>
    <p class="well">{{ page.description }}</p>

    {% for state in page.states %}
    <hr class="divider">
    <div class="row">
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