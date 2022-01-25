// EJERCICIO FIZZ Y BUZZ

// Ejercicio Fizz BUZZ
// ====================

// Fizz Buzz si un número es múltiplo de 3 imprimes FIZ, 
// si es múltiplo de 5 imprimes BUZZ
// y si es múltiplo de ambos 3 y 5 (como 15, 30, 45), debes imprimir FIZZ BUZZ.

// - Con un rango de 1 a 100 ( for loop )
// - para encontrar el multiplo debe tener resto 0 utilizamos el modulo %
// - y el operador &&

for(let i=1; i<=100; i++) {

  if(( i % 3 === 0) && ( i % 5 === 0)) {
    console.log(`${i} FIZZ BUZZ`);
  } else if( i % 3 === 0) {
    console.log(`${i} FIZZ`);
  } else if( i % 5 === 0) {
    console.log(`${i} BUZZ`);
  }

}

// for
// if
// operadores logicos
// `` template string

