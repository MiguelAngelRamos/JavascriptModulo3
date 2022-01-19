/* Una Promesa sirve para trabajar con peticiones asincronas 
y es usado para disminuir el uso excesivo de callback */

let myPromise = new Promise(function(resolve, reject) {
  // let num1 = 5;
  // let num2 = 10;
  let suma = 20-5; // 15
 // false
  if(suma == 10) {
    resolve('Es correcto es igual a 10')
  } else {
    reject('No es correcto no es igual a 10')
  }
});

myPromise.then(function(message) {
  console.log(message);
}).catch(function(err) {
  console.log(err);
})