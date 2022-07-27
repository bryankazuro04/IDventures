const createBioCardTeamTemplate = (teams) => `
<section class="container__detail d-flex flex-column align-items-center p-4 bg-white bg-opacity-50 shadow">
  <img src="/media/bio/${teams.picture}" alt="${teams.name}" class="container__detail-image bg-secondary" />  

  <h4 class="container__detail-info fw-bold text-center mb-3 fs-5">${teams.name}</h4>
  <h6 class="container__detail-info">${teams.university}</h6>
  
  <div class="container__detail-socialMedia">
    <a href="https://github.com/${teams.github}/"><i class="fa-brands fa-github"></i></a>
    <a href="https://www.linkedin.com/in/${teams.linkedin}/"><i class="fa-brands fa-linkedin"></i></a>
    <a href="https://www.instagram.com/${teams.instagram}/"><i class="fa-brands fa-instagram"></i></a>
    <a href="mailto:${teams.mail}"><i class="fa-solid fa-envelope"></i></a>
    <a href="https://wa.me/${teams.whatsapp}/?text=Hi, Nice to Meet You"><i class="fa-brands fa-whatsapp"></i></a>
  </div>
</section>
`;

const createDetailDestinationContainerTemplate = (destination) => `
<div class="row justify-content-center">
  <div class="col-md-10 text-start">
    <h1 class="title">${destination.title}</h1>
    <hr class="justify-content-center" />
  </div>
</div>

<div class="row justify-content-center">
  <div class="col-md-10 text-justify">
    <p class="description">${destination.description}</p>

    <img src="${destination.image}" alt="${destination.title}" class="img-fluid imgContent justify-content-center">

    <h3><b>${destination.title}</b></h3>
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
  createDetailDestinationContainerTemplate,
  createLoaderTemplate,
};
