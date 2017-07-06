import { VinBlogPage } from './app.po';

describe('vin-blog App', () => {
  let page: VinBlogPage;

  beforeEach(() => {
    page = new VinBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
