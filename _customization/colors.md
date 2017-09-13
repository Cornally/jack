---
title: Colors
description: Quickly pin down your brand's palette with some of the following techniques.  Jack uses a number of generator functions behind the scenes to compile utility derivatives for a set of brand colors and colors that convey stateful meaning.
layout: component
sections:
    - item:
        title: Add Brand Colors
        description: Use the native <code>map-merge</code> functionality of Sass to add new colors to your brand array mapping.
        tpl: customization/colors.html
        demoTpl: customization/colors--demo.html
    - item:
        title: Remove Brand Colors
        description: Use the native <code>map-remove</code> functionality of Sass to remove colors from your brand array mapping.
        tpl: customization/colors.html
    - item:
        title: Add State Colors
        description: Jack ships with 'success', 'warning', 'error', 'disabled', and 'info' states that reside in the <code>$colors_states</code> array map.  This map is looped through by components like buttons, cards, and alerts.  Use the native <code>map-merge</code> functionality of Sass to add colors from your brand array mapping.  The underpinnings are identical to brand color extension, the key difference being semantics reserved for indicating component state.
        tpl: customization/colors.html
        demoTpl: customization/colors--demo.html
    - item:
        title: Generate Classes
        description: Auto-generate color shade derivative styling classes for any CSS property that accepts a color for the value, e.g. <code>color</code>, <code>background</code>, <code>border-color</code>, or <code>fill</code>  You may also pass rgb/rgba/hsl properties as the base color.
        tpl: customization/colors.html
        demoTpl: customization/colors--demo.html
    - item:
        title: Generate Placeholders
        description: Auto-emit color shade %placeholders for any CSS property that accepts a color for the value, e.g. <code>color</code>, <code>background</code>, <code>border-color</code>, or <code>fill</code>.  You may also pass rgb/rgba/hsl properties as the base color.
        tpl: customization/colors.html
---
<div class="container content">
    {% include docs__component-header.html %}

    {% for idea in page.sections %}
    <hr class="divider">
    <div class="row">
        <a class="anchor--docs" id="{{ idea.item.title | slugify }}"></a>
        <div class="card card--example">
            <div class="card__head">
                {{ idea.item.title }}
                {% if idea.item.description %}<div class="card__head__subtitle">{{ idea.item.description }}</div>{% endif %}
            </div>
        </div>
        
        {% if idea.item.tpl %}<div class="card card--highlight">
            <div class="card__head">Example<a class="copy" data-clipboard-target="#copy-{{ forloop.index }}">Copy Example</a></div>
            <div class="card__body">{% highlight scss %}{% capture section %}{{ idea.item.title | slugify }}{% endcapture %}{% include {{ idea.item.tpl }} %}{% endhighlight %}</div>
            <textarea class="card__copy" id="copy-{{ forloop.index }}" readonly>{% include {{ idea.item.tpl }} %}</textarea>
        </div>
        {% endif %}
        {% if idea.item.demoTpl %}{% include {{ idea.item.demoTpl }} %}{% endif %}
    </div>
    {% endfor %}
</div>