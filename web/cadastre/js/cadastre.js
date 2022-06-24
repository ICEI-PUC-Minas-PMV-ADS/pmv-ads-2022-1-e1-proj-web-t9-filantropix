async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}

async function showAlert() {
    let element = document.getElementById('top-msg-container');
    element.style.visibility = 'visible';

    await sleep(1000);

    element.style.visibility = 'hidden';
}

function cadastre(event) {

    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    Security.createUser(nameInput.value, passwordInput.value, emailInput.value);

    showAlert();

    event.initEvent()
}

function addEventListeners() {
    let element = document.getElementById('top-msg-close-btn');
    element.addEventListener('click', () => {
        let inner = document.getElementById('top-msg-container');
        inner.style.visibility = 'hidden';
    });
}

let element = document.getElementById('cadastre-form-obj');
element.addEventListener('submit', cadastre);

addEventListeners();
