class Carousel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="carousel-item active">
      <a href="#/explore/10">
        <img data-src="./media/destination/pantai-klayar.webp" class="d-block w-100 lazyload" alt="..." />
        <div class="carousel-caption mb-4 d-none d-md-block">
          <h1>Pantai Klayar</h1>
          <p>
            Pantai Klayar mempunyai air laut berwarna biru serta ombaknya cukup besar hingga pengunjung yang mau menikmati deburan ombak Pantai Klayar ini harus waspada, selain menikmati pasir putih serta deburan
            ombak Pantai Klayar.
          </p>
        </div>
      </a>
    </div>

    <div class="carousel-item">
      <a href="#/explore/5">
        <img data-src="./media/destination/danau-kaolin.webp" class="d-block w-100 lazyload" alt="..." />
        <div class="carousel-caption mb-4 d-none d-md-block">
          <h1>Danau Kaolin</h1>
          <p>
            Danau Kaolin adalah salah satu destinasi wisata Danau yang berwarna biru nan indah yang akan Anda temukan di Provinsi Pulau Belitung dan terkenal akan tambang timah Warna biru muda nan cantik yang tercipta.
            Warna air yang berwarna di Danau Kaolin terjadi karena debit air hujan bercampur dengan kaolin.
          </p>
        </div>
      </a>
    </div>

    <div class="carousel-item">
      <a href="#/explore/7">
        <img data-src="./media/destination/desa-wisata-tomok.webp" class="d-block w-100 lazyload" alt="..." />
        <div class="carousel-caption mb-4 d-none d-md-block">
          <h1>Desa Wisata Tomok</h1>
          <p>
            Tak hanya menyuguhkan wisata alam, Danau toba juga menawarkan wisata budaya yang menarik untuk dipelajari. Salah satu tempat wisata budaya yang bisa dikunjungi adalah Desa Tomok. Desa ini terletak di bagian
            timur Pulau Samosir.
          </p>
        </div>
      </a>
    </div>
    `;
  }
}

customElements.define("carousel-inner", Carousel);
