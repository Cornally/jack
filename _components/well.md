---
title: Wells
description: Use wells to highlight sections of content.  You're looking at a well right now, in the flesh!
layout: component
sections:
    - item:
        title: Basic Well
        tpl: well.html
classes:
    - item:
        title: .well--default
        description: Create a standard well.
        tag: .well
    - item:
        title: .well--success
        description: Use this state to indicate positive, forward progress
        tag: .well
    - item:
        title: .well--warning
        description: Create a button that indicates caution
        tag: .well
    - item:
        title: .well--info
        description: Use this state for triggering supplemental information
        tag: .well
    - item:
        title: .well--error
        description: Use this button to depict extreme caution or severity of action
        tag: .well
    - item:
        title: .well--disabled
        description: This button state is for when an action is unavailable
        tag: .well
    - item:
        title: .well--primary
        description: Button mapped to your branding's primary color, derived from color mappings in <code>_colors.scss</code>
        tag: .well
    - item:
        title: .well--secondary
        description: Button mapped to your branding's secondary color, derived from color mappings in <code>_colors.scss</code>
        tag: .well
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