// Toggle the hamburger menu open
let $nav = document.querySelector('.nav--slidedown'),
    $navTrigger = document.querySelector('.nav__hamburger__icon');
let navActive = false;

function navTriggerHandler() {
    if (navActive) {
        $nav.classList.remove('nav--slidedown--active');
    } else {
        $nav.classList.add('nav--slidedown--active');
    }
    navActive = !navActive;
}

if ($navTrigger && $nav) {
    $navTrigger.addEventListener('click', () => navTriggerHandler());
}

// Toggle sub-menus open
let $subNav = document.querySelector('.nav__links__list'),
    $subNavTrigger = $subNav.querySelector('.nav__links__trigger'),
    $subNavList = $subNav.querySelector('.list');
let subNavActive = false;

function subNavTriggerHandler() {
    if (subNavActive) {
        $subNavList.classList.remove('list--active');
    } else {
        $subNavList.classList.add('list--active');
    }
    subNavActive = !subNavActive;
}

if ($subNavTrigger && $subNav) {
    $subNavTrigger.addEventListener('click', () => subNavTriggerHandler());
}