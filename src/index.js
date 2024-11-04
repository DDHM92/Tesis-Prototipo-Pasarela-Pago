// Función para cargar el tema al iniciar la página
function loadTheme() {
  const htmlElement = document.documentElement;
  const themeIcon = document.getElementById('theme-icon');
  const button = document.getElementById('toggle-dark-mode');
  //const themeField = document.getElementById('<%= hfTheme.ClientID %>'); // HiddenField

  // Obtener el tema guardado en localStorage
  const savedTheme = localStorage.getItem('theme') || 'light';

  // Aplicar el tema guardado
  htmlElement.setAttribute('data-bs-theme', savedTheme);
  if (savedTheme === 'dark') {
    themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
    button.classList.replace('btn-light', 'btn-dark');
  } else {
    themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    button.classList.replace('btn-dark', 'btn-light');
  }

  // Actualizar el valor del HiddenField
  //themeField.value = savedTheme;

  // Actualizar el logo al cargar la página
  updateLogoBasedOnTheme();
}

function updateLogoBasedOnTheme() {
  const logo = document.querySelector('.academy-logo');

  //console.log('Inicio');

  if (!logo) {
    //console.log('Fin');
    return; // Salir de la función si no se encuentra el logo
  }

  // Obtener la ruta actual del logo
  let currentImageUrl = logo.getAttribute('src');

  //console.log(currentImageUrl); // Imprime la ruta actual para depuración

  // Extraer la ruta base y el nombre del archivo actual
  const pathParts = currentImageUrl.split('/');
  const basePath = pathParts.slice(0, -1).join('/') + '/'; // La ruta base es todo excepto el nombre del archivo
  const currentFileName = pathParts[pathParts.length - 1]; // Nombre del archivo actual

  let newImageFileName; // Variable para almacenar el nuevo nombre de archivo

  if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
    //console.log('dark');
    newImageFileName = 'LOGOS SIVARSPORTSA-05.png'; // Nuevo nombre para modo oscuro
  } else {
    //console.log('light');
    newImageFileName = 'LOGOS SIVARSPORTSA-01.png'; // Nuevo nombre para modo claro
  }

  // Asignar la nueva ruta de imagen combinando la base con el nuevo nombre de archivo
  logo.setAttribute('src', basePath + newImageFileName); // Cambia el src del logo
}

// Llamar a la función para cargar el tema al cargar la página
document.addEventListener('DOMContentLoaded', loadTheme);
