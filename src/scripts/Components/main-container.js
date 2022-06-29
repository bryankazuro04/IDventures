class MainContainer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {}
}

customElements.define("main-container", MainContainer);
