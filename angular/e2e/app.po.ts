import { browser, element, by } from 'protractor';

export class ZooPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.css('app-root h1')).getText();
  }
}
