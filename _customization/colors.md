---
title: Colors
description: Quickly pin down your brand's palette with some of the following techniques.  Jack uses a number of generator functions behind the scenes to compile utility derivatives for a set of brand colors and colors that convey stateful meaning.
layout: component
ideas:
    - item:
        title: Add Brand Colors
        description: Use the native <code>map-merge</code> functionality of Sass to add new colors to your brand array mapping.
        tpl: customization/colors.html
    - item:
        title: Remove Brand Colors
        description: Use the native <code>map-remove</code> functionality of Sass to remove colors from your brand array mapping.
        tpl: customization/colors.html
---
<div class="container content">
    <h1>{{ page.title }}</h1>
    <p class="well">{{ page.description }}</p>

    {% for idea in page.ideas %}
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