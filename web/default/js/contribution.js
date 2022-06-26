class ContributionManager {

    static setContribution(contribution) {
        localStorage.setItem('contribution', JSON.stringify(contribution));
    }

    static getContribution() {
        const jsonContribution = localStorage.getItem('contribution');
        const contribution = JSON.parse(jsonContribution);
        return contribution;
    }
}

class Contribution {

    static unspecifiedCause = 'Unspecified Cause';

    constructor(value, cause, imagePath, rewardId) {
        this.value = value;
        this.cause = cause;
        this.imagePath = imagePath;
        this.rewardId = rewardId;
    }
}