const footer = document.querySelector(".footer-32892");

footer.innerHTML = `
<div class="container">
  <div class="row">
    <section class="col-sm col-md-3">
      <img src="/media/logo.png" alt="IDventures Logo" class="w-100">
    </section>
  
    <section class="col-sm col-md-4 mb-2 mb-md-0 pb-lg-4">
      <h3 class="fw-bold">About IDventures</h3>

      <p class="mb-2 text-start">
        IDventures adalah media traveling Indonesia dengan spektrum yang lebih luas: tidak sekadar membahas obyek wisata dan destinasi umum, tetapi juga mengulas sisi-sisi lain yang mungkin bermanfaat bagi kalangan nonwisatawan.
      </p>
    </section>

    <section class="col-sm col-md-2 mb-md-0">
      <h3 class="fw-bold">Page</h3>

      <ul class="list-unstyled quick-info mb-2">
        <li>
          <a href="#/about-us">About Us</a>
        </li>

        <li>
          <a href="#/contact">Contact Us</a>
        </li>
      </ul>
    </section>

    <section class="col-sm col-md-3 mb-2 mb-md-0">
      <h3 class="fw-bold">Contact</h3>

      <ul class="list-unstyled quick-info mb-2">
        <li>
          <a href="phoneto:+6223457812">
            <i class="fa-solid fa-phone icon"></i>+62 2345 7812
          </a>
        </li>
        
        <li>
          <a href="mailto:idventures@email.com">
            <i class="fa-regular fa-envelope icon"></i>idventures@email.com
          </a>
        </li>

        <li>
          <a href="https://github.com/bryankazuro04/IDventures">
            <i class="fa-brands fa-github icon"></i>Repository IDventures
          </a>
        </li>
      </ul>
    </section>

    <hr />
    <p class="text-start fw-semibold mb-3 fs-6">&copy; Developed by Team CPNG-80</p>
  </div>
</div>
`;
