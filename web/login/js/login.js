function OnInput_inputPassword() {
    const elem = document.getElementById('input-password');
    const value = elem.value;
}

const inputPassword = document.getElementById('input-password');
inputPassword.oninput = OnInput_inputPassword();