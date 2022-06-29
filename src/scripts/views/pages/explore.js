import dataData from "../../Data/destination.json";
import {
  createDestinationCardTemplate,
  createLoaderTemplate,
} from "../templates/creator-templates";

const Explore = {
  async render() {
    return `
    <div class="jumbotron text-center">
      <div class="position-relative">
        <img src="./media/Danau_Gunung_Tujuh.jpg" alt="">

        <h1 class="fw-bold text-center">Explore With Us</h1>
      </div>
    </div>

    <div class="loader mt-5"></div>

    <div class="container p-5">
      <div class="container-list">
      </div>
    </div>
    `;
  },

  async afterRender() {
    const { destination } = dataData;
    const containerList = document.querySelector(".container-list");
    const loader = document.querySelector(".loader");
    loader.innerHTML += createLoaderTemplate();

    try {
      destination.forEach((des) => {
        containerList.innerHTML += createDestinationCardTemplate(des);
      });
      loader.style.display = "none";
    } catch (error) {
      console.log(error);
    }
  },
};

export default Explore;
