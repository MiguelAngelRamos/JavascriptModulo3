// reduce
/* El método reduce es acumulador, es decir
toma una cantidad de datos y nos retorna el resultado acumulado.
*/

const carrito = [
  { nombre: 'Notebook MSI', precio: 16000},
  { nombre: 'Mouse Razer', precio: 2000},
  { nombre: 'Aufinos Razer', precio: 1000},
  { nombre: 'Monitor LG', precio: 200}
];

let total = 0;
// forEach
carrito.forEach( (product) => {
  // total = total + product.precio;
  total += product.precio;
});
console.log(total);

// valor1 = valor1 - 500;
// valor1 -= 500; // otro valor que nosea 1

// valor1++; // solamente quiero incremenatar de 1 en 1
// valor1 = valor1 + 1;

// valor1--;
// valor1 = valor1 - 1;


// CON "reduce"

const resultadoReduce = carrito.reduce((total, product)=> total + product.precio, 0);
console.log(resultadoReduce);