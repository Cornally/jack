---
title: List
layout: component
---

<h1 class="m-b-xs-4">Lists</h1>
<p class="m-b-xs-4 well">Incidunt delectus et ipsum porro expedita omnis. Consequuntur qui dolorem animi adipisci id et id repellat. Tempora nihil et et voluptates minima. Nihil ipsa doloremque voluptate vitae non aut aut accusantium. Commodi voluptatem molestiae cumque corrupti ut porro ut. Dolor itaque vel modi.</p>
<hr class="divider m-b-xs-2">
<div class="row m-b-xs-5">
    <div class="col-xs-12 col-md-6 card">
        <div class="card__head p-xs-2">Default</div>
        <div class="card__body p-xs-2">{% include list.html %}</div>
    </div>
    <div class="col-xs-12 card card--highlight">
        <div class="card__head p-xs-2">HTML</div>
        <div class="card__body">{% highlight html %}{% include list.html %}{% endhighlight %}</div>
    </div>
</div>
<hr class="divider m-b-xs-2">
<div class="row m-b-xs-5">
    <div class="col-xs-12 col-md-6 card">
        <div class="card__head p-xs-2">States</div>
        <div class="card__body p-xs-2">{% include list--states.html %}</div>
    </div>
    <div class="col-xs-12 card card--highlight">
        <div class="card__head p-xs-2">HTML</div>
        <div class="card__body">{% highlight html %}{% include list--states.html %}{% endhighlight %}</div>
    </div>
</div>
<hr class="divider m-b-xs-2">
<div class="row">
    <div class="col-xs-12 col-md-6 card">
        <div class="card__head p-xs-2">States (Bars)</div>
        <div class="card__body p-xs-2">{% include list--states-bar.html %}</div>
    </div>
    <div class="col-xs-12 card card--highlight">
        <div class="card__head p-xs-2">HTML</div>
        <div class="card__body">{% highlight html %}{% include list--states-bar.html %}{% endhighlight %}</div>
    </div>
</div>