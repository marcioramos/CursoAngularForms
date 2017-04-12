import { CursoAngularFormsPage } from './app.po';

describe('curso-angular-forms App', () => {
  let page: CursoAngularFormsPage;

  beforeEach(() => {
    page = new CursoAngularFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
