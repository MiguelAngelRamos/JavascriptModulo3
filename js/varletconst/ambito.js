/** Ambito de las variables let y var */

// Con Var
var edad = 20;

// Condicional un If
if(true) {
  var edad = 40;
  console.log(edad); // ?? 40
}

// console.log(edad); // ?? 40  deberia imprimir 20

/* Var no respeta el ambito o scope del if, sino que vuelve a crear una variable con el mismo nombre
y le cambia el valor, a la variable declarada en un scope(superior) */

// Let ahora veamos el ejemplo con let

let altura = 400;

if(true) {
  // scope del if
  let alturaIf = 20;
  console.log(alturaIf); // 20
}
console.log(alturaIf); // no existe
console.log(altura); // 400

// let si respeta el scope o ambito del if y no altera lo que tiene el scope superior







// true o false
// condicional If = "Si"
// if(true) {
//   // true
// } else {
//  // false
// }