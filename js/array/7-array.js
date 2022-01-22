// Destructuring
const producto = {
  nombre: 'Iphone 13',
  precio: 900000
}

const { nombre, precio } = producto;
// producto.nombre
// nombre
// console.log(nombre);
// console.log(precio);

// Destructuring en Arrays

const numeros = [10, 400, 10040, 111];

const [,,tercero] = numeros;
// console.log(primero);
// console.log(segundo);
// console.log(cuarto);

// const [cuarto] = numeros;
// console.log(cuarto);

// Quiero obtener el primero elemento y segundo elemento, el resto elementos generarlos en un vector independiente

const [primero, segundo, ...tercero] = numeros;
console.log(primero); // 10
console.log(segundo); // 400
console.log(tercero); // [10040, 111]