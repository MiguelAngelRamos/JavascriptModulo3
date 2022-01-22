const producto = {
  id: 145544414, 
  nombre: 'Iphone 13', 
  precio: 900000,
  disponible: true
};

//console.log(producto);
// como cambiar una propiedad del objeto
producto.disponible = false;
//console.log(producto);

// eliminar una propiedad del objeto
delete producto.id;
console.log(producto);