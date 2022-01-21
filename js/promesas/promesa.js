/* Una Promesa sirve para trabajar con peticiones asincronas 
y es usado para disminuir el uso excesivo de callback */

// let myPromise = new Promise(function(resolve, reject) {
//   let suma = 20-5; // 15
//   if(suma == 10) {
//     resolve('Es correcto es igual a 10')
//   } else {
//     reject('No es correcto no es igual a 10')
//   }
// });

// myPromise.then(function(message) {
//   console.log(message);
// }).catch(function(err) {
//   console.log(err);
// });

// 13 lineas de código

const myPromise = new Promise((resolve, reject) => {
  const suma = 20-5;
  console.log(suma == 10); // true o falso
  suma == 10?resolve('Es correcto es igual a 10'):reject('No es correcto');
})

myPromise.then( message => console.log(message)).catch( err => console.log(err));