function showFields() {
    const fields = document.getElementById('payment-method-fields');
    fields.style.visibility = 'visible';
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }


function finalizePayment() {

    const causeReward = localStorage.getItem('cause-reward');
    const currentUser = Security.getCurrentUser();

    RewardManager.incrementReward(currentUser.email, causeReward);

    setMessage('Obrigado pela doação! S2');
}

function addEventListeners() {

    const boletoButton = document.getElementById('boleto');
    const creditButton = document.getElementById('credit');
    const debitButton = document.getElementById('debit');

    boletoButton.addEventListener('click', ()=> {
        const fields = document.getElementById('payment-method-fields');
        fields.style.visibility = 'hidden';
    })

    creditButton.addEventListener('click', showFields);
    debitButton.addEventListener('click', showFields);

}

function loadInformations() {

    const causeImagePath = localStorage.getItem('cause-image-path');
    const imageElement = document.getElementById('cause-image');
    const causeReward = localStorage.getItem('cause-reward');

    imageElement.src = causeImagePath;

    const contribution = ContributionManager.getContribution();
    const causeTitle = document.getElementById('cause-title');

    causeTitle.innerHTML = contribution.cause;

    const contributionValue = document.getElementById('contribution-value');
    contributionValue.innerHTML = `${contribution.value}`;

    const currentUser = Security.getCurrentUser(); 

    if (!currentUser) {

        return;

    }
    else {
        const reward = RewardManager.getReward(currentUser.email, causeReward);
        const rewardTitle = document.getElementById('reward-title');
        const rewardDescription = document.getElementById('reward-description');
        const rewardStatus = document.getElementById('reward-status');

        rewardTitle.innerHTML = reward.rewardTitle;
        rewardDescription.innerHTML = reward.rewardDescription;
        rewardStatus.innerHTML = reward.rewardStatus;

        if (!reward.isCompleted) {
            rewardStatus.innerHTML = `${reward.currentPoints}/${reward.maxPoint}`;
        }
        else {
            rewardStatus.innerHTML = `Receber`;
        }

        const email = document.getElementById('email');
        const firstName = document.getElementById('firstName');
        const secondName = document.getElementById('lastName');

        firstName.value = currentUser.name.split(' ')[0];
        secondName.value = currentUser.name.split(' ')[1];
        email.value = currentUser.email;
    }
}


addEventListeners();
loadInformations();