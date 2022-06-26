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


function applyValues(accountEmail, rewardNumber) {

    const reward = RewardManager.getReward(accountEmail, `reward-${rewardNumber}`);
    const rewardTitle = document.getElementById(`reward-title-${rewardNumber}`);
    const rewardDesc = document.getElementById(`reward-description-${rewardNumber}`);
    const rewardStatus = document.getElementById(`reward-status-${rewardNumber}`);

    rewardTitle.innerHTML = reward.rewardTitle;
    rewardDesc.innerHTML = reward.rewardDescription;

    if (!reward.isCompleted) {
        rewardStatus.innerHTML = `${reward.currentPoints}/${reward.maxPoint}`;
    }
    else {
        rewardStatus.innerHTML = `Receber`;
    }
}

function init() {  

    const currentAccount = Security.getCurrentUser();
    const rewards = RewardManager.getRewards(currentAccount.email);

    if (!rewards) {
        RewardManager.createReward(currentAccount.email, 'reward-01', 'Quanto mais melhor!!', 'Ajude com 5 doações e receba uma recompensa.', 5);
        RewardManager.createReward(currentAccount.email, 'reward-02', 'A primeira a gente nunca esquece.', 'Realize sua primeira contribuição.', 1);
        RewardManager.createReward(currentAccount.email, 'reward-03', 'Liberdade é tudo!', 'Ajude 3 causas independentes.', 3);
        RewardManager.createReward(currentAccount.email, 'reward-04', 'Patreon King', 'Ajude 3 causas patrocinadas.', 3);
        RewardManager.createReward(currentAccount.email, 'reward-05', 'Stop the War!', 'Suporte nossas causas da Ucrânia.', 1);
        RewardManager.createReward(currentAccount.email, 'reward-06', 'Filantrotec!', 'Suporte a campanha TecTeens.', 1);
    }

    applyValues(currentAccount.email, '01');
    applyValues(currentAccount.email, '02');
    applyValues(currentAccount.email, '03');
    applyValues(currentAccount.email, '04');
    applyValues(currentAccount.email, '05');
    applyValues(currentAccount.email, '06');

    let nameInput = document.getElementById('nameInput');
    
    nameInput.value = currentAccount.name;
}

this.init();

