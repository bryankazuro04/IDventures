class NavContainer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a class="navbar-brand" href="/">
      <img src="/media/logo.png" alt="IDVentures" class="logo d-inline-block align-text-top" />
    </a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav item-nav me-4">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#/">Home</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#/explore">Explore</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#/about-us">About Us</a>
        </li>
      </ul>

      <ul class="navbar-nav align-items-center flex-row justify-content-end">
        <button type="button" class="btn-theme me-3"></button>
      </ul>
    </div>
    `;
  }
}

customElements.define("nav-container", NavContainer);
