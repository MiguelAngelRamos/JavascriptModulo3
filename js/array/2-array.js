// La forma de recorrer un vector
const productos = ['Televisor', 'Mouse', 'Notebook', 'Reloj', 'refrigerador']; // 0-3 indices

// es valido pero no recomendable para recorrer un vector
// console.log(productos);
// console.log(productos[0]);
// console.log(productos[1]);
// console.log(productos[2]);
// console.log(productos[3]);

// longitud
// console.log(productos.length); // 4


// for loop
for(let i=0; i<productos.length; i++) {
  console.log(productos[i]);
}


// i = 0
// i++ 
// i = i + 1;

// 0 = 0 + 1
// i = 1

// 1 = 1 + 1;
// i = 2

// 2 = 2 + 1;
// i = 3;