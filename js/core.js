"use strict";function CreateAlert(){$wrapper.innerHTML=$content}function RemoveAlert(){$wrapper.innerHTML=""}function navTriggerHandler(){navActive?$nav.classList.remove("nav--slidedown--active"):$nav.classList.add("nav--slidedown--active"),navActive=!navActive}function subNavTriggerHandler(){subNavActive?$subNavList.classList.remove("list--active"):$subNavList.classList.add("list--active"),subNavActive=!subNavActive}var $wrapper=document.querySelector(".alert-wrapper"),$content='\n<div class="alert alert--success alert--shadow">\n    <div class="alert__close" onclick="RemoveAlert()">\n        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n            <g fill-rule="evenodd">\n                <rect width="20" height="2" x="2" y="11" transform="rotate(-45 12 12)"/>\n                <rect width="20" height="2" x="2" y="11" transform="rotate(45 12 12)"/>\n            </g>\n        </svg>\n    </div>\n    <div class="alert__body">Snippet copied successfully!</div>\n</div>';document.addEventListener("DOMContentLoaded",function(e){new Clipboard(".copy").on("success",function(e){CreateAlert(),setTimeout(function(){RemoveAlert()},3e3)})});var $nav=document.querySelector(".nav--slidedown"),$navTrigger=document.querySelector(".nav__hamburger__icon"),navActive=!1;$navTrigger&&$nav&&$navTrigger.addEventListener("click",function(){return navTriggerHandler()});var $subNav=document.querySelector(".nav__links__list"),$subNavTrigger=$subNav.querySelector(".nav__links__trigger"),$subNavList=$subNav.querySelector(".list"),subNavActive=!1;$subNavTrigger&&$subNav&&$subNavTrigger.addEventListener("click",function(){return subNavTriggerHandler()});