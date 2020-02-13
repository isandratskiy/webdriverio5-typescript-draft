export class LoginFormFragment {
    private containerLocator: string

    constructor(containerLocator: string) {
        this.containerLocator = containerLocator;
    }

    private get container() {
        return $(this.containerLocator);
    }

    get username() {
        return this.container.$('#username');
    }

    get password() {
        return this.container.$('#password');
    }

    get submit() {
        return this.container.$('button.radius');
    }

    loginWith(username: string, password: string) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.submit.click();
    }
}