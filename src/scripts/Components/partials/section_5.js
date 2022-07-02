class InstagramGallery extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="text-center mb-5">
      </header>
      
      <div class="row">
        <div class="col-lg-3 col-md-6 px-md-1 py-1">
        <h1> Galeri </h1>
          <a class="instagram-item d-block w-100 reset-anchor" href="#!"><img class="img-fluid" src="https://d19m59y37dris4.cloudfront.net/travel/2-0/img/listing-tnumbnail-1.2aa0ba43.jpg" alt="" />
            <div class="instagram-item-overlay p-5">
            </div>
          </a>
        </div>

        <div class="col-lg-3 col-md-6 px-md-1 py-1">
          <a class="instagram-item d-block w-100 reset-anchor" href="#!"><img class="img-fluid" src="https://d19m59y37dris4.cloudfront.net/travel/2-0/img/listing-tnumbnail-2.732bba03.jpg" alt="" />
            <div class="instagram-item-overlay p-5">
            </div>
          </a>
        </div>

        <div class="col-lg-3 col-md-6 px-md-1 py-1">
          <a class="instagram-item d-block w-100 reset-anchor" href="#!"><img class="img-fluid" src="https://d19m59y37dris4.cloudfront.net/travel/2-0/img/listing-tnumbnail-3.0bbf93cd.jpg" alt="" />
            <div class="instagram-item-overlay p-5">
            </div>
          </a>
        </div>

        <div class="col-lg-3 col-md-6 px-md-1 py-1">
          <a class="instagram-item d-block w-100 reset-anchor" href="#!"><img class="img-fluid" src="https://d19m59y37dris4.cloudfront.net/travel/2-0/img/listing-tnumbnail-4.95e66b76.jpg" alt="" />
            <div class="instagram-item-overlay p-5">
            </div>
          </a>
        </div>

        <div class="col-lg-3 col-md-6 px-md-1 py-1">
          <a class="instagram-item d-block w-100 reset-anchor" href="#!"><img class="img-fluid" src="https://d19m59y37dris4.cloudfront.net/travel/2-0/img/listing-tnumbnail-5.3813454e.jpg" alt="" />
            <div class="instagram-item-overlay p-5">
            </div>
          </a>
        </div>

        <div class="col-lg-3 col-md-6 px-md-1 py-1">
          <a class="instagram-item d-block w-100 reset-anchor" href="#!"><img class="img-fluid" src="https://d19m59y37dris4.cloudfront.net/travel/2-0/img/listing-tnumbnail-6.02c6ec6f.jpg" alt="" />
            <div class="instagram-item-overlay p-5">
            </div>
          </a>
        </div>

        <div class="col-lg-3 col-md-6 px-md-1 py-1">
          <a class="instagram-item d-block w-100 reset-anchor" href="#!"><img class="img-fluid" src="https://d19m59y37dris4.cloudfront.net/travel/2-0/img/listing-tnumbnail-1.2aa0ba43.jpg" alt="" />
            <div class="instagram-item-overlay p-5">
            </div>
          </a>
        </div>

        <div class="col-lg-3 col-md-6 px-md-1 py-1">
          <a class="instagram-item d-block w-100 reset-anchor" href="#!"><img class="img-fluid" src="https://d19m59y37dris4.cloudfront.net/travel/2-0/img/listing-tnumbnail-2.732bba03.jpg" alt="" />
            <div class="instagram-item-overlay p-5">
            </div>
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define("instagram-gallery", InstagramGallery);
