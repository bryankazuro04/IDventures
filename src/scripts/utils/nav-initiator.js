const NavLinkInitiator = {
  init({ navMenu }) {
    this._navMenu = [...navMenu];
    this._navMenuEvent();
  },

  _navMenuEvent() {
    this._navMenu.forEach((navMenu) =>
      navMenu.addEventListener("click", () => this._clicked(navMenu))
    );
  },

  _clicked(navMenu) {
    this._removeActiveNav(this._activeNav());
    this._addActiveNav(navMenu);
  },

  _addActiveNav(navMenu) {
    navMenu.classList.add("page-active");
  },

  _removeActiveNav(navMenu) {
    navMenu.classList.remove("page-active");
  },

  _activeNav() {
    return this._navMenu.filter((navMenu) =>
      navMenu.classList.contains("page-active")
    )[0];
  },
};

export default NavLinkInitiator;
