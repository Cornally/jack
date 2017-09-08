---
title: Colors
description: Quickly pin down your brand's palette with some of the following techniques.  Jack uses a number of generator functions behind the scenes to compile utility derivatives for a set of brand colors and colors that convey stateful meaning.
layout: component
ideas:
    - item:
        anchor: adding-brand-colors
        title: Adding Brand Colors
        description: Most utilities classes output a placeholder or mixin, even if their respective stylesheet isn't included and generated.  This lets you leverage their usefulness whilst not bloating your output.
        tpl: customization/colors.html
---
<div class="container content">
    <h1>{{ page.title }}</h1>
    <p class="well">{{ page.description }}</p>

    {% for idea in page.ideas %}
    <a class="anchor--docs" id="{{ idea.item.anchor }}"></a>
    <h2 class="m-b-2">{{ idea.item.title }}</h2>
    <p>{{ idea.item.description }}</p>
    {% if idea.item.tpl %}<div class="divider divider--label--left m-y-4"><div class="divider__text">Example</div></div>
        {% highlight scss %}{% include {{ idea.item.tpl }} %}{% endhighlight %}
    {% endif %}
    {% endfor %}
</div>