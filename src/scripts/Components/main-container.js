import "./partials/section_1";
import "./partials/section_2";
import "./partials/section_3";
import "./partials/section_4";

class MainContainer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <best-recommendation class="section-1"></best-recommendation>
    <hr />

    <destination-recommendation class="portfolio pb-4" id="portfolio"></destination-recommendation>
    <hr />

    <gallery-section id="galeri" class="carousel slide carousel-fade p-5" data-bs-ride="carousel"></gallery-section>
    <hr />

    <nearest-destination class="row col-lg-12 section-4"></nearest-destination>
    <hr />
    `;
  }
}

customElements.define("main-container", MainContainer);
