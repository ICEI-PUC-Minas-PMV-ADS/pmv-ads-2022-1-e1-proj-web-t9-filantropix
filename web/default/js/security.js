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
            return new Response(Response.userNotFound, null);
        }

        let accounts = JSON.parse(jsonAccounts);
        let encryptPass = CryptoJS.SHA1(pass).toString();
        let response = new Response(Response.userNotFound, null);
        
        accounts.forEach(element => {
            if ((element.pass == encryptPass) &&
                (element.email == email)) {
                    response.account = element;
                    response.type = Response.userFound;
            }
        });

        if (response.type == Response.userFound) {
            this.setCurrentUser(response.account);
        }

        return response;
    }
}

class Account {

    constructor(id, name, pass, email) {
        this.name = name;
        this.pass = pass;
        this.email = email;
        this.id = id;
    }

    changeName(newName) {
        this.name = newName;
    }
}

class Response {

    static userNotFound = 'response_NotFoundUser';
    static userFound = 'response_userFound';

    constructor(type, account) {
        this.account = account;
        this.type = type;
    }
}