const createBioCardTeamTemplate = (teams) => `
<section class="container__detail d-flex flex-column align-items-center p-4 bg-white bg-opacity-50 shadow">
  <img src="/media/bio/${teams.picture}" alt="${teams.name}" loading="lazy" class="container__detail-image bg-secondary" />  

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
<section class="content">
  <div class="row justify-content-center">
    <article class="col-md-10">
      <h1 class="content__title mt-5">${destination.header}</h1>
      <hr />

      <p>${destination.description}</p>

      <img
        src="../media/${destination.image.gallery[0]}"
        alt=""
        loading="lazy"
        class="img-fluid imgContent justify-content-center"
      />

      <h2><b>${destination.subtitle1}</b></h2>

      <p>${destination.description2}</p>

      <img
        src="../media/${destination.image.gallery[1]}"
        alt="Bukit"
        loading="lazy"
        class="img-fluid imgContent justify-content-center"
      />

      <h2><b>${destination.subtitle2}</b></h2>

      <p>${destination.location}</p>
    </article>
  </div>
</section>
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

const createGalleryTemplate = (destination) => `
<section class="gallery mb-5">
  <h1 class="fw-light text-center text-lg-start mt-4 mb-0">Gallery</h1>
  <hr class="mt-2 mb-5" />

  <div class="row text-center text-lg-start">
    ${destination.image.gallery
      .map(
        (picture) => `
        <div class="col-lg-3 col-md-4 col-6">
          <img
            class="img-fluid img-thumbnail img-content"
            src="../media/${picture}"
            alt=""
            loading="lazy"
          />
        </div>
      `
      )
      .join("")}
  </div>
</section>
`;

export {
  createBioCardTeamTemplate,
  createDetailDestinationContainerTemplate,
  createLoaderTemplate,
  createGalleryTemplate,
};
