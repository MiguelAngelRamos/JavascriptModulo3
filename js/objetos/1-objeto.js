// Objetos en javascript de tipo dinamico

// Un Objeto Literal
const mascota = {
  nombre: 'Rocky',
  edad: 4,
  vivo: true,
  razas: ['pitbull', 'dogo', 'pastor aleman', 'boxer']
}

console.log(mascota); 
console.log(mascota.nombre);// Rocky
console.log(mascota['nombre']); // rocky
console.log(mascota.edad); // 4
console.log(mascota.vivo); // true
console.log(mascota.razas[0]);
console.log(mascota.razas[1]);
console.log(mascota.razas[3]);

// Boolean (logica) puede ser true o false

// Agregar propiedad a un objeto
mascota.id = 1;
console.log(mascota);

// const mascota = {
//   id: 1,
//   nombre: 'Rocky',
//   edad: 4,
//   vivo: true,
//   razas: ['pitbull', 'dogo', 'pastor aleman', 'boxer']
// }


// Valores enteros int o Integer aquellos valores numericos que no tienen punto decimal
// 1, 2, 3, 50, 100, 500


// Valores numericos que tienen punto decimal, Float

// 1.2, 25.5 100.76 etc.

