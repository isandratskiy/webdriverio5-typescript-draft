import {Page} from 'src/pages/Page';

class WindowsPage extends Page {

    get open() {
        return super.navigate('/windows');
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
