type Instrument = {
    name: string;
    description: string;
  };
  
  const instruments: Instrument[] = [
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
  
  if (
    !descriptionElement ||
    !optionsElement ||
    !resultElement ||
    !resultMessageElement ||
    !restartButton
  ) {
    throw new Error("Faltan elementos en el DOM. Verifica los IDs en el HTML.");
  }
  
  let currentInstrument: Instrument;
  
  function startGame() {
    (resultElement as HTMLElement).classList.add("hidden");
    (optionsElement as HTMLElement).innerHTML = "";
  
    // Escoger un instrumento aleatorio
    currentInstrument = instruments[Math.floor(Math.random() * instruments.length)];
    (descriptionElement as HTMLElement).textContent = currentInstrument.description;
  
    // Generar botones de opciones
    instruments.forEach((instrument) => {
      const button = document.createElement("button");
      button.textContent = instrument.name;
      button.addEventListener("click", () => checkAnswer(instrument.name));
      (optionsElement as HTMLElement).appendChild(button);
    });
  }
  
  function checkAnswer(selectedName: string) {
    if (selectedName === currentInstrument.name) {
      (resultMessageElement as HTMLElement).textContent = "¡Correcto! Ganaste 🎉";
    } else {
      (resultMessageElement as HTMLElement).textContent = "¡Perdiste! Era " + currentInstrument.name;
    }
    (resultElement as HTMLElement).classList.remove("hidden");
  }
  
  (restartButton as HTMLElement).addEventListener("click", startGame);
  
  // Iniciar el juego al cargar la página
  startGame();
  