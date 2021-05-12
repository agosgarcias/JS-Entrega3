export default class Producto {
    constructor(id, categoria, tipo, marca, precio, comprado){
        this.id = parseInt(id);
        this.categoria = categoria;
        this.tipo = tipo;
        this.marca = marca;
        this.precio = parseFloat(precio);
        this.comprado = true;
    }
    
    precioTotal (){
        return this.precio * 1.21;
        
    }
    //Tengo que mejorar el metodo para agregar directamente el añadir carrito
    btnComprar(){
        let HTML = `<h1>${this.categoria} ${this.marca}</h1>
                    <button class="btnProducto">Agregar al carrito</button>`
        return HTML;
                    
    }
}