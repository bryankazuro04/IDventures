import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";
import NavLinkInitiator from "../utils/nav-initiator";

class App {
  constructor({ content, navMenu }) {
    this._content = content;
    this._navMenu = navMenu;
    this._initialElement();
  }

  _initialElement() {
    NavLinkInitiator.init({
      navMenu: this._navMenu,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
