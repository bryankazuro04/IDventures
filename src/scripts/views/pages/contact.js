const Contact = {
  async render() {
    return `
    <img
      data-src="../media/Jalan_KotaLama.webp"
      alt="Suku Mentawai"
      class="header-img lazyload"
    />

    <section>
      <div class="container">
        <div class="row mb-lg-5 d-flex justify-content-center">
          <!--Profile Card 5-->
          <div class="col-md-4 mt-4">
            <div class="card profile-card-5">
              <div class="card-img-block">
                <img
                  class="card-img-top lazyload"
                  data-src="../media/maps.webp"
                  alt="Card image cap"
                />
              </div>
              
              <div class="card-body pt-0">
                <h5 class="card-title text-center fw-bold">
                  Kantor IDVentures
                </h5>
                
                <p class="card-text">
                  Jl. Gatot Subroto No.1, RT.2/RW.1, Menteng Dalam, Kec.
                  Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                  12780
                </p>

                <p class="card-text">
                  Jalan Boulevard Barat Raya No.Kav. 01, Kenangan Baru, Kec.
                  Percut Sei Tuan, Kota Medan, Sumatera Utara 20371
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 mt-4">
            <div class="card profile-card-5">
              <div class="card-img-block">
                <img
                  class="card-img-top lazyload"
                  data-src="../media/telp.webp"
                  alt="Card image cap"
                />
              </div>
              
              <div class="card-body pt-0">
                <h5 class="card-title text-center fw-bold">
                  Kontak IDVentures
                </h5>
                
                <p class="card-text">
                  Jika kamu punya saran atau kritik mengenai konten kami, kamu
                  bisa hubungi kami melalui Email atau nomor dibawah ini ya!!
                </p>

                <p class="card-text fw-bold">
                  email IDVentures : idventures@email.com
                </p>

                <p class="card-text fw-bold">
                  Kontak IDVentures : +62 2345 7812
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  },
};

export default Contact;
