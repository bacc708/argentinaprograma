const readlineSync = require("readline-sync");
const dia = readlineSync.question("Ingrese un número correspondiente al día (1-7): ");

if (dia === 1) {
    console.log("Hoy es lunes");
  } else if (dia === 2) {
    console.log("Hoy es martes");
  } else if (dia === 3) {
    console.log("Hoy es miércoles");
  } else if (dia === 4) {
    console.log("Hoy es jueves");
  } else if (dia === 5) {
    console.log("Hoy es viernes");
  } else if (dia === 6) {
    console.log("Hoy es sábado");
  } else if (dia === 7) {
    console.log("Hoy es domingo");
  } else {
    console.log("Número inválido");
  }
