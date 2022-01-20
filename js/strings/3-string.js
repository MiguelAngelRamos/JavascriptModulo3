const nombre = '              Miguel          ';

/* Utilidad en formularios para pasar cierta validaciones de espacios en blanco */
console.log(nombre);
console.log(nombre.trimStart());
console.log(nombre.trimEnd());
console.log(nombre.trimStart().trimEnd());



// hacerlo con un solo método
console.log(nombre.trim());
