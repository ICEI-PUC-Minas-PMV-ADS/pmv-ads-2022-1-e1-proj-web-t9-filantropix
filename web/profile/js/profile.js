function changeInformations() {

    const name = document.getElementById('nameInput').value;
    const currentPass = document.getElementById('currentPasswordInput').value;
    const newPass = document.getElementById('newPasswordInput').value;
    const currentAccount = Security.getCurrentUser();

    console.log(currentPass);

    if (currentPass == "" &&
        newPass == "") {

        Security.changeName(currentAccount, name);
        setMessage('Nome alterado!');
        return;
    }
    else if (currentPass != "" && 
             newPass == "") {
        Security.changeName(currentAccount, name);
        setMessage('Nova senha não informada!');
        return;
    }
    else if (newPass != "" &&
            currentPass == "") {
        Security.changeName(currentAccount, name);
        setMessage('Senha atual não informada!');
        return;
    }
    else {
        const response = Security.changePassword(currentAccount, currentPass, newPass);
        Security.changeName(currentAccount, name);  
    
        if (response == SecResponse.invalidPassword) {
            setMessage('Senha inválida!');
        }
        else {
            setMessage('Informações alteradas!')
        }
    }

    window.location.reload();
}

function logOff() {
    Security.removeCurrentUser();
    window.location.href = '../home/home.html';
}


function applyValues(element, reward) {
    if (!reward.isCompleted) {
        element.innerHTML = `${reward.currentPoints}/${reward.maxPoint}`;
    }
    else {
        element.innerHTML = `Receber`;
    }
}


function init() {  

    const currentAccount = Security.getCurrentUser();
    const rewards = RewardManager.getRewards(currentAccount.email);

    if (!rewards) {
        RewardManager.createReward(currentAccount.email, 'reward-01', 5);
        RewardManager.createReward(currentAccount.email, 'reward-02', 3);
        RewardManager.createReward(currentAccount.email, 'reward-03', 2);
        RewardManager.createReward(currentAccount.email, 'reward-04', 2);
        RewardManager.createReward(currentAccount.email, 'reward-05', 8);
        RewardManager.createReward(currentAccount.email, 'reward-06', 10);
    }

    const reward01 = RewardManager.getReward(currentAccount.email, 'reward-01');
    const reward02 = RewardManager.getReward(currentAccount.email, 'reward-02');
    const reward03 = RewardManager.getReward(currentAccount.email, 'reward-03');
    const reward04 = RewardManager.getReward(currentAccount.email, 'reward-04');
    const reward05 = RewardManager.getReward(currentAccount.email, 'reward-05');
    const reward06 = RewardManager.getReward(currentAccount.email, 'reward-06');

    const reward01Btn = document.getElementById('reward-01');
    const reward02Btn = document.getElementById('reward-02');
    const reward03Btn = document.getElementById('reward-03');
    const reward04Btn = document.getElementById('reward-04');
    const reward05Btn = document.getElementById('reward-05');
    const reward06Btn = document.getElementById('reward-06');

    applyValues(reward01Btn, reward01);
    applyValues(reward02Btn, reward02);
    applyValues(reward03Btn, reward03);
    applyValues(reward04Btn, reward04);
    applyValues(reward05Btn, reward05);
    applyValues(reward06Btn, reward06);


    let nameInput = document.getElementById('nameInput');
    
    nameInput.value = currentAccount.name;
}

this.init();

