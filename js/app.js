import Perfil from './modul/profile.js';
import Producto from './modul/productos.js';
import {} from "./events/eventos.js";

//Arrays
const persona1 = new Perfil("Agostina", "Garcia", "01/10/1993", "ag@email.com", "ag1234", "");
persona1.validar();

const carrito = []
const productos = []

productos.push(new Producto(1, "pelotas", "tenis", "babolat", 50, false));
productos.push(new Producto(2, "pelotas", "tenis", "babolat", 42, false));
productos.push(new Producto(3, "pelotas", "tenis", "wilson", 60, false));
productos.push(new Producto(4, "pelotas", "tenis", "dunlop", 90, false));
productos.push(new Producto(5, "raquetas", "tenis", "babolat", 3450, false));
productos.push(new Producto(6, "raquetas", "tenis", "babolat", 4330, false));
productos.push(new Producto(7, "raquetas", "tenis", "wilson", 7200, false));
productos.push(new Producto(8, "raquetas", "tenis", "price", 7800, false));
productos.push(new Producto(9, "raquetas", "tenis", "wilson", 6450, false));


for (const Producto of productos) {
    console.log(Producto.precio);
}

let categorias = $("main");
categorias.append("<p><strong>Pelotas</strong></p>");


for (const Producto of productos) {
    if (Producto.categoria === "pelotas"){
        categorias.append(`<div class="card" style="width: 20rem;">
                            <img src="../imagen/productos/${Producto.id}.jpg" class="card-img-top" alt="${Producto.id}" style="width: 10rem">
                            <div class="card-body">
                            <h6 class="card-title">Pelotas ${Producto.marca}</h6> 
                            <class="card-text">$ ${Producto.precio}</p>
                            <button class="btnProducto">Agregar al carrito</button></div>`); 
    }
}
categorias.append("<br>") 
categorias.append("<p><strong>Raquetas</strong></p>");
for (const Producto of productos) {
    if (Producto.categoria === "raquetas"){
        categorias.append(`<div class="card" style="width: 20rem;">
                            <img src="../imagen/productos/${Producto.id}.jpg" class="card-img-top" alt="${Producto.id}" style="width: 10rem">
                            <div class="card-body">
                            <h6 class="card-title">Raquetas ${Producto.marca}</h6> 
                            <class="card-text">$ ${Producto.precio}</p>
                            <button class="btnProducto">Agregar al carrito</button></div>`); 
    }
}

let Compras = $("header");
Compras.append(`<div id="carro">Carrito</div>`)

categorias.append("<br>")  
categorias.append("<form><h3>Formulario de contacto</h3></form>");
$("main form").append("<input type=text> Nombre/s  <input type=text> Apellido/s");
$("main form").append("<br><br>");
$("main form").append("<textarea type=text> Escriba su comentario</textarea>");
$("main form").append("<button> Enviar </button>");