import { PopoverPage } from './app.po';

describe('popover App', function() {
  let page: PopoverPage;

  beforeEach(() => {
    page = new PopoverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
