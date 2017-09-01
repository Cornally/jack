---
# Front matter comment to ensure Jekyll properly reads file.
---

let $wrapper = document.querySelector('.alert-wrapper');
let $content = `
            <div class="alert alert--success alert--shadow">
                <div class="alert__close" onclick="RemoveAlert()">{% include assets/icons/close.svg %}</div>
                <div class="alert__body">Snippet copied successfully!</div>
            </div>`

function CreateAlert() {
    $wrapper.innerHTML = $content;
};

function RemoveAlert() {
    $wrapper.innerHTML = '';
};

document.addEventListener("DOMContentLoaded", (event) => {
    const clipboard = new Clipboard('.copy');
    clipboard.on('success', (e) => {
        CreateAlert();
        setTimeout(() => {
            RemoveAlert();
        }, 3000);
    });
});