---
title: Modals
description: Modals or dialog boxes are popping off!
layout: component
states:
    - item:
        title: Default
        description: Click to view!
        tpl: modal.html
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
            {% if state.item.description %}<div class="card__head__subtitle"><a href="#" id="modal__show" class="link">{{ state.item.description }}</a></div>{% endif %}
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

<style>
    #modal__ok, #modal__close { width: 100%; }
</style>
<script>

    var btnOk = document.getElementById('modal__ok'),
        btnClose = document.getElementById('modal__close'),
        btnShow = document.getElementById('modal__show');

    btnShow.addEventListener('click', function(e) {
        e.preventDefault();
        modalEl = document.querySelector('.modal');
        modalEl.classList.add('modal--active');
    });

    btnOk.addEventListener('click', function(e) {
        e.preventDefault();
        modalEl = document.querySelector('.modal');
        modalEl.classList.remove('modal--active');
    });

    btnClose.addEventListener('click', function(e) {
        e.preventDefault();
        modalEl = document.querySelector('.modal');
        modalEl.classList.remove('modal--active');
    });
</script>