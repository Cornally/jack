---
title: Tabs
description: Tabs are used to divide content up over space.  They're also used when playing guitar.  Both are infinitely useful.
layout: component
states:
    - item:
        title: Basic Tabs
        description: null
        tpl: tab.html
classes:
    - item:
        title: .tabs--border
        description: Add a border to the tabs
        tag: .tabs
    - item:
        title: .tabs__tab--active
        description: Actively selected tab
        tag: .tabs__tab
    - item:
        title: .tabs__tab--disabled
        description: Used when a tab cannot be selected but it's worth indicating its existence
        tag: .tabs__tab
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
            <div class="card__body">{% include {{ state.item.tpl }} section="example" %}</div>
        </div>
        <div class="card card--highlight">
            <div class="card__head">HTML<a class="copy" data-clipboard-target="#copy-{{ forloop.index }}">Copy HTML</a></div>
            <div class="card__body">{% highlight html %}{% include {{ state.item.tpl }} %}{% endhighlight %}</div>
            <textarea class="card__copy" id="copy-{{ forloop.index }}" readonly>{% include {{ state.item.tpl }} %}</textarea>
        </div>
    </div>
    {% endfor %}
</div>