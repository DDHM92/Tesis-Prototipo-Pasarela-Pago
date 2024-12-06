// Este archivo define el web component para el modal, overlay y toast.

class MyCommonUI extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="modal fade" id="myModalPopup" tabindex="-1" aria-labelledby="myModalPopupLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myModalPopupLabel">Título del Popup</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">Aquí va el contenido del popup.</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Aceptar</button>
            </div>
          </div>
        </div>
      </div>

      <div id="loadingOverlay" class="loading-overlay">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 1055">
        <div id="myToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <strong id="toastTitle" class="me-auto">Título del Toast</strong>
            <small id="toastTime">Hace un momento</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body" id="toastMessage">Este es el mensaje del toast.</div>
        </div>
      </div>
    `;
  }
}

customElements.define('my-common-ui', MyCommonUI);
