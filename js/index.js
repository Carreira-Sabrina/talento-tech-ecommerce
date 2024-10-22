//El div donde se generan dinamicamente las tarjetas de productos
const contenedorProductos = document.getElementById("contenedor-productos")


//El elemento select cuyas option se poblaran dinamicamente en base a las categorías que vengan de la API
const selectorCategorias = document.getElementById("selector-categorias")

//Acá se almacenarán los botones de agregar al carrito generados dinámicamente
let botonesAgregarAlCarrito = [];

//El span donde se muestra la cantidad de productos que hay en el carrito de compras en el <nav>
const numeroCarrito = document.getElementById("numero-carrito");


//URL de una API
const URL_API = "https://fakestoreapi.com/products"