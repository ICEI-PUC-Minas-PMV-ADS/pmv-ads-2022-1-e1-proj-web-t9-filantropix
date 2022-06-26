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

function setValueFrom(btnValueNumber) {

    const element = document.getElementById(`btnValue${btnValueNumber.toString()}`);
    element.value = `R$${btnValueNumber},00`;
    element.addEventListener('click', (element) => {
        let valueinput = document.getElementById("value");
        valueinput.value = element.currentTarget.value;
    });
}

function addEventListener() {
    setValueFrom(50);
    setValueFrom(150);
    setValueFrom(300);
    setValueFrom(500);
    setValueFrom(1000);
}

addEventListener();

const input = document.querySelector('#value')
input.disabled = true

