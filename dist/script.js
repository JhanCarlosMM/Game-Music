"use strict";
const instruments = [
    { name: "Guitarra", description: "Instrumento de cuerda con forma de ocho, usado para acompañar canciones." },
    { name: "Piano", description: "Instrumento de teclas con cuerdas internas que se golpean para producir sonido." },
    { name: "Violín", description: "Instrumento de cuerda frotada que se toca con un arco." },
    { name: "Flauta", description: "Instrumento de viento hecho de madera o metal, que produce sonido al soplar." }
];
// Acceso a los elementos del DOM
const descriptionElement = document.getElementById("description");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");
const resultMessageElement = document.getElementById("resultMessage");
const restartButton = document.getElementById("restart");
if (!descriptionElement ||
    !optionsElement ||
    !resultElement ||
    !resultMessageElement ||
    !restartButton) {
    throw new Error("Faltan elementos en el DOM. Verifica los IDs en el HTML.");
}
let currentInstrument;
function startGame() {
    resultElement.classList.add("hidden");
    optionsElement.innerHTML = "";
    // Escoger un instrumento aleatorio
    currentInstrument = instruments[Math.floor(Math.random() * instruments.length)];
    descriptionElement.textContent = currentInstrument.description;
    // Generar botones de opciones
    instruments.forEach((instrument) => {
        const button = document.createElement("button");
        button.textContent = instrument.name;
        button.addEventListener("click", () => checkAnswer(instrument.name));
        optionsElement.appendChild(button);
    });
}
function checkAnswer(selectedName) {
    if (selectedName === currentInstrument.name) {
        resultMessageElement.textContent = "¡Correcto! Ganaste 🎉";
    }
    else {
        resultMessageElement.textContent = "¡Perdiste! Era " + currentInstrument.name;
    }
    resultElement.classList.remove("hidden");
}
restartButton.addEventListener("click", startGame);
// Iniciar el juego al cargar la página
startGame();
