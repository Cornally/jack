---
title: Links
description: Links help connect different uniform resource locators on the interwebs.
layout: component
states:
    - item:
        title: Basic Links
        tpl: link.html
classes:
    - item:
        title: .link--default
        description: Create a standard button.
        tag: .link, &#60;a&#62;
    - item:
        title: .link--success
        description: Use this state to indicate positive, forward progress
        tag: .link, &#60;a&#62;
    - item:
        title: .link--warning
        description: Create a button that indicates caution
        tag: .link, &#60;a&#62;
    - item:
        title: .link--info
        description: Use this state for triggering supplemental information
        tag: .link, &#60;a&#62;
    - item:
        title: .link--error
        description: Use this button to depict extreme caution or severity of action
        tag: .link, &#60;a&#62;
    - item:
        title: .link--disabled
        description: This button state is for when an action is unavailable
        tag: .link, &#60;a&#62;
    - item:
        title: .link--primary
        description: Button mapped to your branding's primary color, derived from color mappings in <code>_colors.scss</code>
        tag: .link, &#60;a&#62;
    - item:
        title: .link--secondary
        description: Button mapped to your branding's secondary color, derived from color mappings in <code>_colors.scss</code>
        tag: .link, &#60;a&#62;
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