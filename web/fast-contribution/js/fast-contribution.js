function choose_btn(element) {
    let valueinput = document.getElementById("value");
    valueinput.value = element.currentTarget.value;

}

function form_desable(element) {
    const input = document.getElementById(element.currentTarget.param);
    input.disabled = true;
}

function saveContribution() {

    const valueinput = document.getElementById("value"); 
    const caseInput = document.getElementById('Causa1');
    const caseInput2 = document.getElementById('Causa2');
    
    if (caseInput.value != "") {
        const contribution = new Contribution(valueinput.value, caseInput.value, '../fast-contribution/assets/fast-contribution-image.jpg', null);
        ContributionManager.setContribution(contribution);
    }
    else {
        const contribution = new Contribution(valueinput.value, caseInput2.value, '../fast-contribution/assets/fast-contribution-image.jpg', null);
        ContributionManager.setContribution(contribution);
    }
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

    const Caus1 = document.getElementById("Causa1");
    Caus1.param = "Causa2";
    Caus1.addEventListener("input", form_desable);

    const Caus2 = document.getElementById("Causa2");
    Caus2.param = "Causa1";
    Caus2.addEventListener("input", form_desable);
}
addEventListener();

const input = document.querySelector('#value')

console.log(input)

input.disabled = true

