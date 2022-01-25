// Filter nos va filtrar
const carrito = [
  { nombre: 'Notebook MSI', precio: 16000},
  { nombre: 'Mouse Razer', precio: 2000},
  { nombre: 'Audifonos Razer', precio: 1000},
  { nombre: 'Monitor LG', precio: 200}
];

const resultadoFilter = carrito.filter( product => product.precio < 1000 );
console.log(resultadoFilter);


// Eliminar con filter
const resultadoFilter2 = carrito.filter( product => product.nombre !== 'Notebook MSI');
console.log(resultadoFilter2);


let minumero = 20;
let minumero2 = 30;

//minumero = minumero2; // asignacion
// minumero tendria el valor 30

minumero == minumero2; // asi estoy comparando con el ==

// == igual que

// !== distinto que

// =  asignación
// == de comparación con valor
// === comparación valor y tipo

