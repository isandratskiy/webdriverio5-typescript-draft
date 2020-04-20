import { expect } from "chai";
import LoginPage from "src/pages/LoginPage";
import FlashMessageFragment from "src/pages/fragments/FlashMessageFragment";
import SecurePage from "src/pages/SecurePage";



describe("Form Authentication", () => {
	beforeEach(() => {
		LoginPage.open;
	});

	it('should login with valid credentials', () => {
		LoginPage.loginFormFragment.loginWith('tomsmith', 'SuperSecretPassword!');

		expect(SecurePage.flashMessage).to.contain('You logged into a secure area!');
	});

	it('displays warning message with invalid credentials', () => {
		LoginPage.loginFormFragment.loginWith('johndoe', 'InvalidPassword!');

		expect(FlashMessageFragment.flashMessage).to.contain('Your username is invalid!');
	});
});