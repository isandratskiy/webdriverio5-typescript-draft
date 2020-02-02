import { LoginFormFragment } from "src/pages/fragments/LoginFormFragment";

class LoginPage {
    public loginFormFragment: LoginFormFragment;

    constructor() {
        this.loginFormFragment = new LoginFormFragment('form#login');
    }

    get open() {
        return browser.url('/login');
    }
}

export default new LoginPage();