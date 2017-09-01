let $wrapper = document.querySelector('.alert-wrapper');
let $content = `
            <div class="alert alert--success alert--shadow">
                <div class="alert__close" onclick="RemoveAlert()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <g fill-rule="evenodd">
                            <rect width="20" height="2" x="2" y="11" transform="rotate(-45 12 12)"/>
                            <rect width="20" height="2" x="2" y="11" transform="rotate(45 12 12)"/>
                        </g>
                    </svg>
                </div>
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