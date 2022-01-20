const producto = 'Notebook Gamer MSI Pantalla 17 Pulgadas';

// const texto = ' en Oferta!\n'.repeat(2);
const texto = ' en Oferta!'.repeat(2);
console.log(texto);

console.log(`${producto} ${texto}`);

// split

const productoSplit = producto.split(" ");
console.log(productoSplit[3]);


// Pasatiempos

const pasaTiempos = 'Leer, jugar, cantar, aprender a programar, css, bootstrap';
console.log(pasaTiempos.split(","));

// Ejemplo  #
const tweet = "Aprendiendo a programar #ES6";
const resultado = tweet.split('#')
console.log(tweet.split('#'));

console.log(resultado[0]); // mensaje o tweet
console.log(resultado[1]); // hashtag ese mensaje