const producto = { 
  nombre: 'Iphone 13', 
  precio: 900000,
  disponible: true
};

console.log(producto);
// como cambiar una propiedad del objeto
producto.disponible = false;
console.log(producto);
delete producto.nombre;
console.log(producto);