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

      <!-- Travel essentials section -->
      <section class="py-5 bg-light">
        <div class="container py-4">
          <header class="text-center mb-5">
            <h2>My travel essentials</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </header>
          <div class="row text-center">
            <div class="col-lg-3 col-md-6"><a class="text-reset" href="post.html"><img class="mb-4" src="https://d19m59y37dris4.cloudfront.net/travel/2-0/img/bag.e4c5f0da.png" alt="" height="150">
                <h3 class="h5">Backpack</h3>
                <p class="text-sm text-muted">Deserunt et ad culpa culpa dolore.</p></a></div>
            <div class="col-lg-3 col-md-6"><a class="text-reset" href="post.html"><img class="mb-4" src="https://d19m59y37dris4.cloudfront.net/travel/2-0/img/camera.3ee186fd.png" alt="" height="150">
                <h3 class="h5">Camera</h3>
                <p class="text-sm text-muted">Consectetur ex sunt duis minim quis dolor.</p></a></div>
            <div class="col-lg-3 col-md-6"><a class="text-reset" href="post.html"><img class="mb-4" src="https://d19m59y37dris4.cloudfront.net/travel/2-0/img/glasses.80147afd.png" alt="" height="150">
                <h3 class="h5">Sunglasses</h3>
                <p class="text-sm text-muted">Deserunt et ad culpa culpa dolore.</p></a></div>
            <div class="col-lg-3 col-md-6"><a class="text-reset" href="post.html"><img class="mb-4" src="https://d19m59y37dris4.cloudfront.net/travel/2-0/img/headphone.cccb2497.png" alt="" height="150">
                <h3 class="h5">Headphones</h3>
                <p class="text-sm text-muted">Elit ad est labore irure qui.</p></a></div>
          </div>
        </div>
      </section>
      
      <gallery-section id="galeri" class="carousel slide carousel-fade p-5" data-bs-ride="carousel"></gallery-section>
      <hr />

      <nearest-destination class="row col-lg-12 section-4"></nearest-destination>
      <hr />
    </section>
    `;
  },
};

export default Home;
