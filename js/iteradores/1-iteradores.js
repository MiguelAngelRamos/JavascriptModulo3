// For Loop
// i = i + 2  equivalente a decir : i += 2
// i = i - 2  equivalente a decir : i -= 2
// i = i + 1  equivalente a decir : i++
// i = i - 1  equivalente a decir : i--;

for(let i=0; i <= 10; i += 2) {
  console.log(`Numero: ${i}`)
}
// Como podemos identificar si un numero es par o impar

for(let i=1; i<=10; i++) {
  if( i % 2 == 0) {
    console.log(`El numero ${i} ES PAR`);
  } else {
    console.log(`El numero ${i} ES IMPAR`);
  }
}

const carritoCompra = [
  {id: 1, nombre: 'monitor MSI gamer', precio: 170000},
  {id: 2, nombre: 'mouse Razer gamer', precio: 80000},
  {id: 3, nombre: 'teclado Razer gamer', precio: 80000},
  {id: 4, nombre: 'Audifonos Razer  abc1', precio: 150000},
  {id: 5, nombre: 'Audifonos Razer  abc2', precio: 150000},
  {id: 6, nombre: 'Audifonos Razer  abc3', precio: 150000},
  {id: 7, nombre: 'Audifonos Razer  abc4', precio: 150000},
  {id: 8, nombre: 'Audifonos Razer  abc5', precio: 100000},
];
// puedo obtener la longitud del array
console.log(carritoCompra.length) // 5 - 1 = 4

// console.log(carritoCompra[0]);
// console.log(carritoCompra[1]);
// console.log(carritoCompra[2]);
// console.log(carritoCompra[3]);
// console.log(carritoCompra[4]);

// Para acceder al ultimo elemento del arreglo.
console.log(carritoCompra[carritoCompra.length - 1]);

for(let i=0; i < carritoCompra.length; i++) {
  console.log(carritoCompra[i]);
 }
