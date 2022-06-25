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

      <!-- Divider Section -->
      <section class="py-5">
        <div class="container py-4">
          <!-- Home listing -->
          <div class="row align-items-stretch gx-lg-0">
            <div class="col-lg-6 order-2 order-lg-1 bg-full-left">
              <div class="h-100 bg-light d-flex align-items-center">
                <div class="py-5 px-4">
                  <p class="text-primary font-weight-bold small text-uppercase mb-2">Travel guide</p>
                  <h3 class="h4"> <a class="text-reset" href="post.html">Book to inspire your travel</a></h3>
                  <div class="text-muted">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quam nobis autem voluptate illum beatae atque suscipit inventore tenetur, perferendis facere sequi optio laudantium obcaecati aliquam, dolores ea. Pariatur, repellendus.</p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quam nobis autem voluptate illum beatae atque suscipit inventore tenetur, perferendis facere sequi optio laudantium obcaecati aliquam, dolores ea. Pariatur, repellendus.</p>
                  </div>
                  <ul class="list-inline small text-uppercase mb-0">
                    <li class="list-inline-item align-middle"><img class="rounded-circle shadow-sm" src="https://d19m59y37dris4.cloudfront.net/travel/2-0/img/person-1.57fd03a8.jpg" alt="" width="30"/></li>
                    <li class="list-inline-item me-0 text-gray align-middle">By </li>
                    <li class="list-inline-item align-middle me-0"><a class="fw-bold reset-anchor" href="#!">Jason Doe</a></li>
                    <li class="list-inline-item text-gray align-middle me-0">|</li>
                    <li class="list-inline-item text-gray align-middle">Jan, 2019</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2"><a class="d-block h-100 bg-center bg-cover" href="post.html" style="background: url(https://d19m59y37dris4.cloudfront.net/travel/2-0/img/travel-home-divider.67659987.jpg)"></a></div>
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
