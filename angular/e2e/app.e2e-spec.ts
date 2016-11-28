import { ZooPage } from './app.po';

describe('zoo App', function() {
  let page: ZooPage;

  beforeEach(() => {
    page = new ZooPage();
  });

  it('should display zoo title', () => {
    page.navigateTo();
    expect(page.getTitle()).toEqual('Wild Zoo');
  });
});
