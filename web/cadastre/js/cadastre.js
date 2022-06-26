function cadastre(event) {

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const response = Security.createUser(nameInput.value, passwordInput.value, emailInput.value);
    const createAccountBtn = document.getElementById('create-account-button');

    createAccountBtn.enable = false;

    if (response.type == SecResponse.userExists) {

        setMessage('Usuário já cadastrado!');      
        window.location.reload();
        return false;
    }
    else {
        setMessage('Usuário cadastrado!');
        return true;
    }
}

function addEventListeners() {
    let element = document.getElementById('top-msg-close-btn');
    element.addEventListener('click', () => {
        let inner = document.getElementById('top-msg-container');
        inner.style.visibility = 'hidden';
    });
}


addEventListeners();
