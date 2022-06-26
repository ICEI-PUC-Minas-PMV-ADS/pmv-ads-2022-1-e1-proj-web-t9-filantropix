function init() {

    const currentAccount = Security.getCurrentUser(); 

    if (currentAccount != null) {
        const createAccountBtn = document.getElementById('btn-create-account');
        const dividerOpt = document.getElementById('divider-opt');
        createAccountBtn.style.visibility = 'collapse';
        dividerOpt.style.visibility = 'collapse';

        const loginButton = document.getElementById('btn-login');
        loginButton.addEventListener('click', () => {
            window.location.href = '../contribution/contribution.html';
        });
    }
    else {
        const loginButton = document.getElementById('btn-login');
        loginButton.addEventListener('click', () => {
            window.location.href = '../login/login.html';
        });
    }
}

init();