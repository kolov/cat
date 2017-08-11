import { CatPage } from './app.po';

describe('cat App', () => {
  let page: CatPage;

  beforeEach(() => {
    page = new CatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to bat!');
  });
});
