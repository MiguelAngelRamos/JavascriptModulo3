// forEach para arreglos
const carrito = [
  { nombre: 'Iphone 13', precio: 900000 },
  { nombre: 'Notebook Gamer Asus', precio: 1600000 },
  { nombre: 'Mouse Gamer Razer', precio: 70000 },
  { nombre: 'Teclado Gamer Razer', precio: 80000 },
  { nombre: 'Monitor Gamer MSI', precio: 180000 },
];

// forEach

const resultadoForEach = carrito.forEach(function(producto) {
  return `El producto: ${producto.nombre}, tiene un Precio de: ${producto.precio}`;
});

console.log(resultadoForEach);
const resultadoMap = carrito.map(function( producto){
  return `El producto: ${producto.nombre}, tiene un Precio de: ${producto.precio}`;
})

console.log(resultadoMap);