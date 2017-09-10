let $wrapper = document.querySelector('.alert-wrapper');

function CreateAlert(config) {
    let id = Date.now();
    let alertId = `alert-${ id }`;

    let $content = document.createElement('div');
    $content.className = `alert alert--${ config.type } alert--shadow`;
    $content.setAttribute('id', alertId);
    $content.innerHTML = `<div class="alert__close" onclick="RemoveAlert('${ alertId }')">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill-rule="evenodd">
                    <rect width="20" height="2" x="2" y="11" transform="rotate(-45 12 12)"/>
                    <rect width="20" height="2" x="2" y="11" transform="rotate(45 12 12)"/>
                </g>
            </svg>
        </div>
        <div class="alert__body">${ config.text }</div>`;
    $wrapper.appendChild($content);

    setTimeout(() => {
        RemoveAlert(alertId);
    }, config.timeout);
};

function RemoveAlert() {
    if (arguments.length) {
        let $element = document.getElementById(arguments[0]) || null;
        if ($element) $element.parentNode.removeChild($element);
    } else {
        $wrapper.innerHTML = '';
    }
};

document.addEventListener("DOMContentLoaded", (event) => {
    const clipboard = new Clipboard('.copy');
    clipboard.on('success', (e) => {
        CreateAlert({
            text: 'Code copied to clipboard!',
            type: 'success',
            timeout: 3000
        });
    });
});