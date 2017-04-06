import { BenchpartyPage } from './app.po';

describe('benchparty App', () => {
  let page: BenchpartyPage;

  beforeEach(() => {
    page = new BenchpartyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
