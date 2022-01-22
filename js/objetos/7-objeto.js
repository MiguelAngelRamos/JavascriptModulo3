// La referencia 

const producto = {
  nombre: "Auto",
  precio: 5000,
  disponible: true,
}

// copiando
const copia1 = producto;

copia1.precio = 500000;


console.log(producto);
console.log(copia1);

/* ¿ Como podemos romper la referencia? */

