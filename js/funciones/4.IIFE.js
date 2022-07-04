/**
 * * IIFE 
 * * Inmediately Invoked Function Expression
 * 
 * * Self Executing Anonymous Function
 * * Self Executing Invoking Function
 * 
 * * Queremos tener variables dentro de la función auto invocada que no contaminen el scope global
 * * Es decir que no esten accesibles fuera de esta función
 */

// * Cuando no podemos tener el top-level await podemos utilizar una

(async() => {
 await fetch('https://jsonplaceholder.typicode.com/posts')
})();

//* En Javascript es obligatorio el ; cuando la siguiente linea comienze con (), [] 

(function myLibrary(win, doc) {
  console.log(win);
  console.log(doc);
})(window, document);

// * Tambien se utilizan para simular propiedades privadas