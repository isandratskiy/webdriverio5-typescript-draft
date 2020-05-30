import {expect} from "chai";
import WindowsPage from "src/pages/WindowsPage";

describe("Windows page", () => {
    beforeEach(() => {
        WindowsPage.open;
        WindowsPage.openWindowsTab;
        WindowsPage.switchTab;
    });

    it("should open new window tab after click", () => {
        expect(browser.getTitle()).contain("New Window");
    });

    it("should contain 'New Window' title", () => {
        expect($("h3").getText()).to.equal("New Window");
    });
});