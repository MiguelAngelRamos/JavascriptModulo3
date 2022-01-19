/* 
Const se utiliza para definir una constante y su valor no puede cambiar, pero hay ciertas excepciones 
con los "objetos" y "arreglos"
*/
// con arrays ( vectores )

// const arrayNumero:String = ['20', '30']; // Un error. por que este arreglo solo admite String.
const arrayNumero = [10, 20, 30, 'Hola mundo'];
console.log(arrayNumero);
console.log(arrayNumero[2]); // 30
arrayNumero.push(200);
// Indices siempre comienzan en 0
console.log(arrayNumero);
/*
 Cuando declaramos un array u objeto como constante y usamos la funcion push, nos permite añadir un nuevo elemento
*/
// Const con Objeto

const persona = {
  nombre: 'Miguel',
  lenguaje: 'Javacript'
}
console.log(persona);
// podemos acceder a un elemento

console.log(persona.nombre); // Miguel

persona.nombre = 'Angel'; // cambiando una propiedad de un objeto constante

console.log(persona);