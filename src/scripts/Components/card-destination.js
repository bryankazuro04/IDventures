class CardDestination extends HTMLElement {
  set cDest(cDest) {
    this._cDest = cDest;
    this.render();
  }

  get cDest() {
    return this._cDest;
  }

  render() {
    this.innerHTML = `
    <img src="${this._cDest.image}" alt="${this._cDest.title}" class="card__image">

    <div class="card__inner">
      <h4 class="card__title">${this._cDest.title}</h4>
      <p class="card__description">
        ${this._cDest.description}
    
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <a href="#/explore/${this._cDest.slug}" class="btn btn-danger btn-sm justify-content-end">Read More</a>
        </div>
      </p>
    </div>
    `;
  }
}

customElements.define("card-destination", CardDestination);
