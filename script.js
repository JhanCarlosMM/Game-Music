var instruments = [
    { name: "Guitarra", description: "Instrumento de cuerda con forma de ocho, usado para acompañar canciones." },
    { name: "Piano", description: "Instrumento de teclas con cuerdas internas que se golpean para producir sonido." },
    { name: "Violín", description: "Instrumento de cuerda frotada que se toca con un arco." },
    { name: "Flauta", description: "Instrumento de viento hecho de madera o metal, que produce sonido al soplar." }
];
// Acceso a los elementos del DOM
var descriptionElement = document.getElementById("description");
var optionsElement = document.getElementById("options");
var resultElement = document.getElementById("result");
var resultMessageElement = document.getElementById("resultMessage");
var restartButton = document.getElementById("restart");
if (!descriptionElement ||
    !optionsElement ||
    !resultElement ||
    !resultMessageElement ||
    !restartButton) {
    throw new Error("Faltan elementos en el DOM. Verifica los IDs en el HTML.");
}
var currentInstrument;
function startGame() {
    resultElement.classList.add("hidden");
    optionsElement.innerHTML = "";
    // Escoger un instrumento aleatorio
    currentInstrument = instruments[Math.floor(Math.random() * instruments.length)];
    descriptionElement.textContent = currentInstrument.description;
    // Generar botones de opciones
    instruments.forEach(function (instrument) {
        var button = document.createElement("button");
        button.textContent = instrument.name;
        button.addEventListener("click", function () { return checkAnswer(instrument.name); });
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
