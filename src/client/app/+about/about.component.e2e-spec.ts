describe('About', () => {

  beforeEach( () => {
    browser.get('/');
    element.all(by.css('nav > a')).get(1).click();
  });

});
