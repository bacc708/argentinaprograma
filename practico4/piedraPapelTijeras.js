// Jugada de la compu
function obtenerJugadaComputadora() {
    const opciones = ["piedra", "papel", "tijeras"];
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
}
  
// Jugada del usuario
function obtenerJugadaUsuario() {
    const eleccion = prompt("Elige piedra, papel o tijeras:");
    return eleccion.toLowerCase();
}
  
// Determinar el ganador
function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (jugadaComputadora === jugadaUsuario) {
      return "Empate";
    } else if (
      (jugadaComputadora === "piedra" && jugadaUsuario === "tijeras") ||
      (jugadaComputadora === "tijeras" && jugadaUsuario === "papel") ||
      (jugadaComputadora === "papel" && jugadaUsuario === "piedra")
    ) {
      return "Gana la computadora";
    } else {
      return "Gana el usuario";
    }
}
  
// Llamar a las funciones 
const jugadaComputadora = obtenerJugadaComputadora();
const jugadaUsuario = obtenerJugadaUsuario();
const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);
  
// Imprimir el resultado por pantalla
console.log("La computadora eligió: " + jugadaComputadora);
console.log("El usuario eligió: " + jugadaUsuario);
console.log("El resultado fue: " + resultado);
  