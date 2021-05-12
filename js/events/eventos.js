export default {}

let enviarCarrito = $("#btnProducto")

enviarCarrito.onclick = () => {
    let agregarCarrito = $(".carro");
    agregarCarrito.append(`<p> ${Producto.categoria} ${Producto.marca} Total: ${Producto.precio}</p>`)
}

let bienvenida = $("body > header > h1")
let subtitulo = $("body > header > h3")

$(document).ready(function(){
    bienvenida.slideUp( ()=> bienvenida.fadeIn())
    bienvenida.animate({
    center: "50%",
    heigth: "2em"},)
    subtitulo.delay(2000)
    .fadeIn()
    .css({
        opacity: "0.5"}
    )
})