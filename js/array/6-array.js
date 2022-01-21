const carrito = [];

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

const producto4 = {
  nombre: 'Mouse Gamer Razer',
  precio: 80000
}

// Método push, agregar al final
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);
// unshift, agregar al inicio
//carrito.unshift(producto3)

// Eliminar elementos de un Arreglo al final
 //carrito.pop();

// Eliminar elementos al comienzo
 //carrito.shift();
// Resultado
 console.log(carrito);

// splice
// Eliminar cualquier elemento del arreglo

// Donde queremos comenzar a eliminar y cuantos elementos queremos eliminar
console.log(carrito);
carrito.splice(1,1);
// carrito.splice(2,1)
console.log(carrito);