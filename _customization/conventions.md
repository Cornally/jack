---
title: Conventions
description: Consistency is king.  Understand the following conventions used throughout Jack for more fluid productivity.
layout: component
sections:
    - item:
        title: Component Structure
        description: We utilize BEM ("Block", "Element", and "Modifier") to separate presentation from DOM structure and to convey hierarchical dependencies where necessary.  For a crash course in BEM principles, visit <a href="http://getbem.com/introduction/" class="link" target="_blank">Get BEM</a> and <a href="https://css-tricks.com/bem-101/" class="link" target="_blank">BEM 101</a>.
    - item:
        title: Spacing Characters
        description: Utility classes utilize a hyphen as a spacing character while Sass variables and placeholders use an underscore.
---
<div class="container content content--short">
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