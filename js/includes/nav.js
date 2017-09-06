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
let $subNav = document.querySelectorAll('.nav__links__list');

function subNavTriggerHandler(subNavList) {
    let active = subNavList.getAttribute('data-active');
    if (active === "true") {
        subNavList.classList.remove('list--active');
        subNavList.setAttribute('data-active', false);
    } else {
        subNavList.classList.add('list--active');
        subNavList.setAttribute('data-active', true);
    }
}

if ($subNav.length) {
    $subNav.forEach((subNav, idx) => {
        let subNavTrigger = subNav.querySelector('.nav__links__trigger'),
            subNavList = subNav.querySelector('.list');
        subNavTrigger.addEventListener('click', () => subNavTriggerHandler(subNavList));
    });
}