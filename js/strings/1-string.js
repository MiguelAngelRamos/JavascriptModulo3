/* Métodos de String */

const producto = 'Notebook Gamer MSI Pantalla 17 Pulgadas';
console.log(producto);

// Conocer la longitud de string
console.log(producto.length);

/* indexOf */
// retorna -1 sino encuentra la palabra en el string "producto"
// No es Case sensitive.

console.log(producto.indexOf('NOTEBOOK'));

/* includes */
console.log(producto.includes('Asus'));