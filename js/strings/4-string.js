const producto = 'Notebook Gamer MSI Pantalla 17 Pulgadas';
// console.log(producto);
// // Quiero reemplazar Pulgadas por "
// console.log(producto.replace(' Pulgadas', '"'));

// console.log(producto.replace('Notebook', 'Monitor'));


// .slice para cortar, donde quiero comenzar a cortar donde quiero terminar el corte.

console.log(producto.slice(0,8)); // Notebook
console.log(producto.slice(8,0));
console.log(producto.slice(9,14)); // Gamer
console.log(producto.slice(15,18)); 
console.log(producto.slice(19,27)); 
console.log(producto.slice(28,30)); 
console.log(producto.slice(31,39));


// Alternativa a Slice
console.log(producto.substring(0,8));
console.log(producto.substring(8,0));

const usuario = "Miguel";
console.log(usuario.substring(0,1));
console.log(usuario.substring(1,2));
console.log(usuario.substring(2,3));

// hay otro método charAt

console.log(usuario.charAt(0));


