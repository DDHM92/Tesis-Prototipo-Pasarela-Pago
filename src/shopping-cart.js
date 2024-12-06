// Array con los datos de comercios y productos
const comercios = [
  {
    logo: 'https://pay.kamaygroup.com/Content/IMG/Comercios/Zarpe_250.png',
    productos: [
      {
        nombre: 'Black Balance',
        cantidad: 1,
        precio: 30.0,
        imagen: 'https://zar.pe/shop/Products/BlackBalance245x285.png',
      },
      {
        nombre: 'Golden Mylk',
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
export function cargarCarritoAleatorio() {
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

  // Insertar el HTML en los contenedores solo si existen los elementos
  if (document.getElementById('contenedor-carrito-desktop')) {
    document.getElementById('contenedor-carrito-desktop').innerHTML = carritoHTML;
  }

  if (document.getElementById('contenedor-carrito-movil')) {
    document.getElementById('contenedor-carrito-movil').innerHTML = carritoHTML;
  }

  // Establecer la URL del logo solo si existe el elemento
  if (document.getElementById("imgLogoEscritorio")) {
    document.getElementById("imgLogoEscritorio").src = comercioAleatorio.logo;
  }

  // Actualizar el texto de lblPostAmount solo si existe el elemento
  if (document.getElementById('lblPostAmount')) {
    document.getElementById('lblPostAmount').textContent = total.toFixed(2);
  }

}

// Ejecutar la función al cargar la página
//window.onload = cargarCarritoAleatorio;
document.addEventListener("DOMContentLoaded", cargarCarritoAleatorio);

