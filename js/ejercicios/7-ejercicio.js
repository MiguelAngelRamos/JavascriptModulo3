/*
* En una frase buscar una palabra en particular y censurarla, el texto que se debe mostrar encima de la * palabra censurada es:  [**Censurado**]
*
* Pistas
*
* La frase = "El estado actual del covit-19, es el siguiente..."
* Palabra en particular = covit-19
* Resultado = "El estado actual del [**Censurado**], es el siguiente..."

*  funcion censurar que reciba 2 parametros, la frase y la palabra
* 
*/

const censurar = (frase=false, palabra=false) => {
  let resultado = "";
  if(!frase && !palabra) {
    resultado = "No puedes realizar ninguna acción, no enviaste la frase y tampoco la palabra"
  } else if(!frase && palabra) {
    resultado = "No puedes leer la frase"
  } else if(frase && !palabra) {
    resultado = "No puedes censurar no enviaste la palabra"
  } else if(frase && palabra ) {
    resultado = frase.replace(new RegExp(palabra, 'gi'), "[**Censurado**]");
  }
  return resultado;
}

const resultadoCensurado = censurar("El estado actual del covit-19, es el siguiente...", "covit-19");
console.log(resultadoCensurado);
