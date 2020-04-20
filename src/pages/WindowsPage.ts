class WindowsPage {
    get open() {
        return browser.url("/windows");
    }

    public get openWindowsTab() {
        return $("[href*='windows']").click();
    }

    public get switchTab() {
        let window = browser.getWindowHandles()[1];
        return browser.switchToWindow(window)
    }
}

export default new WindowsPage();