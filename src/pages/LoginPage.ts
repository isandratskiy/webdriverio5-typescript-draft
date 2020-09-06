import { LoginFormFragment } from 'src/pages/fragments/LoginFormFragment';
import {Page} from 'src/pages/Page';

class LoginPage extends Page {
    loginFormFragment: LoginFormFragment;

    constructor() {
        super();
        this.loginFormFragment = new LoginFormFragment('form#login');
    }

    get open() {
        return super.navigate('/login');
    }
}

export default new LoginPage();
