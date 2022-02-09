
opcion=2; 
do {
  switch(opcion) {
    case 1:
      console.log('1.- Crear usuario\n');
      break; 
    case 2:
      console.log('2.- Eliminar usuario\n');
      break;
    case 3:
      console.log('3.- Actualizar usuario\n');
      break;
    default:
      console.log('No existe opcion');
      break;
  }
  break;
} while(opcion !== 0);


