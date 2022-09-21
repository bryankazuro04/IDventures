class BestDestination extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2 class="text-center mb-5 fw-bold">Rekomendasi Terbaik</h2>

    <div class="row mb-4">
      <div class="col-lg">
        <img src="./media/placeholder.png" data-src="./media/destination/brown-canyon-medium.webp" alt="Brown Canyon" width="100%" class="img-fluid rounded lazyload" />
      </div>

      <div class="col-lg text-start">
        <h3 class="fw-bold mt-4">Brown Canyon</h3>

        <p class="my-3 card-text text-justify">
          Brown Canyon adalah salah satu wisata yang tersembunyi di Semarang. Tempat yang sama sekali tidak terasa seperti Indonesia Brown Canyon. Brown Canyon adalah sebuah bekas penambangan tanah di Meteseh, Tembalang,
          Semarang.
        </p>

        <a href="#/explore/2" class="btn btn-info">Lihat selengkapnya</a>
      </div>
    </div>
    `;
  }
}

customElements.define("best-recommendation", BestDestination);
