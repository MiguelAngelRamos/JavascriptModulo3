/**
 * invertir una cadena de texto, sin usar los métodos propios de javascript
 * 
 * por ejemplo 'hola' 'aloh'
 * 
 * Pistas 
 * 
 * - Función que acepte por parametro el string (texto)
 * - variable para almacenar este string
 * - Ciclo (for of, forEach o un foor loop)
 * 
 *   19:18 - 19:35 para realizarlo
 */

// miguel

/*
  "" + m // m
  m + i // mi
  mi+g // mig
  mig +u // migu

*/
const textoInvertido = text => {
  // hola
  let textInverse = "";
  for(let letter of text) {
    // texInverse = textInverse + letter;
    //"hola"
    textInverse = letter + textInverse;
    //"aloh"

  }
  return textInverse;
};

// const textoInvertido = text => text.split("").reverse().join("");

console.log(textoInvertido("hola"));

