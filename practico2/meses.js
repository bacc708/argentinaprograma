const readlineSync = require("readline-sync");

const numMes = readlineSync.question("Ingrese el número correspondiente al mes (1-12): ");

let mes;

if (numMes === 1) {
    mes = "enero";
} else if (numMes === 2) {
    mes = "febrero";
} else if (numMes === 3) {
    mes = "marzo";
} else if (numMes === 4) {
    mes = "abril";
} else if (numMes=== 5) {
    mes = "mayo";
} else if (numMes === 6) {
    mes = "junio";
} else if (numMes === 7) {
    mes = "julio";
} else if (numMes === 8) {
    mes = "agosto";
} else if (numMes === 9) {
    mes = "septiembre";
} else if (numMes === 10) {
    mes = "octubre";
} else if (numMes === 11) {
    mes = "noviembre";
} else if (numMes === 12) {
    mes = "diciembre";
} else {
  console.log("Número inválido. Debe ingresar un número del 1 al 12.");
}

let diasDelMes;

if (numMes === 2) {
    diasDelMes = 28;
} else if (numMes === 4 || numMes === 6 || numMes === 9 || numMes === 11) {
    diasDelMes = 30;
} else {
    diasDelMes = 31;
}

console.log("La cantidad de días del mes de " + mes + " es " + diasDelMes );
