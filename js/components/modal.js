const btnOk = document.getElementById('modal__ok'),
    btnClose = document.getElementById('modal__close'),
    btnShow = document.getElementById('modal__show'),
    modalEl = document.querySelector('.modal');

if (btnShow) {
    btnShow.addEventListener('click', (e) => {
        e.preventDefault();
        modalEl.classList.add('modal--active');
    });
}

if (btnOk) {
    btnOk.addEventListener('click', (e) => {
        e.preventDefault();
        modalEl.classList.remove('modal--active');
    });
}

if (btnClose) {
    btnClose.addEventListener('click', (e) => {
        e.preventDefault();
        modalEl.classList.remove('modal--active');
    });
}