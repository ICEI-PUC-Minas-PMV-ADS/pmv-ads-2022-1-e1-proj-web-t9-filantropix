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

    static createUser(user, pass, email) {

        let jsonAccounts = localStorage.getItem('accounts');
        let encryptPass = CryptoJS.SHA1(pass).toString();

        if (jsonAccounts) {
            let accounts = JSON.parse(jsonAccounts);
            let account = new Account(user, encryptPass, email);
            accounts.push(account);
            localStorage.setItem('accounts', JSON.stringify(accounts));
        } else {
            let account = new Account(user, encryptPass, email);
            let accounts = [account];
            localStorage.setItem('accounts', JSON.stringify(accounts));
        }
    }
    static tryLoginIn(email, pass) {

        let jsonAccounts = localStorage.getItem('accounts');

        if (!jsonAccounts) {
            return new Response(Response.userNotFind, null);
        }

        let accounts = JSON.parse(jsonAccounts);
        let encryptPass = CryptoJS.SHA1(pass).toString();
        let response = new Response(Response.userNotFind, null);
        
        accounts.forEach(element => {
            if ((element.pass == encryptPass) &&
                (element.email == email)) {
                    response.account = element;
                    response.type = Response.userFind;
            }
        });

        if (response.type == Response.userFind) {
            this.setCurrentUser(response.account);
        }

        return response;
    }
}

class Account {

    constructor(name, pass, email) {
        this.name = name;
        this.pass = pass;
        this.email = email;
    }

    changeName(newName) {
        this.name = newName;
    }
}

class Response {

    static userNotFind = 'response_NotFindUser';
    static userFind = 'response_userFind';

    constructor(type, account) {
        this.account = account;
        this.type = type;
    }
}