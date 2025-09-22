// Seleccionamos los botones de juego por su ID
const piedraBtn = document.getElementById('piedra-btn');
const papelBtn = document.getElementById('papel-btn');
const tijerasBtn = document.getElementById('tijeras-btn');

// Seleccionamos los elementos donde mostraremos la información
const textoResultado = document.getElementById('texto-resultado');
const jugadorPuntajeSpan = document.getElementById('jugador-puntaje');
const computadoraPuntajeSpan = document.getElementById('computadora-puntaje');

// Arreglo de opciones
const opciones = ['Piedra', 'Papel', 'Tijeras'];

// Variables de puntajes
let jugadorPuntaje = 0;
let computadoraPuntaje = 0;

function getComputerChoice() {
    // Math.random() genera un número aleatorio entre 0 (incluido) y 1 (excluido)
    const randomIndex = Math.floor(Math.random() * opciones.length);

    return opciones[randomIndex];
}

// Agregamos un "escuchador de eventos" a los botones
piedraBtn.addEventListener('click', () => {
    // Definimos la elección del jugador
    const playerChoice = 'Piedra';
    // Llamamos a la función para que la computadora elija
    const computerChoice = getComputerChoice();
    // Llamamos a la función para comparar las jugadas
    playRound(playerChoice, computerChoice);
});

papelBtn.addEventListener('click', () => {
    const playerChoice = 'Papel';
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

tijerasBtn.addEventListener('click', () => {
    const playerChoice = 'Tijeras';
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
});

function playRound(playerChoice, computerChoice) {
    // Lógica del juego
    if (playerChoice === computerChoice) {
        textoResultado.textContent = `¡Empate! Ambos eligieron ${playerChoice}`;
    } else if (
        (playerChoice === 'Piedra' && computerChoice === 'Tijeras') ||
        (playerChoice === 'Papel' && computerChoice === 'Piedra') ||
        (playerChoice === 'Tijeras' && computerChoice === 'Papel')
    ) {
        // Jugador gana, aumenta su puntaje y actualiza el texto
        jugadorPuntaje++;
        jugadorPuntajeSpan.textContent = jugadorPuntaje;
        textoResultado.textContent = `¡Ganaste! ${playerChoice} le gana a ${computerChoice}`;
    } else {
        // Computadora gana, aumenta su puntaje y actualiza el texto
        computadoraPuntaje++;
        computadoraPuntajeSpan.textContent = computadoraPuntaje;
        textoResultado.textContent = `¡Perdiste! ${computerChoice} le gana a ${playerChoice}`;
    }

    const reiniciarBtn = document.getElementById('reiniciar-btn');

// Función que reinicia el juego
function reiniciarJuego() {
    // Pone los puntajes a cero
    jugadorPuntaje = 0;
    computadoraPuntaje = 0;

    // Actualiza el texto de los puntajes en la página
    jugadorPuntajeSpan.textContent = jugadorPuntaje;
    computadoraPuntajeSpan.textContent = computadoraPuntaje;

    // Limpia el texto del resultado
    textoResultado.textContent = '';
}

reiniciarBtn.addEventListener('click', reiniciarJuego);

}