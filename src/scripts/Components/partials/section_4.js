class NearestDestination extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="row mb-4 mt-n1">
      <div class="col text-center">
        <h2 class="fw-bold">Destinasi Wisata Terdekat</h2>
      </div>
    </div>

    <div class="col-lg-7 my-2 test">
      <div class="row">
        <div class="col-lg">
          <img src="./media/Air Terjun Situmurun.jpg" alt="Air Terjun Situmurun" class="float-start des rounded mb-4" />

          <div class="float-start p-3 text-start">
            <a href="./page/AirTerjunSitumurun.html" class="linka">
              <h4>Air Terjun Situmurun</h4>
              <p>Air terjun ini terdiri dari tujuh undakan. Airnya</p>
            </a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg">
          <img src="./media/Desa_Wisata_Tomok.jpg" alt="Desa Wisata Tomok" class="float-start des rounded mb-4" />

          <div class="float-start p-3 text-start">
            <a href="./page/DesaWisataTomok.html" class="linka">
              <h4>Desa Wisata Tomok</h4>
              <p>Desa ini terletak di bagian timur Pulau Samosir</p>
            </a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg">
          <img src="./media/Negeri_Bakkara.jpeg" alt="Negeri Bakkara" class="float-start des rounded mb-4" />

          <div class="float-start p-3 text-start">
            <a href="./page/NegeriBakkara.html" class="linka">
              <h4>Negeri Bakkara</h4>
              <p>Negeri Bakkara terdiri dari beberapa dusun dan</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-5 mt-4 align-items-center">
      <a href="./page/DanauToba.html">
        <img src="./media/DanauToba.png" alt="Danau Toba" class="lake img-fluid rounded" />
      </a>
    </div>
    `;
  }
}

customElements.define("nearest-destination", NearestDestination);
