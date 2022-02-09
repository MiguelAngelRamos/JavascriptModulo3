let precioProducto = 100000;
let pagoenEfectivo = precioProducto/2;

let pagoCredito = precioProducto - pagoenEfectivo;
const efectivo = () => {
  let montoaPagar = pagoenEfectivo;
  console.log('en efectivo: ' + montoaPagar);
  metodosdePago('efectivo');
}
const credito = () => {
  console.log('pagado en credito: ' + pagoCredito);
  metodosdePago('tarjeta');
}
efectivo();
credito();
function metodosdePago (metododePago) {
  switch(metododePago) {
    case 'efectivo':
      console.log(`Pagaste con ${metododePago}`);
      break; 
    case 'tarjeta':
      console.log(`Pagaste con ${metododePago}`);
      break;
    case 'transferencia':
      console.log(`Pagaste con ${metododePago}`);
      break;
    case 'cheque':
      console.log(`Pagaste con ${metododePago}`);
      break;  
    default:
      console.log('Este método de pago no existe! en el sistema');
      break;
  }
}

// if(metododePago == 'efectivo') {
//   console.log(`Pagaste con ${metododePago}`);
// }

// if(metododePago == 'tarjeta') {
//   console.log(`Pagaste con ${metododePago}`);
// }

// if(metododePago == 'transferencia') {
//   console.log(`Pagaste con ${metododePago}`);
// }

// if(metododePago == 'cheque') {
//   console.log(`Pagaste con ${metododePago}`);
// }