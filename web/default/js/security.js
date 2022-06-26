class Security {

    static getCurrentUser() {
        let jsonAccount = localStorage.getItem('current-account');
        
        if (!jsonAccount) {
            return null;
        }

        let account = JSON.parse(jsonAccount);
        return account;
    }

    static setCurrentUser(account) {
        account = JSON.stringify(account);
        localStorage.setItem('current-account', account);
    }

    static removeCurrentUser() {
        localStorage.removeItem('current-account');
    }

    static createUser(user, pass, email) {

        let jsonAccounts = localStorage.getItem('accounts');
        let encryptPass = CryptoJS.SHA1(pass).toString();
        let account = new Account(user, encryptPass, email);
        let userExists = false;

        if (jsonAccounts) {
            let accounts = JSON.parse(jsonAccounts);

            accounts.forEach(item => {
                if (item.email == account.email) {
                    userExists = true;
                    return;
                }
            });

            if (!userExists) {
                accounts.push(account);
                localStorage.setItem('accounts', JSON.stringify(accounts));
            }
        } else {
            let accounts = [account];
            localStorage.setItem('accounts', JSON.stringify(accounts));
        }

        if (userExists) {
            return new SecResponse(SecResponse.userExists, account);
        }
        else {
            return new SecResponse(SecResponse.userCreated, account);
        }
    }
    static tryLoginIn(email, pass) {

        let jsonAccounts = localStorage.getItem('accounts');
        let secResponse = new SecResponse(SecResponse.userNotFound, null);

        if (jsonAccounts) {

            let accounts = JSON.parse(jsonAccounts);
            let encryptPass = CryptoJS.SHA1(pass).toString();
            
            accounts.forEach(element => {
                if ((element.pass == encryptPass) &&
                    (element.email == email)) {
                        secResponse.account = element;
                        secResponse.type = SecResponse.userFound;
                }
            });

            if (secResponse.type == SecResponse.userFound) {
                this.setCurrentUser(secResponse.account);
            }
        }

        return secResponse;
    }

    static changePassword(account, oldPass, newPass) {

        let encryptOldPass = CryptoJS.SHA1(oldPass).toString();
        let encryptPass = CryptoJS.SHA1(newPass).toString();
        let response = SecResponse.invalidPassword;

        if (account.pass == encryptOldPass) {
            account.pass = encryptPass;

            let jsonAccounts = localStorage.getItem('accounts');
            let accounts = JSON.parse(jsonAccounts);

            accounts.forEach(element => {
                if (element.email == account.email) {
                    element.pass = encryptPass;
                }
            });

            localStorage.setItem('accounts', JSON.stringify(accounts));
            response = SecResponse.passwordChanged;
        }

        return response;
    }

    static changeName(account, newName) {

        let jsonAccounts = localStorage.getItem('accounts');
        let accounts = JSON.parse(jsonAccounts);

        accounts.forEach(element => {
            if (element.email == account.email) {
                element.name = newName;
            }
        });

        account.name = newName;
        this.setCurrentUser(account);
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

class Account {

    constructor(name, pass, email) {
        this.name = name;
        this.pass = pass;
        this.email = email;
    }
}

class SecResponse {

    static userCreated = 'SecResponse_userCreated'
    static userExists = 'SecResponse_userExists';
    static userNotFound = 'SecResponse_notFoundUser';
    static userFound = 'SecResponse_userFound';
    static invalidPassword = "SecResponse_invalidPassword";
    static passwordChanged = "SecResponse_passwordChanged";

    constructor(type, account) {
        this.account = account;
        this.type = type;
    }
}