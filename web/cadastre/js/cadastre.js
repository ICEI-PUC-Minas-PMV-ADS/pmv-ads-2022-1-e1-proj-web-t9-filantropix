function cadastre() {

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    Security.createUser(nameInput.value, passwordInput.value, emailInput.value);
}

let element = document.getElementById('create-account-button');
element.addEventListener('click', cadastre);