import { browser, element, by } from 'protractor';

export class ZooPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.css('app-root h1')).getText();
  }

  /**
   * Why do we pollute the template by a test-attribute
   * <ul *ngFor="let animal of animals" data-test-animal-list>
   * and use '[data-test-animal-list] > *' instead of 'app-root ul > li'?
   *
   * If we change the structure of the view (what happens frequently) the test will break.
   * If we use a test specific attribute the test is less fragile and
   * we remember on change of the view to adapt the test.
   */
  getListItem(id) {
	return element.all(by.css('[data-test-animal-list] > *')).get(id).getText();
  }
}
