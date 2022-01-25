/* Comprobar si existe un elemento dentro de una array */
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
  {nombre: 'Monitor 27 Pulgadas', precio: 500}, 
  {nombre: 'Televisor Lg', precio: 400}, 
  {nombre: 'Audifonos', precio: 100}, 
  {nombre: 'Celular', precio: 650}, 
];

// Ejemplo con forEach
meses.forEach((mes) => {
  // console.log(mes);
  // console.log(index);
  if(mes == 'Diciembre') {
    console.log('Si existe Marzo');
  } 
})

// el método includes arreglos con elementos que no son objetos
const resultado = meses.includes('Diciembre');
console.log(resultado);

// Pero cuando son objetos .some

const existe = carrito.some( producto => producto.nombre === 'Audifonos');
console.log(existe);