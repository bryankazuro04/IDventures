class DestionationRecommendation extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2 class="mb-5 text-center fw-bold">Rekomendasi Destinasi Wisata</h2>

    <div class="row mb-4 g-4">
      <section class="col-lg-4">
        <div class="card card-recommendation-destination">
          <img
            class="card-img-top card-1 lazyload"
            src="./media/placeholder.png"
            data-src="./media/destination/pantai-amai.webp"
            alt="Pantai Amai"
          />
          <div class="card-body">
            <h3 class="card-title"><b>Pantai Amai</b></h3>

            <p class="card-text text-justify">
              Pantai ini memang cukup jauh dari keramaian kota Jayapura, namun
              itulah yang membuatnya sering kali di kunjungi oleh para wisatawan
              yang menginginkan ketenangan..
            </p>

            <div class="d-grid gap-2 d-md-flex">
              <a href="#/explore/11" class="btn btn-info"
                >Baca keseluruhan
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="col-lg-4">
        <div class="card card-recommendation-destination">
          <img
            class="card-img-top card-1 lazyload"
            src="./media/placeholder.png"
            data-src="./media/destination/pulau-rubiah.webp"
            alt="Pulau Rubiah"
          />

          <div class="card-body">
            <h3 class="card-title"><b>Pulau Rubiah</b></h3>

            <p class="card-text">
              Pulau Rubiah dapat dikatakan sebagai tempat surganya taman laut
              bagi para wisatawan yang hobi menyelam. Nama pulau Rubiah sendiri
              diambil dari nama seorang yang bernama Cut Nyak Rubiah yang
              makamnya dapat Andatemukan di pulau tersebut.Wisata Pulau Rubiah
              saat ini merupakan sebuah pulau yang tidak berpenghuni. Walau
              begitu jangan khawatir, di pulau ini Anda masih menemukan sebuah
              warung kecil yang menjual makanan dan minuman yang bisa Anda beli.
              Pulau ini selalu ramai dikunjungi oleh wisatawan, baik wisatawan
              domestik maupun wisatawan mancanegara terlebih jika hari libur.
            </p>

            <div class="d-grid gap-2 d-md-flex">
              <a href="#/explore/13" class="btn btn-info"
                >Baca keseluruhan
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="col-lg-4">
        <div class="card card-recommendation-destination">
          <img
            class="card-img-top card-1 lazyload"
            src="./media/placeholder.png"
            data-src="./media/destination/bukit-kelam.webp"
            alt="Bukit Kelam"
          />

          <div class="card-body">
            <h3 class="card-title"><b>Bukit Kelam</b></h3>

            <p class="card-text">
              Nama Bukit Kelam memang telah lama masyhur di kalangan peneliti
              botani. Salah satu penyebabnya bukit batu ini menjadi rumah bagi
              14 spesies kantong semar yang berbeda, salah satunya yang endemik
              dan terancam punah adalah jenis Nepenthes clipeata. Sangat sulit
              menjangkau tumbuhan kantong semar yang hidup di sini, karena
              mereka biasanya berada di sisi tebing vertikal pada ketinggian
              antara 500 dan 800 meter. Selain Kantong Semar, Bukit Kelam juga
              menjadi hunian bagi tanaman anggrek hitam, beruang madu,
              trenggiling, sampai burung walet. Tentu saja ada cerita rakyat
              yang menyelimuti eksistensi Bukit Kelam, sama seperti yang terjadi
              pada Gunung Tangkuban Perahu di Jawa Barat.
            </p>

            <div class="d-grid gap-2 d-md-flex">
              <a href="#/explore/3" class="btn btn-info"
                >Baca keseluruhan
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    `;
  }
}

customElements.define("destination-recommendation", DestionationRecommendation);
