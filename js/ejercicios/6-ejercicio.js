/*
*  En base a 2 arrays, devolver un array con los elementos comunes entre ambos
*  
*  const array1 = [4,5,6,7]
*  const array2 = [7,8,9,5]
*  
*  Resultado ?? Que nos devuelve?: [5,7]

* Una función elementosComunes que reciba por parametro los 2 array
* Utilize filter e includes
*
*/

const elementosComunes = (array1, array2) => {
 const resultadoFilter = array1.filter(element => array2.includes(element))
 return resultadoFilter;
}

const resultado = elementosComunes([4,5,6,7], [7,8,9,5]);
console.log(resultado);