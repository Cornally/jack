---
title: Heroes
description: Add a hero to create a bigger splash!  Did you know -- 93% of hero images include scenes of nature?  Heroes occupy the full width of their container.
layout: component
sections:
    - item:
        title: Default
        description: null
        tpl: hero.html
---
<div class="container content">
    {% include docs__component-header.html %}
</div>

{% for state in page.sections %}
<a class="anchor--docs" id="{{ state.item.title | slugify }}"></a>
{% include {{ state.item.tpl }} %}
<div class="container content">
    <div class="col-12 m-0 p-0">
        <div class="card card--highlight">
            <div class="card__head">HTML<a class="copy" data-clipboard-target="#copy-{{ forloop.index }}">Copy HTML</a></div>
            <div class="card__body">{% highlight html %}{% include {{ state.item.tpl }} %}{% endhighlight %}</div>
            <textarea class="card__copy" id="copy-{{ forloop.index }}" readonly>{% include {{ state.item.tpl }} %}</textarea>
        </div>
    </div>
</div>  
{% endfor %}
