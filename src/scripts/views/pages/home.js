const Home = {
  async render() {
    return `
    <section class="container py-5">
      <div class="jumbotron__background row mb-4">
        <span class="jumbotron__background-image">
          <svg class="jumbotron__background-image--svg" id="visual" viewBox="0 0 900 450" width="900" height="450" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g fill="#89e5f9"><circle r="33" cx="184" cy="146"></circle><circle r="21" cx="488" cy="409"></circle><circle r="20" cx="201" cy="52"></circle><circle r="20" cx="641" cy="111"></circle><circle r="29" cx="76" cy="367"></circle><circle r="28" cx="585" cy="175"></circle><circle r="26" cx="13" cy="48"></circle><circle r="25" cx="846" cy="256"></circle><circle r="29" cx="680" cy="417"></circle><circle r="21" cx="722" cy="333"></circle><circle r="26" cx="386" cy="231"></circle><circle r="23" cx="845" cy="69"></circle><circle r="21" cx="252" cy="328"></circle><circle r="23" cx="352" cy="324"></circle><circle r="21" cx="165" cy="226"></circle></g></svg>
        </span>
        <div class="jumbotron__description col-6 d-flex align-items-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam corporis aut quia itaque sequi similique nemo voluptatum architecto error quis atque impedit mollitia ullam fugiat, est minus? Dolorem qui numquam quas, dicta ducimus soluta alias perspiciatis dolores eaque voluptatem nam esse, voluptates est, officiis facere ad animi sed minima laboriosam.

          </p>
        </div>

        <div class="jumbotron__picture col-6">
          <img data-src="./media/jumbotron.webp" alt="Jumbotron Picture" width="100%" class="jumbotron__image w-100 lazyload">
          <span class="jumbotron__picture-background">
            <svg class="jumbotron__picture-background--svg" id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(450.656850036715 309.9268138489584)"><path d="M180.6 -196.4C238.2 -166.9 291.9 -113.9 315.3 -46C338.7 21.9 331.7 104.7 284.8 144.2C237.9 183.7 151 180 80.6 193.5C10.1 207.1 -43.8 237.9 -103.7 237C-163.7 236 -229.5 203.3 -272.8 148C-316 92.7 -336.8 14.8 -327.4 -61.1C-318 -137 -278.6 -211 -219 -240.2C-159.4 -269.3 -79.7 -253.7 -9.1 -242.8C61.5 -232 123 -225.9 180.6 -196.4" fill="#d48be1"></path></g></svg>
          </span>
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const container = document.querySelector("#mainContent section.container");

    container.innerHTML += `
    <best-recommendation></best-recommendation>
    <hr />

    <destination-recommendation></destination-recommendation>
    
    <section id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    
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
    <hr />

    <nearest-destination></nearest-destination>
    <hr />
    `;
  },
};

export default Home;
