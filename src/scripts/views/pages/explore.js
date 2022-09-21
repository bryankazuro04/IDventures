import dataData from "../../Data/destination.json";
import { createLoaderTemplate } from "../templates/creator-templates";

const Explore = {
  async render() {
    return `
    <div class="jumbotron text-center">
      <div class="position-relative">
        <img data-src="./media/destination/danau-gunung-tujuh.webp" alt="Jumbotron picture" class="lazyload">

        <h1 class="fw-bold text-center">Explore With Us</h1>
      </div>
    </div>

    <div class="loader mt-5"></div>

    <div class="container py-5">
      <card-list></card-list>
    </div>
    `;
  },

  async afterRender() {
    const { destination } = dataData;
    const cardList = document.querySelector("card-list");
    const loader = document.querySelector(".loader");
    loader.innerHTML += createLoaderTemplate();

    try {
      cardList.innerHTML = "";
      cardList.cards = destination;
    } catch (error) {
      console.log(error);
    }
    loader.style.display = "none";
  },
};

export default Explore;
