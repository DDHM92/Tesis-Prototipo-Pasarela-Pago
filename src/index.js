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

// Array con los datos de comercios y productos
const comercios = [
  {
    logo: 'https://pay.kamaygroup.com/Content/IMG/Comercios/Zarpe_250.png',
    productos: [
      {
        nombre: 'BLACK BALANCE',
        cantidad: 1,
        precio: 30.0,
        imagen: 'https://zar.pe/shop/Products/BlackBalance245x285.png',
      },
      {
        nombre: 'GOLDEN MYLK',
        cantidad: 1,
        precio: 40.0,
        imagen: 'https://zar.pe/shop/Products/GoldenMylk245x285.png',
      },
      {
        nombre: 'Envio',
        cantidad: 1,
        precio: 5.0,
        imagen: 'https://pay.kamaygroup.com/Content/IMG/Productos/006%20ENTREGA.svg',
      },
    ],
  },
  {
    logo: 'https://pay.kamaygroup.com/Content/IMG/Comercios/003%20SIVAR%20SPORTS%20ACADEMY.svg',
    productos: [
      {
        nombre: 'Uniforme 2024',
        cantidad: 1,
        precio: 23.0,
        imagen:
          'https://pay.kamaygroup.com/Content/IMG/Comercios/uniforme2024.png',
      },
      {
        nombre: 'Mensualidad',
        cantidad: 1,
        precio: 40.0,
        imagen:
          'https://pay.kamaygroup.com/Content/IMG/Comercios/003%20SIVAR%20SPORTS%20ACADEMY.svg',
      },
    ],
  },
  {
    logo: 'https://pay.kamaygroup.com/Content/IMG/Comercios/OPEN_MARCA.svg',
    productos: [
      {
        nombre: 'Inscripción a Torneo OPEN Nacional',
        cantidad: 1,
        precio: 175.0,
        imagen:
          'https://pay.kamaygroup.com/Content/IMG/Comercios/OPEN_PRODUCTO.svg',
      },
    ],
  },
];

// Función para crear el HTML dinámico del carrito
function cargarCarritoAleatorio() {
  // Seleccionar comercio aleatorio
  const comercioAleatorio = comercios[Math.floor(Math.random() * comercios.length)];

  // Crear el HTML del carrito basado en el comercio seleccionado
  let carritoHTML = `
      <div class="container text-center">
          <div class="row">
              <div class="col">
                  <img id="Image_Logo_Escritorio" class="rounded logo-comercio" alt="Logo comercio" src="${comercioAleatorio.logo}">
              </div>
          </div>
          <section id="sectionCarritoEscritorio" name="Carrito escritorio">
              <div class="row text-start mt-5">
                  <div class="col-6">
                      <span class="kgp-sub-title" style="font-weight:bold;">Producto</span>
                  </div>
                  <div class="col-2"></div>
                  <div class="col-4 text-end">
                      <span class="kgp-sub-title" style="font-weight:bold;">Subtotal</span>
                  </div>
              </div>
  `;

  let total = 0;
  comercioAleatorio.productos.forEach((producto) => {
    carritoHTML += `
          <div class="row text-start my-2 align-items-center">
              <div class="col-3">
                  <img class="rounded shoppingCart-productImage" src="${producto.imagen}" alt="${producto.nombre}">
              </div>
              <div class="col-6">
                  <span class="kgp-body">${producto.nombre} (${producto.cantidad})</span>
              </div>
              <div class="col-3 text-end">
                  <span class="kgp-body">$${producto.precio.toFixed(2)}</span>
              </div>
          </div>
      `;
    total += producto.precio;
  });

  carritoHTML += `
      <div class="row mt-5">
          <div class="col-6 text-start">
              <span class="kgp-sub-title" style="font-weight:bold;">TOTAL</span>
          </div>
          <div class="col-3"></div>
          <div class="col-3 text-end">
              <span id="lblPostAmount1Desktop" class="kgp-sub-title" style="font-weight:bold;">$${total.toFixed(2)}</span>
          </div>
      </div>
  </section>
  </div>
  `;

  // Insertar el HTML en los contenedores
  document.getElementById('contenedor-carrito-desktop').innerHTML = carritoHTML;
  document.getElementById('contenedor-carrito-movil').innerHTML = carritoHTML;
  
  // Establecer la URL del logo
  document.getElementById("imgLogoEscritorio").src = comercioAleatorio.logo;
}

// Ejecutar la función al cargar la página
window.onload = cargarCarritoAleatorio;
