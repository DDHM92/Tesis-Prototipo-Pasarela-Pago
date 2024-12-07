class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg fixed-top" id="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="Default.html">Prototipo Pasarela Pago</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-start custom-offcanvas" tabindex="-1" id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Carrito</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <div class="nav-item px-0">
                <div class="px-0 py-5 d-block d-md-none">
                  <div id="contenedor-carrito-movil" class="container text-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      `;
  }
}

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="text-center text-lg-start">
        <div class="container">
          <div class="row mt-2">
            <div class="col-lg-4 col-md-6 mb-1 mb-md-0">
              <div class="mt-2">
                <a class="btn btn-floating" target="_blank" href="https://web.whatsapp.com/"><i class="bi bi-whatsapp"></i></a>
                <a class="btn btn-floating" target="_blank" href="https://www.facebook.com/"><i class="bi bi-facebook"></i></a>
                <a class="btn btn-floating" target="_blank" href="https://www.instagram.com/"><i class="bi bi-instagram"></i></a>
                <a class="btn btn-floating" target="_blank" href="https://www.youtubr.com/"><i class="bi bi-youtube"></i></a>
              </div>
              <div class="footer-links mt-2">
                <a href="${basePath}About.html">Acerca de nosotros</a> /
                <a href="${basePath}Contact.html">Contáctanos</a>
              </div>
              <p class="mt-3">
                &copy;2024 - Prototipo Pasarela Pago
              </p>
            </div>
            <div class="col-lg-4 col-md-6 mb-1 mb-md-0 d-none d-md-block">
              <h5 class="text-uppercase mb-2 pb-1">Contáctanos</h5>
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="bi bi-house-fill"></i><span class="ms-2">San Salvador, El Salvador</span>
                </li>
                <li class="mb-3">
                  <i class="bi bi-envelope-fill"></i><span class="ms-2">contact@test.com</span>
                </li>
                <li class="mb-3">
                  <i class="bi bi-telephone-fill"></i><span class="ms-2">+503 2345 6789</span>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6 mb-1 mb-md-0 d-none d-md-block">
              <h5 class="text-uppercase mb-2 text-center">Horario de atención</h5>
              <div class="row text-center g-2">
                <div class="col-6">Lun - Jue:</div>
                <div class="col-6">8am - 9pm</div>
                <div class="col-6">Vie - Sáb:</div>
                <div class="col-6">8am - 1am</div>
                <div class="col-6">Domingo:</div>
                <div class="col-6">9am - 10pm</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
