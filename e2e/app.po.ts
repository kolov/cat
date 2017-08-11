import { browser, by, element } from 'protractor';

export class CatPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bat-root h1')).getText();
  }
}
