---
title: Dividers
description: Use dividers to split content up.  You may style <code>&#60;hr&#62;</code> tags directly or apply a <code>.divider</code> class to a  <code>&#60;div&#62;</code> element.
layout: component
source:
    - item:
        scss: divider.scss
        folder: components
sections:
    - item:
        title: Basic Divider
        description: null
        tpl: divider.html
    - item:
        title: Labeled Divider
        description: Add a label to the center of your divider
        tpl: divider--label.html
    - item:
        title: Stateful Divider
        description: Indicate state with your divider
        tpl: divider--states.html
classes:
    - item:
        title: .divider--label
        description: Add a centered label to your divider
        tag: .divider
    - item:
        title: .divider--label--left
        description: Add a left-aligned label to your divider
        tag: .divider
    - item:
        title: .divider--label--right
        description: Add a right-aligned label to your divider
        tag: .divider
    - item:
        title: .divider--info
        description: Add blue informational treatment to divider, derived from color mappings in <code>_colors.scss</code>
        tag: .divider
    - item:
        title: .divider--success
        description: Add green positive treatment to divider, derived from color mappings in <code>_colors.scss</code>
        tag: .divider
    - item:
        title: .divider--warning
        description: Add orange warning treatment to divider, derived from color mappings in <code>_colors.scss</code>
        tag: .divider
    - item:
        title: .divider--error
        description: Add red alert treatment to divider, derived from color mappings in <code>_colors.scss</code>
        tag: .divider
---
<div class="container content">
    {% include docs__component-header.html %}

    {% for state in page.sections %}
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