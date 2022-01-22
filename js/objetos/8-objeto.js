
// End Point
const producto = {
  nombre: "Auto",
  precio: 300,
  disponible: true,
}
// End point
const proveedor = {
  proveedor: "Hyundai",
  pais: "South Korea"
}
// End point 
const destino = {
  pais: "Chile",
  cuidad: "Santiago"
}
// Una copia rompiendo la referencia spread operator
const copia1 = {...producto};

console.log(producto);
copia1.precio = 100000000000;
console.log(copia1);
// Es unir 2 objetos
// ES6
const unionObject = {...producto, ...proveedor, ...destino};
// Unir los objetos
// Object.assign()
const unionObject2 = Object.assign(producto, proveedor, destino);

console.log(unionObject);
console.log(unionObject2);