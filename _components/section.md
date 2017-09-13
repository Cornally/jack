---
title: Sections
description: Sections are used to differentiate content.
layout: component
sections:
    - item:
        title: Angled Background
        description: Add an angled background to your sections.
        tpl: section--angled.html
classes:
    - item:
        title: .section--angled
        description: Add an angled background to your section.  Adjacent sections receive a dirvative of your brand coloring by default.
        tag: .section
---
<div class="container content">
    {% include docs__component-header.html %}
</div>

{% for state in page.sections %}
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
