function loginIn(event) {

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    let response = Security.tryLoginIn(emailInput.value, passwordInput.value);

    if (response.type == SecResponse.userNotFound) {
        setMessage('Usuário não encontrado!');
        window.location.reload();
        return false;
    }

    return true;
}