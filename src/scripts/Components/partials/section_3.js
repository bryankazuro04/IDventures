class Gallery extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="carousel-inner">
      <div class="carousel-item active">
        <a href="#">
          <img src="./media/Bukit_Kelam.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption mb-4 d-none d-md-block"></div>
        </a>
      </div>

      <div class="carousel-item">
        <a href="#">
          <img src="./media/Desa_Wisata_Tomok.jpg" class="d-block w-100" alt="..." />
          <div class="carousel-caption mb-4 d-none d-md-block"></div>
        </a>
      </div>

      <div class="carousel-item">
        <a href="#">
          <img src="./media/Negeri_Bakkara.jpeg" class="d-block w-100" alt="..." />
          <div class="carousel-caption mb-4 d-none d-md-block"></div>
        </a>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#galeri" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>

    <button class="carousel-control-next" type="button" data-bs-target="#galeri" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    `;
  }
}

customElements.define("gallery-section", Gallery);
