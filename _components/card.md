---
title: Cards
description: Card components can be used to isolate or create separation between content.  You may indicate state or include media (think photos or videos) in your cards.
layout: component
states:
    - item:
        title: Default
        description: Cards occupy 100% the width of their container by default.  In our example, we throw our grid construct around our card to constrain the width.
        tpl: card.html
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
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">{% include {{ state.item.tpl }} %}</div>
                </div>
            </div>
        </div>
        <div class="card card--highlight">
            <div class="card__head">HTML <a class="copy" data-clipboard-target="#copy-{{ forloop.index }}">Copy HTML</a></div>
            <div class="card__body">{% highlight html %}{% include {{ state.item.tpl }} %}{% endhighlight %}</div>
            <textarea class="card__copy" id="copy-{{ forloop.index }}" readonly>{% include {{ state.item.tpl }} %}</textarea>
        </div>
    </div>
    {% endfor %}
</div>