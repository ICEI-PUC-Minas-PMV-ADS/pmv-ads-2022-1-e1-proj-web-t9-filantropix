function showFields() {
    const fields = document.getElementById('payment-method-fields');
    fields.style.visibility = 'visible';

    const ccName = document.getElementById('cc-name');
        const ccNumber = document.getElementById('cc-number');
        const ccExpiration = document.getElementById('cc-expiration');
        const ccCVV = document.getElementById('cc-cvv');

        ccName.disabled = false;
        ccNumber.disabled = false;
        ccExpiration.disabled = false;
        ccCVV.disabled = false;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }


function finalizePayment(event) {

    event.preventDefault();

    setMessage('Obrigado pela doação! S2');

    const currentUser = Security.getCurrentUser();

    if (currentUser) {
        const causeReward = localStorage.getItem('cause-reward');    
        RewardManager.incrementReward(currentUser.email, causeReward);
        window.location.href = '../profile/profile.html';
    }
    else {
        window.location.href = '../home/home.html';
    }
}

function addEventListeners() {

    const boletoButton = document.getElementById('boleto');
    const creditButton = document.getElementById('credit');
    const debitButton = document.getElementById('debit');
    const paymentForm = document.getElementById('paymentForm');

    boletoButton.addEventListener('click', ()=> {
        const fields = document.getElementById('payment-method-fields');
        fields.style.visibility = 'hidden';
        
        const ccName = document.getElementById('cc-name');
        const ccNumber = document.getElementById('cc-number');
        const ccExpiration = document.getElementById('cc-expiration');
        const ccCVV = document.getElementById('cc-cvv');

        ccName.disabled = true;
        ccNumber.disabled = true;
        ccExpiration.disabled = true;
        ccCVV.disabled = true;
    })

    paymentForm.addEventListener('submit', finalizePayment);
    creditButton.addEventListener('click', showFields);
    debitButton.addEventListener('click', showFields);

}

function loadInformations() {

    const imageElement = document.getElementById('cause-image');
    const causeReward = localStorage.getItem('cause-reward');

    
    const contribution = ContributionManager.getContribution();
    const causeTitle = document.getElementById('cause-title');
    
    imageElement.src = contribution.imagePath;
    causeTitle.innerHTML = contribution.cause;

    const contributionValue = document.getElementById('contribution-value');
    contributionValue.innerHTML = `${contribution.value}`;

    const currentUser = Security.getCurrentUser(); 

    if (!currentUser) {
        const rewardContainer = document.getElementById('reward-container');
        rewardContainer.style.visibility = 'hidden';
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
            rewardStatus.addEventListener('click', () => {
                RewardManager.cleanReward(accountEmail, `reward-${rewardNumber}`);
                setMessage('Recompensa recebida!!');
                window.location.href = '../profile/profile.html';
            })
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