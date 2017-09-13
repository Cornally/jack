---
title: Extendability
description: Jack was authored from the configuration backwards to a compiled visual.  One of the goals was to build a design system that you didn't have to wage battles against in a war of specificity.  This ensures you're not stuck with an end result that's overly complicated to customize.  The user of the system was put first and foremost.
layout: component
sections:
    - item:
        title: How It Works
        description: Jack's components are comprised of mixens.  Component styles are generated when they are flipped to a state of inclusion at the time the library is compiled.  To include the card component, you would override the variable that determines whether or not that the card component is included at compilation time, <code>$include_component_card&#58; true;</code>.
    - item:
        title: Adding and Removing Components
        description: By default, all components are included, <code>$jack_include_all&#58; true !default;</code>.  You may cherry-pick components to exclude at this point.  Setting <code>$include_component_card&#58; false;</code> before Jack's Sass compiles would include all components minus the card one.  Conversely, you can set <code>$jack_include_all&#58; false;</code> followed by <code>$include_component_card&#58; true;</code> to output just the card component.
    - item:
        title: Placeholders and Mixins
        description: Most utilities classes output a placeholder or mixin, even if their respective stylesheet isn't included and generated.  This lets you leverage their usefulness whilst not bloating your output.
        tpl: customization/extendability.html
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
    </div>
    {% endfor %}
</div>