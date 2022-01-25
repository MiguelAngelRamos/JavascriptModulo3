// if  else if

// ADMIN acceso completo
// User solo lectura no escritura
// EDITOR
const rol = 'EDITOR';

if(rol === 'ADMIN') {
  console.log('Acceso completo al sistema, leer, escribir y actualizar');
} else if(rol =='EDITOR') {
  console.log('Permisos de edicion en el sistema.');
} else {
  console.log('Es un usuario y solo puede leer información del sistema');
}