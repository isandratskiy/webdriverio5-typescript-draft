import {expect} from 'chai';
import WindowsPage from 'src/pages/WindowsPage';

describe('Windows page', () => {
    it('should open new window tab after click', () => {
        WindowsPage.open();
        WindowsPage.openWindowsTab;
        WindowsPage.switchTab;
        expect(browser.getTitle()).contain('New Window');
    });

    it("should contain 'New Window' title", () => {
        WindowsPage.open();
        WindowsPage.openWindowsTab;
        WindowsPage.switchTab;
        expect($('h3').getText()).to.equal('New Window');
    });

    afterEach('clear opened windows', () => {
        browser.reloadSession();
    });
});
