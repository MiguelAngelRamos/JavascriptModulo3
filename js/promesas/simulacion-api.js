// una simulacion de un Api

function apiSimulator() {
  return new Promise(function(resolve, reject) {
    let resultJson = false;
    if(resultJson) {
      const producto = {
        nombre: 'Iphone',
        color: 'space gray'
      }
      resolve(producto)
    } else {
      reject("error 500!");
    }
  })
}

apiSimulator().then(function(producto) {
  console.log(producto);
}).catch(function(e) {
  console.log(e);
});