---
title: Modals
description: Modals or dialog boxes are popping off!
layout: component
sections:
    - item:
        title: Default
        description: Click to launch modal!
        tpl: modal.html
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
            {% if state.item.description %}<div class="card__head__subtitle"><a href="#" id="modal__show" class="link">{{ state.item.description }}</a></div>{% endif %}
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

<style>
    #modal__ok, #modal__close { width: 100%; }
</style>