function loginIn(event) {

    event.preventDefault();
    
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    console.log('in login');

    let response = Security.tryLoginIn(emailInput.value, passwordInput.value);

    if (response.type == Response.userNotFind) {
        alert('usuário não encontrado');
        return;
    }

    window.location.href = '../home/home.html';
}


let element = document.getElementById('loginIn');
element.addEventListener('submit', loginIn);