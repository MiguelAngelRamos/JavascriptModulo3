/* CONGELAR UN OBJETO */

const producto = {
  id: 145544414, 
  nombre: 'Iphone 13', 
  precio: 900000,
  disponible: true
};

Object.freeze(producto);
// cambiar
producto.disponible = false;
// agregar
producto.imagen = "foto.jpg";

console.log(Object.isFrozen(producto));

