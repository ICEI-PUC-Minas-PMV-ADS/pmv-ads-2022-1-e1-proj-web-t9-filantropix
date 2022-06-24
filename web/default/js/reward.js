class Reward {

    constructor(rewardId, accountId, maxPoint) {
        this.rewardId = rewardId;
        this.accountId = accountId;
        this.maxPoint = maxPoint;
        this.isCompleted = false;
        this.currentPoints = 0;
    }

    isCompleted;
    currentPoints;
}

class RewardManager {

    static getRewards(accountId) {
        let jsonRewards = localStorage.getItem(`rewards-${accountId}`);   
        let rewards = JSON.parse(jsonRewards);
        return rewards;
    }

    static getReward(accountId, rewardId) {
        let jsonRewards = localStorage.getItem(`rewards-${accountId}`)
        let rewards = JSON.parse(jsonRewards);

        rewards.forEach(reward => {
            if (reward.rewardId == rewardId) {
                return reward;
            }
        });

        return null;
    }

    static createReward(accountId, rewardId, maxPoint) {
        let reward = new Reward(rewardId, accountId, maxPoint);
        let jsonRewards = localStorage.getItem(`rewards-${accountId}`);   
        let rewards = JSON.parse(jsonRewards);

        if (rewards == undefined) {
            rewards = [reward];
            localStorage.setItem(`rewards-${accountId}`, JSON.stringify(rewards));
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
                localStorage.setItem(`rewards-${accountId}`, JSON.stringify(rewards));
            }
        }
    }

    static incrementReward(accountId, rewardId) {
        let jsonRewards = localStorage.getItem(`rewards-${accountId}`);
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

                localStorage.setItem(`rewards-${accountId}`, JSON.stringify(rewards));
            }
        });
    }
}