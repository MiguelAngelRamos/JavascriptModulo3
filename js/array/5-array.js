const carrito = [];

// spread operator
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

let result;

result = [...carrito, producto];

result = [...result, producto2];

result = [producto3, ...result];

console.log(result);

