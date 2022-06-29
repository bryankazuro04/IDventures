const createBioCardTeamTemplate = (teams) => `
<div class="container__detail d-flex flex-column justify-content-center align-items-center p-4 bg-info bg-opacity-50">
  <img src="/media/bio/${teams.picture}" alt="${teams.name}" class="container__image bg-secondary" />  

  <h4 class="fw-bold text-center mb-3 fs-5">${teams.name}</h4>
  
  <div class="social-media_link">
    <a href="https://github.com/${teams.github}/"><i class="fa-brands fa-github"></i></a>
    <a href="https://www.linkedin.com/in/${teams.linkedin}/"><i class="fa-brands fa-linkedin"></i></a>
    <a href="https://www.instagram.com/${teams.instagram}/"><i class="fa-brands fa-instagram"></i></a>
    <a href="mailto:${teams.mail}"><i class="fa-solid fa-envelope"></i></a>
    <a href="https://wa.me/${teams.whatsapp}/?text=Hi, Nice to Meet You"><i class="fa-brands fa-whatsapp"></i></a>
  </div>
</div>
`;

const createDestinationCardTemplate = (destinations) => `
<div class="card-destination">
  <img src="${destinations.image}" alt="${destinations.title}">

  <div class="card__inner">
    <h4 class="card-title">${destinations.title}</h4>
    <p class="card__description">
      ${destinations.description}
  
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <a href="${destinations.page}" class="btn btn-danger justify-content-end">Read More</a>
      </div>
    </p>
  </div>
</div>
`;

const createLoaderTemplate = () => `
<div class="loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
`;

export {
  createBioCardTeamTemplate,
  createDestinationCardTemplate,
  createLoaderTemplate,
};
