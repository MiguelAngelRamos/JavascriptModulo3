const carrito = []; // carrito de compra.

// Producto 

const producto = {
  nombre: 'Iphone 13',
  precio: 900000
}

const producto2 = {
  nombre: 'Notebook Gamer Asus',
  precio: 1600000
}

const producto3 = {
  nombre: 'Teclado Gamer Razer',
  precio: 120000
}

// Método push, agregar al final
carrito.push(producto);
carrito.push(producto2);


// unshift, agregar al inicio
carrito.unshift(producto3)

// Resultado
console.log(carrito);

