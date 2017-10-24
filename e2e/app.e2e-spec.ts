import { AngularDoubleAppPage } from './app.po';

describe('angular-double-app App', () => {
  let page: AngularDoubleAppPage;

  beforeEach(() => {
    page = new AngularDoubleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
