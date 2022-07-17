import "./card-destination";

class CardList extends HTMLElement {
  set cards(cards) {
    this._cards = cards;
    this.render();
  }

  get cards() {
    return this._cards;
  }

  render() {
    this._cards.forEach((card) => {
      const cardElement = document.createElement("card-destination");
      cardElement.classList.add("card");
      cardElement.cDest = card;
      this.appendChild(cardElement);
    });
  }
}

customElements.define("card-list", CardList);
