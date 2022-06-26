class Reward {

    constructor(rewardId, rewardTitle, rewardDescription, accountEmail, maxPoint) {
        this.rewardId = rewardId;
        this.rewardTitle = rewardTitle;
        this.rewardDescription = rewardDescription;
        this.accountEmail = accountEmail;
        this.maxPoint = maxPoint;
        this.isCompleted = false;
        this.currentPoints = 0;
    }

    isCompleted;
    currentPoints;
}

class RewardManager {

    static getRewards(accountEmail) {
        let jsonRewards = localStorage.getItem(`rewards-${accountEmail}`);   
        let rewards = JSON.parse(jsonRewards);
        return rewards;
    }

    static getReward(accountEmail, rewardId) {
        let jsonRewards = localStorage.getItem(`rewards-${accountEmail}`)
        let rewards = JSON.parse(jsonRewards);
        let reward = null

        rewards.forEach(item => {
            if (item.rewardId == rewardId) {
                reward = item;
            }
        });

        return reward;
    }

    static createReward(accountEmail, rewardId,rewardTitle, rewardDescription, maxPoint) {
        let reward = new Reward(rewardId, rewardTitle, rewardDescription, accountEmail, maxPoint);
        let jsonRewards = localStorage.getItem(`rewards-${accountEmail}`);   
        let rewards = JSON.parse(jsonRewards);

        if (rewards == undefined) {
            rewards = [reward];
            localStorage.setItem(`rewards-${accountEmail}`, JSON.stringify(rewards));
        }
        else {

            let idIsValid = true;

            rewards.forEach(element => {
                if (element.rewardId == rewardId) {
                    idIsValid = false;
                }
            })

            if (idIsValid) {
                rewards.push(reward);
                localStorage.setItem(`rewards-${accountEmail}`, JSON.stringify(rewards));
            }
        }
    }

    static incrementReward(accountEmail, rewardId) {
        let jsonRewards = localStorage.getItem(`rewards-${accountEmail}`);
        let rewards = JSON.parse(jsonRewards);

        rewards.forEach(reward => {
            if (reward.rewardId == rewardId) {
                if (reward.isCompleted) {
                    return;
                }
                
                reward.currentPoints++;

                if (reward.currentPoints == reward.maxPoint) {
                    reward.isCompleted = true;
                }

                localStorage.setItem(`rewards-${accountEmail}`, JSON.stringify(rewards));
            }
        });
    }
}