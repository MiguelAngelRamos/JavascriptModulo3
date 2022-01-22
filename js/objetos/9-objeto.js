/* La palabra this en los objetos */

const nombre = "Notebook MSI";
const precio = 1600000;

const producto = {
  nombre: "Teclado Razer Gamer",
  precio: 80000,
  disponible: true,
  mostrarInfo: function() {
    console.log(`El producto: ${this.nombre} tiene un precio de : ${this.precio}`);
  }
};
// this = esto
producto.mostrarInfo();