import validator from './validator.js';

const botonPagar = document.getElementById("botonPagar");

botonPagar.addEventListener("click", () => { // instrucciones de que hacer al dar click al boton validar
  const numTarjeta = document.getElementById("numTarjeta");
  const isValid = validator.isValid(numTarjeta.value);
  const maskify = validator.maskify(numTarjeta.value);

  // ALERTAS
  if (isValid === true) {
    document.write("La tarjeta de crédito " + maskify + "  es válida"); 
  } else {
    document.write("La tarjeta de crédito " + maskify + " no es válida");
  }

});

console.log(validator);