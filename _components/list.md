---
title: Lists
description: Lists let you repeat elements using semantic HTML tags.  You may also indicate state on your list items using the global state names defined in the <code>_colors.scss</code> partial.
layout: component
states:
    - item:
        title: Basic List
        description: null
        tpl: list.html
    - item:
        title: Stateful List
        description: Indicate States
        tpl: list--states.html
    - item:
        title: Stateful List Bars
        description: Indicate States w/ Bars
        tpl: list--states-bar.html
classes:
    - item:
        title: .list__item--info
        description: Add informational bubble to list item, color defined in <code>_colors.scss</code>
        tag: .list__item
    - item:
        title: .list__item--success
        description: Add positive bubble to list item, color defined in <code>_colors.scss</code>
        tag: .list__item
    - item:
        title: .list__item--warning
        description: Add warning bubble to list item, color defined in <code>_colors.scss</code>
        tag: .list__item
    - item:
        title: .list__item--error
        description: Add error bubble to list item, color defined in <code>_colors.scss</code>
        tag: .list__item
    - item:
        title: .list__item--info-bar
        description: Add informational bar to list item, color defined in <code>_colors.scss</code>
        tag: .list__item
    - item:
        title: .list__item--success-bar
        description: Add positive bar to list item, color defined in <code>_colors.scss</code>
        tag: .list__item
    - item:
        title: .list__item--warning-bar
        description: Add warning bar to list item, color defined in <code>_colors.scss</code>
        tag: .list__item
    - item:
        title: .list__item--error-bar
        description: Add error bar to list item, color defined in <code>_colors.scss</code>
        tag: .list__item
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