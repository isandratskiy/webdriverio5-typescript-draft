import allure from '@wdio/allure-reporter';

export abstract class Page {
  protected navigate(url: string) {
    allure.addStep(`Open page: ${url}`);
    return browser.url(url);
  }
}
