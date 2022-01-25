const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
  {nombre: 'Monitor 27 Pulgadas', precio: 100}, 
  {nombre: 'Televisor Lg', precio: 400}, 
  {nombre: 'Audifonos', precio: 100}, 
  {nombre: 'Celular', precio: 650}, 
];

// Encontrar un elemento con su indice con un forEach
// si no encuentra el valor no va hacer nada

meses.forEach((mes, i) => {
  if( mes === 'Marzo') {
    console.log(`Mes encontrado y su indice es ${i}`);
  }
});

// findIndex
// Sino lo encuentra retorna -1

const indiceEncontrado = meses.findIndex( mes => {
  return mes === 'Diciembre';
});

console.log(indiceEncontrado);

// Encontrar un indice de un arreglo de objetos.

const indiceObjeto = carrito.findIndex( producto => producto.precio == 100);
console.log(indiceObjeto);