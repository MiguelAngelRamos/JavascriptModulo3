// map
/**
 * El método map() crea un nuevo array, el array resultante tiene una modificacion por cada elemento.
 * [elemento, elemento2, elemento3]
 */
const numeros = [10, 20, 30, 40];

// const resultMap = numeros.map( (number) => {
//   return number*2;
// });

const resultMap = numeros.map( number => number*2);

console.log(resultMap);

/* familiarizandonos con el JSX */
/* Escribiendo html en javascript*/

const usuarios = [
  { id: 1, name: 'Pedro'},
  { id: 2, name: 'Juan'},
  { id: 3, name: 'Diego'},
];

// const resultadoJsx = usuarios.map((user)=> {
//   return `<li>${user.name}</li>`;
// });
const resultadoJsx = usuarios.map(user => `<li>${user.name}</li>`);
console.log(resultadoJsx);

// ul y ol 

