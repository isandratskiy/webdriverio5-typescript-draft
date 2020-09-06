import allure from '@wdio/allure-reporter';

export abstract class Page {
  protected open(url: string) {
    allure.addStep(`Open page: ${url}`);
    browser.url(url);
    allure.endStep();
  }
}
