// Función para mostrar el loader
function showLoader() {
  const overlay = document.getElementById('loadingOverlay');
  overlay.style.display = 'flex'; // Muestra el overlay
}

// Función para ocultar el loader
function hideLoader() {
  const overlay = document.getElementById('loadingOverlay');
  overlay.style.display = 'none'; // Oculta el overlay
}

// Función para mostrar el toast notification
function showToast(title, message, time) {
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');
  const toastTime = document.getElementById('toastTime');

  // Actualiza el contenido del toast
  toastTitle.textContent = title;
  toastMessage.textContent = message;
  toastTime.textContent = "Hace unos segundos";

  // Muestra el toast
  const toastElement = new bootstrap.Toast(document.getElementById('myToast'));
  toastElement.show();
}

// Función para mostrar el popup modal
function showModalPopup(title, message) {
  const modalTitle = document.getElementById('myModalPopupLabel');
  const modalBody = document.querySelector('#myModalPopup .modal-body');

  // Actualiza el contenido del modal
  modalTitle.textContent = title;
  modalBody.textContent = message;

  // Muestra el modal
  const modalElement = new bootstrap.Modal(document.getElementById('myModalPopup'));
  modalElement.show();
}