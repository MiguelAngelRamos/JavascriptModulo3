/* Funciones en Javascript*/

// Nos sirve para reutilizar el codigo.

// Tipos de declaración

// tradicional
function sumar() {
  console.log('Hola desde funcion sumar');
}

// de llamar una funcion 
sumar();

// funciones anonimas

const sumarDos = function() {
  console.log('hola desde funcion anonima');
}
// inovocar
sumarDos();

// Es6 las funciones de flecha ( arrows functions )

const sumarTres = () => {
  console.log('Hola desde una arrow function');
}
sumarTres();


// Arrow function con retorno

// const sumarC = (a, b) => {
//   return a + b;
// }

const sumarC = (a, b, c) => a + b + c;
const resultadoC = sumarC(14, 16, 20);
console.log(resultadoC);


