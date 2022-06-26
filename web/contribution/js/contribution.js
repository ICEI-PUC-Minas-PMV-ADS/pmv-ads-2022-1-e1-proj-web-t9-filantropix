function saveSelectedCause(cause, imagePath, reward) {
    localStorage.setItem('selected-cause', cause);
    localStorage.setItem('cause-image-path', imagePath);
    localStorage.setItem('cause-reward', reward);
}

function getSelectedCause() {
    return localStorage.getItem('selected-cause');
}

function getSelectedCauseImage() {
    return localStorage.getItem('cause-image-path');
}

function saveContribution() {

    const valueinput = document.getElementById("value"); 
    const contribution = new Contribution(valueinput.value, getSelectedCause(), getSelectedCauseImage(), 'reward-01');
    ContributionManager.setContribution(contribution);
}

function choose_btn(element) {
    let valueinput = document.getElementById("value");
    valueinput.value = element.currentTarget.value;

}

function form_desable(element) {
    const input = document.getElementById(element.currentTarget.param);
    input.disabled = true;
}

function addEventListener() {
    let btn1 = document.getElementById("bt1");
    btn1.value = 50;

    btn1.addEventListener("click", choose_btn);

    let btn2 = document.getElementById("bt2");
    btn2.value = 150;

    btn2.addEventListener("click", choose_btn);

    let btn3 = document.getElementById("bt3");
    btn3.value = 300;

    btn3.addEventListener("click", choose_btn);

    let btn4 = document.getElementById("bt4");
    btn4.value = 500;

    btn4.addEventListener("click", choose_btn);

    let btn5 = document.getElementById("bt5");
    btn5.value = 1000;

    btn5.addEventListener("click", choose_btn);

    const Caus1 = document.getElementById("Causa1");
    Caus1.param = "Causa2";
    Caus1.addEventListener("input", form_desable);

    const Caus2 = document.getElementById("Causa2");
    Caus2.param = "Causa1";
    Caus2.addEventListener("input", form_desable);
}
addEventListener();

const input = document.querySelector('#value')
input.disabled = true

