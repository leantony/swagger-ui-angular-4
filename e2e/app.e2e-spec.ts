import { ApidocsPage } from './app.po';

describe('apidocs App', () => {
  let page: ApidocsPage;

  beforeEach(() => {
    page = new ApidocsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
