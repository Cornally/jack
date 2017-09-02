---
title: Form Controls
description: Inputs, selects, text areas, checkboxes, radios, and other building blocks for forms.
layout: component
states:
    - item:
        title: Basic Controls
        tpl: form-control.html
classes:
    - item:
        title: .field--checkbox
        description: Adds checkbox styling.
        tag: .field
    - item:
        title: .field--color
        description: Adds native color picker styling.
        tag: .field
    - item:
        title: .field--radio
        description: Adds radio button styling.
        tag: .field
    - item:
        title: .field--select
        description: Adds select input styling.
        tag: .field
---
<div class="container content">
    <h1>{{ page.title }}</h1>
    <p class="well">{{ page.description }}</p>

    <a class="anchor--docs" id="modifier-classes"></a>
    <table class="table table--striped m-b-4">
        <thead><tr><th>Modifier Classes</th><th>Modifies</th><th>Description</th></tr></thead>
        <tbody>
            {% for class in page.classes %}
            <tr><td><code>{{ class.item.title }}</code></td><td><code>{{ class.item.tag }}</code></td><td class="text-breakword">{{ class.item.description }}</td></tr>
            {% endfor %}
        </tbody>
    </table>
    
    {% for state in page.states %}
    <hr class="divider">
    <div class="row">
        <a class="anchor--docs" id="{{ state.item.title | slugify }}"></a>
        <div class="card card--example">
            <div class="card__head">
                {{ state.item.title }}
                {% if state.item.description %}<div class="card__head__subtitle">{{ state.item.description }}</div>{% endif %}
            </div>
            <div class="card__body">
                <div class="row row--gap">
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