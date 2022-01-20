// Concatenar String
const producto = 'Notebook Gamer MSI Pantalla 17 Pulgadas ';
const precio = '2000 USD ';
const stock = 1000;
const local = 'Providencia';

// concat

console.log(producto.concat(precio).concat('Oferta! '));
console.log(producto.concat('Oferta!'));

// +

console.log("El producto " + producto + "tiene un precio de: " + precio);

/* Es6 template String */

// `` backtick
// una solución cuando tenemos muchas variables
// alt + 96 ``

console.log(`El producto ${producto} tiene un precio de: ${precio}`);