import { ZooPage } from './app.po';


/**
 * Zoo E2E tests
 *
 * E2E tests are complex and every small change will break it.
 * So don't create too much E2E tests. Otherwise you will spare your time fixing E2E tests all the days.
 * Use E2E tests to check the one or two main use cases of your application.
 * If these tests are running, you know at least your application is working and the main use cases work.
 */
describe('zoo App', function() {
  let page: ZooPage;

  beforeEach(() => {
    page = new ZooPage();
  });

  it('should display zoo title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Wild Zoo');
  });

  it('should display the lion and the panda', () => {
      page.navigateTo();
      expect(page.getListItem(0)).toEqual('Leon');
      expect(page.getListItem(1)).toEqual('Kung Fu Panda');
  });
});
