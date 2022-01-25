// valores booleanos pueden tomar 2 estados seria "Verdadero y Falso"
// true y false

const funcionTrue = () => {
  console.log('retornar True');
  return true;
};

const funcionFalse = () => {
  console.log('retornar False');
  return false;
};

const funcionHtml = () => {
  console.log('HTML, css, las animaciones y el bootstrap(card)');
}

// Vamos aprender a negar (!)

console.log(true); // va ser true
console.log(!true); // va ser false
console.log(false); // false
console.log(!false); // true
console.log(!!false); // false

console.log(!funcionTrue()); // false
console.log(!funcionFalse()); // true

/** OPERADOR AND (&&) (Y) */

/* va regresar true si todos los valores son verdaderos */
console.log("&&");
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

/** OPERADOR OR ( || ) */
/* Al menos un valor debe ser verdadero */
console.log("||");
console.log(true || false ); // true
console.log(false || false ); // false

console.log(funcionTrue() || funcionFalse()); // true

// Ejercitamos
console.log(true && true && true && false); // false
console.log(true || true || true || false); // true


/* Tecnica */

// Usuarios logeados ( usuarios validos con su correspondiente inicio sesion )

// funcionTrue (true) va ser Usuario logeado

console.log( funcionTrue() && funcionHtml());

