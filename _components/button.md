---
title: Buttons
description: Meet the ubiquitous button; your friend when it's time to guide users through flows or complete a conversion.
layout: component
states:
    - item:
        title: Basic Buttons
        tpl: button.html
    - item:
        title: Outline Buttons
        tpl: button--line.html
classes:
    - item:
        title: .btn--default
        description: Create a standard button.
        tag: .a, &#60;button&#62;
    - item:
        title: .btn--success
        description: Use this state to indicate positive, forward progress
        tag: .a, &#60;button&#62;
    - item:
        title: .btn--warning
        description: Create a button that indicates caution
        tag: .a, &#60;button&#62;
    - item:
        title: .btn--info
        description: Use this state for triggering supplemental information
        tag: .a, &#60;button&#62;
    - item:
        title: .btn--error
        description: Use this button to depict extreme caution or severity of action
        tag: .a, &#60;button&#62;
    - item:
        title: .btn--disabled
        description: This button state is for when an action is unavailable
        tag: .a, &#60;button&#62;
    - item:
        title: .btn--primary
        description: Button mapped to your branding's primary color, derived from color mappings in <code>_colors.scss</code>
        tag: .a, &#60;button&#62;
    - item:
        title: .btn--secondary
        description: Button mapped to your branding's secondary color, derived from color mappings in <code>_colors.scss</code>
        tag: .a, &#60;button&#62;
---
<div class="container content">
    <h1>{{ page.title }}</h1>
    <p class="well">{{ page.description }}</p>

    <a class="anchor--docs" id="modifier-classes"></a>
    <table class="table table--striped m-b-4">
        <thead><tr><th>Modifier Classes</th><th>Modifies</th><th>Description</th></tr></thead>
        <tbody>
            {% for class in page.classes %}
            <tr><td><code>{{ class.item.title }}</code></td><td><code>{{ class.item.tag }}</code></td><td>{{ class.item.description }}</td></tr>
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