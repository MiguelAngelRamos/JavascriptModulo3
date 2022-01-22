// Template de objeto

// crear nuestros objetos
// Función constructora

function car(brand, model, year) {
  this.brand = brand;
  this.model = model; 
  this.year = year;
  this.supplier = "Empresa Z";
}

// comenzar con la creación

const carNew = new car("Hyundai", "Elantra", 2022);
const carNew2 = new car("Tesla", "Model 3", 2018);

console.log(carNew);
console.log(carNew2);
