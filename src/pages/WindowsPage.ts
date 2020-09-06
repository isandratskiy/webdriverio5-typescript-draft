import {Page} from 'src/pages/Page';

class WindowsPage extends Page {

    open() {
        return super.open('/windows');
    }

    get openWindowsTab() {
        return $("[href*='windows']").click();
    }

    get switchTab() {
        const window = browser.getWindowHandles()[1];
        return browser.switchToWindow(window);
    }
}

export default new WindowsPage();
