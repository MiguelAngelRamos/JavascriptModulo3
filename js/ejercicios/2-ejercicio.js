/* PALINDROMO 
    otto , ana, bob, menem, ono, arenera, salas, ojo
    Comprobar si una palabra es un palindromo.
    Los palindromos son palabras que se leen igual al inversa.
    - Una función recibe por parametro la palabra
    - Aplicar los metodos de array
*/
let palabra = "SaLAs";

const isPalindromo = ( palabra ) => {
  // toLowerCase() transforma a miniscula
  const palindromo = palabra.toLowerCase();
  
  const observarInverso = palindromo.toLowerCase().split('').reverse();
  console.log(observarInverso);
  const observarUnion = observarInverso.join('');
  console.log(observarUnion);

  const inverso = palindromo.split('').reverse().join('');

  if(inverso === palindromo) {
    return true;
  } else {
    return false;
  }

}

if(isPalindromo(palabra)) {
  console.log('Si es un palindromo');
} else {
  console.log('No es un palindromo');
}

console.log("La palabra " + palabra + " es un palindromo?: " + isPalindromo(palabra));
