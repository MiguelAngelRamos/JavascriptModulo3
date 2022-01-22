/* SELLAR UN OBJETO */

const producto = {
  id: 145544414, 
  nombre: 'Iphone 13', 
  precio: 900000,
  disponible: true
};

Object.seal(producto);
console.log(producto);

// cambiando una propiedad
producto.disponible = false;

// Agregar una nueva propiedad
producto.imagen = "usuario.png";

// Eliminar una propiedad
delete producto.precio;

/**
 * Puedo cambiar las propiedades con otros valores,
 * pero no puedo agregar y tampoco eliminar una propiedad
 * el objeto esta "sellado"
 */

// isSealed para saber si el objeto esta sellado
console.log(Object.isSealed(producto));