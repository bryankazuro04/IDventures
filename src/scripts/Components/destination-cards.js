import destinationData from "../Data/destination.json";

const destinationContent = destinationData.destination;

const renderCard = (destination) => {
  const containerDestination = document.querySelector(".container-card");
  containerDestination.innerHTML = "";

  destination.forEach((dest) => {
    const { title, description, image, page } = dest;

    containerDestination.innerHTML += `
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

renderCard(destinationContent);
