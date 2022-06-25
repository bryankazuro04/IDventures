import dataData from "../../Data/destination.json";

const Explore = {
  async render() {
    return `
    <div class="jumbotron text-center">
      <div class="position-relative">
        <img src="./media/Danau_Gunung_Tujuh.jpg" alt="">

        <h1 class="fw-bold text-center">Explore With Us</h1>
      </div>
    </div>

    <div class="container p-5">
      <div class="container-list">
      </div>
    </div>
    `;
  },

  async afterRender() {
    const destinationData = dataData.destination;

    const destinationContainer = (dest) => {
      const containerList = document.querySelector(".container-list");

      containerList.innerHTML = "";

      dest.forEach((des) => {
        const { title, description, image, page } = des;

        containerList.innerHTML += `
        <div class="card-destination">
          <img src="${image}" alt="${title}">

          <div class="card__inner">
            <h4 class="card-title">${title}</h4>
            <p class="card__description">
              ${description}
          
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <a href="${page}" class="btn btn-danger justify-content-end">Read More</a>
              </div>
            </p>
          </div>
        </div>
        `;
      });
    };

    destinationContainer(destinationData);
  },
};

export default Explore;
