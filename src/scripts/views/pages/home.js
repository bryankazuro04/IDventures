const Home = {
  async render() {
    return `
    <!-- Carousel -->
    <section id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <carousel-inner class="carousel-inner"></carousel-inner>

      <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </section>
    <!-- Carousel End -->

    <section class="container p-5">
      <best-recommendation class="section-1"></best-recommendation>
      <hr />

      <destination-recommendation class="portfolio pb-4" id="portfolio"></destination-recommendation>
      <hr />

      <gallery-section id="galeri" class="carousel slide carousel-fade p-5" data-bs-ride="carousel"></gallery-section>
      <hr />

      <nearest-destination class="row col-lg-12 section-4"></nearest-destination>
      <hr />
    </section>
    `;
  },
};

export default Home;
