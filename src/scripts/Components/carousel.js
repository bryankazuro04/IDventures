class Carousel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="carousel-item active">
      <a href="#">
        <img src="./media/Pantai_Klayar.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption mb-4 d-none d-md-block">
          <h1>Pantai Klayar</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi ipsum impedit quibusdam magni quas quae numquam assumenda explicabo, corrupti earum animi culpa nam, amet cumque officia! Nisi totam
            nemo quod atque provident distinctio deserunt consequuntur, ipsa, repellat commodi debitis?
          </p>
        </div>
      </a>
    </div>

    <div class="carousel-item">
      <a href="#">
        <img src="./media/Danau_Kaolin.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption mb-4 d-none d-md-block">
          <h1>Danau Kaolin</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, accusantium atque cupiditate asperiores mollitia assumenda dicta impedit tempora ex harum dolores ipsam reprehenderit voluptate delectus ipsum
            maxime autem labore laudantium?
          </p>
        </div>
      </a>
    </div>

    <div class="carousel-item">
      <a href="#">
        <img src="./media/Kawah Ijen.jpg" class="d-block w-100" alt="..." />
        <div class="carousel-caption mb-4 d-none d-md-block">
          <h1>Kawah Ijen</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores veritatis eveniet doloribus esse harum voluptatem est architecto excepturi vero omnis facilis beatae velit, neque nesciunt, assumenda possimus
            corporis provident quo.
          </p>
        </div>
      </a>
    </div>
    `;
  }
}

customElements.define("carousel-inner", Carousel);
