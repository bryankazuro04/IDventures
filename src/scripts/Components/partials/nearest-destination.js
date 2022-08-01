class NearestDestination extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2 class="mb-5 text-center fw-bold">Destinasi Wisata Terdekat dari Danau Toba</h2>

    <div class="row">
      <div class="col-lg-7 my-2">
        <div class="row">
          <div class="col-lg">
            <img data-src="./media/Air Terjun Situmurun.webp" alt="Air Terjun Situmurun" class="float-start rounded mb-4 destination-image lazyload" />

            <div class="float-start p-3 text-start">
              <a href="./page/AirTerjunSitumurun.html">
                <h3>Air Terjun Situmurun</h3>
                <p>Air terjun ini terdiri dari tujuh undakan. Airnya</p>
              </a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg">
            <img data-src="./media/Desa_Wisata_Tomok.webp" alt="Desa Wisata Tomok" class="float-start rounded mb-4 destination-image lazyload" />

            <div class="float-start p-3 text-start">
              <a href="./page/DesaWisataTomok.html">
                <h3>Desa Wisata Tomok</h3>
                <p>Desa ini terletak di bagian timur Pulau Samosir</p>
              </a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg">
            <img data-src="./media/Negeri_Bakkara.webp" alt="Negeri Bakkara" class="float-start rounded mb-4 destination-image lazyload" />

            <div class="float-start p-3 text-start">
              <a href="./page/NegeriBakkara.html">
                <h3>Negeri Bakkara</h3>
                <p>Negeri Bakkara terdiri dari beberapa dusun dan</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-5 mt-4 align-items-center">
        <a href="./page/DanauToba.html">
          <figure>
            <img data-src="./media/DanauToba.webp" alt="Danau Toba" width="100%" class="lake img-fluid rounded lazyload" />
            <figcaption class="text-center mt-2">Pemandangan Danau Toba</figcaption>
          </figure>
        </a>
      </div>
    </div>
    `;
  }
}

customElements.define("nearest-destination", NearestDestination);
