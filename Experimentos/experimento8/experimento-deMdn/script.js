/* Este código es de la siguiente repositorio 
 
 https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis 

*/

// Obtiene la instancia de la síntesis de voz del objeto `window`.
const synth = window.speechSynthesis;

// Selecciona el formulario, el campo de texto para ingresar texto y el elemento select para seleccionar la voz.
const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("select");

// Selecciona los elementos para el ajuste de tono y velocidad.
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

// Declara un array para almacenar las voces disponibles.
let voices = [];

// Función para llenar la lista de voces disponibles en el select.
function populateVoiceList() {
  // Obtiene las voces disponibles y las ordena alfabéticamente por nombre.
  voices = synth.getVoices().sort(function (a, b) {
    const aname = a.name.toUpperCase();
    const bname = b.name.toUpperCase();

    if (aname < bname) {
      return -1; // a es menor que b
    } else if (aname == bname) {
      return 0; // a es igual a b
    } else {
      return +1; // a es mayor que b
    }
  });

  // Guarda el índice de la voz seleccionada, o establece en 0 si no hay ninguna seleccionada.
  const selectedIndex =
    voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;

  // Limpia el contenido previo del select de voces.
  voiceSelect.innerHTML = "";

  // Itera sobre la lista de voces y crea una opción para cada una en el select.
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option"); // Crea un nuevo elemento option.
    // Establece el texto de la opción con el nombre y el idioma de la voz.
    option.textContent = `${voices[i].name} (${voices[i].lang})`; 

    // Si la voz es la predeterminada, agrega "(DEFAULT)" al texto.
    if (voices[i].default) {
      option.textContent += " -- DEFAULT";
    }

    // Establece atributos personalizados para la opción, que se usarán al seleccionar la voz.
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option); // Añade la opción al select.
  }

  // Restaura la opción seleccionada previamente.
  voiceSelect.selectedIndex = selectedIndex;
}

// Llama a la función para llenar la lista de voces al cargar la página.
populateVoiceList();

// Verifica si la propiedad `onvoiceschanged` está definida y, de ser así, la configura para que llame a `populateVoiceList` cuando cambien las voces disponibles.
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

// Función que se encarga de hablar el texto ingresado.
function speak() {
  // Comprueba si ya se está hablando; si es así, muestra un error en la consola y no hace nada.
  if (synth.speaking) {
    console.error("speechSynthesis.speaking");
    return;
  }

  // Comprueba si el campo de texto no está vacío.
  if (inputTxt.value !== "") {
    
    // Crea una nueva instancia de SpeechSynthesisUtterance con el texto ingresado.
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value); 

    // Establece una función que se ejecutará al finalizar la síntesis de voz.
    utterThis.onend = function (event) {
      console.log("SpeechSynthesisUtterance.onend");
    };

    // Establece una función que se ejecutará si hay un error durante la síntesis.
    utterThis.onerror = function (event) {
      console.error("SpeechSynthesisUtterance.onerror");
    };

    // Obtiene la voz seleccionada desde el select.
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

    // Itera sobre la lista de voces y asigna la voz seleccionada al objeto `utterThis`.
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i]; // Asigna la voz encontrada.
        break; // Sale del bucle una vez que se ha asignado la voz.
      }
    }

    // Establece el tono y la velocidad según los valores seleccionados por el usuario.
    utterThis.pitch = pitch.value;
    utterThis.rate = rate.value;

    // Inicia la síntesis de voz.
    synth.speak(utterThis);
  }
}

// Configura el evento de envío del formulario para evitar el comportamiento predeterminado y llamar a la función `speak`.
inputForm.onsubmit = function (event) {
  event.preventDefault(); // Previene el envío del formulario.

  speak(); // Llama a la función que habla el texto ingresado.

  inputTxt.blur(); // Quita el foco del campo de texto después de hablar.
};

// Configura el evento para mostrar el valor actual del tono en el elemento de visualización.
pitch.onchange = function () {
  pitchValue.textContent = pitch.value; // Actualiza el valor mostrado al usuario.
};

// Configura el evento para mostrar el valor actual de la velocidad en el elemento de visualización.
rate.onchange = function () {
  rateValue.textContent = rate.value; // Actualiza el valor mostrado al usuario.
};

// Configura el evento de cambio del select de voces para hablar automáticamente al seleccionar una nueva voz.
voiceSelect.onchange = function () {
  speak(); // Llama a la función que habla el texto ingresado con la nueva voz seleccionada.
};
