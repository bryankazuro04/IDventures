import UrlParser from "../../routes/url-parser";
import DestinationData from "../../data/destination-data";
import {
  createDetailDestinationContainerTemplate,
  createGalleryTemplate,
  createLoaderTemplate,
} from "../templates/creator-templates";

const Destination = {
  async render() {
    return `
    <img loading="lazy" class="header-img"/>

    <div class="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    
    <div class="container detail__destination">      

    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const destinationData = await DestinationData.detailDestination(url.id);

    const detail = document.querySelector(".detail__destination");
    const loading = document.querySelector(".loading");
    const headerImg = document.querySelector(".header-img");

    headerImg.setAttribute("src", `../media/${destinationData.image.picture}`);
    headerImg.setAttribute("alt", destinationData.title);

    try {
      detail.innerHTML +=
        createDetailDestinationContainerTemplate(destinationData);

      detail.innerHTML += createGalleryTemplate(destinationData);

      loading.style.display = "none";
    } catch (error) {
      console.log(error);
    }
  },
};

export default Destination;
