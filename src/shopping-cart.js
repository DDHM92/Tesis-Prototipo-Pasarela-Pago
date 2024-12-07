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

  let total = 0;
  let productosHTML = '';

  comercioAleatorio.productos.forEach((producto) => {
    productosHTML += `
      <div class="row my-3 align-items-center border-bottom pb-3">
        <div class="col-3">
          <img class="rounded img-fluid shoppingCart-productImage" 
            src="${producto.imagen}" 
            alt="${producto.nombre}" 
            style="max-width:70px;" 
            title="Imagen del producto: ${producto.nombre}">
        </div>
        <div class="col-6">
          <span class="fw-semibold" title="Nombre del producto">${producto.nombre}</span>
          <br/><small class="text-muted" title="Cantidad seleccionada">Cantidad: ${producto.cantidad}</small>
        </div>
        <div class="col-3 text-end">
          <span class="fw-semibold" title="Precio del producto">$${producto.precio.toFixed(2)}</span>
        </div>
      </div>
    `;
    total += producto.precio;
  });

  const carritoHTML = `
    <div class="card" style="border: none !important;">
      <div class="card-body p-4">
        <div class="text-center mb-4">
          <img id="Image_Logo_Escritorio" class="rounded mb-2" 
            alt="Logo comercio" 
            src="${comercioAleatorio.logo}" 
            style="max-width:80px;" 
            title="Logo del comercio seleccionado">
          <h5 class="card-title fw-bold mt-2 mb-0" title="Encabezado del carrito">Tu Carrito</h5>
          <small class="text-muted" title="Productos incluidos en tu carrito">Productos agregados</small>
        </div>

        <!-- Encabezados de columnas -->
        <div class="row text-start mb-2 border-bottom pb-2">
          <div class="col-6 fw-semibold" title="Productos en tu carrito">Producto</div>
          <div class="col-2"></div>
          <div class="col-4 text-end fw-semibold" title="Subtotal por producto">Subtotal</div>
        </div>

        ${productosHTML}

        <!-- Total -->
        <div class="row mt-4 pt-3">
          <div class="col-8 text-start">
            <span class="fw-bold" title="Monto total del carrito">TOTAL</span>
          </div>
          <div class="col-4 text-end">
            <span id="lblPostAmount1Desktop" class="fw-bold" 
              title="Monto total a pagar">$${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Insertar el HTML en los contenedores solo si existen los elementos
  if (document.getElementById('contenedor-carrito-desktop')) {
    document.getElementById('contenedor-carrito-desktop').innerHTML = carritoHTML;
  }

  if (document.getElementById('contenedor-carrito-movil')) {
    document.getElementById('contenedor-carrito-movil').innerHTML = carritoHTML;
  }

  // Actualizar la URL del logo
  const imgLogo = document.getElementById("imgLogoEscritorio");
  if (imgLogo) {
    imgLogo.src = comercioAleatorio.logo;
    imgLogo.title = "Logo del comercio: " + comercioAleatorio.logo.split('/').pop();
  }

  // Actualizar el texto de lblPostAmount solo si existe
  const lblPostAmount = document.getElementById('lblPostAmount');
  if (lblPostAmount) {
    lblPostAmount.textContent = total.toFixed(2);
    lblPostAmount.title = "Monto total a pagar: $" + total.toFixed(2);
  }
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", cargarCarritoAleatorio);
