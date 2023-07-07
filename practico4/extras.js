// Definir constantes para las jugadas
const JUGADA_PIEDRA = "piedra";
const JUGADA_PAPEL = "papel";
const JUGADA_TIJERAS = "tijeras";

// Jugada de la compu
function obtenerJugadaComputadora() {
  const opciones = [JUGADA_PIEDRA, JUGADA_PAPEL, JUGADA_TIJERAS];
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
    (jugadaComputadora === JUGADA_PIEDRA && jugadaUsuario === JUGADA_TIJERAS) ||
    (jugadaComputadora === JUGADA_TIJERAS && jugadaUsuario === JUGADA_PAPEL) ||
    (jugadaComputadora === JUGADA_PAPEL && jugadaUsuario === JUGADA_PIEDRA)
  ) {
    return "Gana la computadora";
  } else {
    return "Gana el usuario";
  }
}

// Partida individual
function jugarPartida() {
  const jugadaComputadora = obtenerJugadaComputadora();
  const jugadaUsuario = obtenerJugadaUsuario();
  const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

  console.log("La computadora eligió: " + jugadaComputadora);
  console.log("El usuario eligió: " + jugadaUsuario);
  console.log("El resultado fue: " + resultado);

  return resultado;
}

// "Mejor de X" partidas
function jugarMejorDe(numeroJugadas) {
  let ganadasComputadora = 0;
  let ganadasUsuario = 0;

  for (let i = 0; i < numeroJugadas; i++) {
    console.log("Jugada #" + (i + 1));
    const resultado = jugarPartida();

    if (resultado === "Gana la computadora") {
      ganadasComputadora++;
    } else if (resultado === "Gana el usuario") {
      ganadasUsuario++;
    }
  }

  if (ganadasComputadora > ganadasUsuario) {
    console.log("La computadora gana la partida.");
  } else if (ganadasUsuario > ganadasComputadora) {
    console.log("El usuario gana la partida.");
  } else {
    console.log("La partida termina en empate.");
  }
}

// Pedir al usuario la cantidad de jugadas deseadas
const numeroJugadas = parseInt(prompt("Ingrese la cantidad de jugadas deseadas:"));

// Llamar a la función para jugar "Mejor de X" partidas
jugarMejorDe(numeroJugadas);
