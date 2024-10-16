/* 
    Experimento 8.
    - Lectura de elementos HTML - Síntesis de Voz.
    - Tanto UserWay como Accesibility utilizan la lectura de pantalla
    o lectura de página.
    - Para este experimento se utilizó la API de JavaScript Web Speech.
    - Enlace importante:
        - https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API 
        - https://developer.mozilla.org/es/docs/Web/API/Web_Speech_API
*/

'use strict';

//--------------- Ejemplo 1 ----------------

const btnActivarLectura = document.querySelector('.btnActivarLectura');
const textoALeer = document.querySelector('.texto').innerText;

btnActivarLectura.addEventListener('click', () =>{

    //Se crea una instancia de SpeechSynthesisUtterance.
    const pronunciacion = new SpeechSynthesisUtterance(textoALeer);
    
    //Configuraciones de voz.
    pronunciacion.lang = 'es-ES'; //Idioma español.
    pronunciacion.pitch = 1; //Ajusta el tono de voz.
    pronunciacion.rate = 1; //Ajusta la velocidad de la voz.

    window.speechSynthesis.speak(pronunciacion);
    
});

//--------------- Ejemplo 2 ----------------

// Seleccionamos el checkbox y el párrafo que queremos leer.
const checkbox = document.getElementById('activarLectura');
const elementoALeer = document.querySelector('.ejemplo2__texto').innerText;

// Función para leer el texto.
function leerTexto() {
    // Verificamos si el checkbox está seleccionado.
    if (checkbox.checked) {
        // Creamos una instancia de SpeechSynthesisUtterance con el texto a leer.
        const pronunciacion = new SpeechSynthesisUtterance(elementoALeer);
        
        // Configuraciones de voz.
        pronunciacion.lang = 'es-ES'; // Idioma español.
        pronunciacion.pitch = 1; // Tono de voz.
        pronunciacion.rate = 1; // Velocidad de voz.

        // Llamamos a la síntesis de voz para leer el texto.
        window.speechSynthesis.speak(pronunciacion);
    }
}

// Agregamos event listeners para que lea el texto cuando se hace clic o se enfoca el checkbox.
checkbox.addEventListener('click', leerTexto);
checkbox.addEventListener('focus', leerTexto);



//--------------- Ejemplo 3 ----------------

// Seleccionamos el checkbox que activa la lectura y todos los párrafos.
const casilla = document.getElementById('activarLecturaE3');
const textos = document.querySelectorAll('.textoE3');

let isReading = false; // Variable de control para evitar lecturas duplicadas

// Función para leer el texto seleccionado.
function leerTexto(elemento) {
    if (isReading) return; // Si ya está leyendo, no hacemos nada
    isReading = true; // Marcamos que se está leyendo

    // Creamos una instancia de SpeechSynthesisUtterance con el texto del elemento.
    const pronunciacion = new SpeechSynthesisUtterance(elemento.innerText);
    
    // Configuraciones de voz.
    pronunciacion.lang = 'es-ES'; // Idioma español.
    pronunciacion.pitch = 1; // Tono de voz.
    pronunciacion.rate = 1; // Velocidad de voz.

    // Evento que se activa al terminar de leer.
    pronunciacion.onend = () => {
        isReading = false; // Reiniciamos la variable al finalizar la lectura
    };

    // Llamamos a la síntesis de voz para leer el texto.
    window.speechSynthesis.speak(pronunciacion);
}

// Agregamos un event listener al checkbox para activar/desactivar la lectura.
casilla.addEventListener('change', () => {
    if (!casilla.checked) {
        // Si el checkbox se desactiva, detenemos la síntesis de voz.
        window.speechSynthesis.cancel();
    }
});

// Agregamos un event listener a cada párrafo.
textos.forEach(texto => {
    texto.addEventListener('click', (event) => {
        // Verificamos si el checkbox está activado antes de leer el texto.
        if (casilla.checked) {
            leerTexto(event.currentTarget);
        }
    });

    texto.addEventListener('focus', (event) => {
        // Verificamos si el checkbox está activado antes de leer el texto.
        if (casilla.checked) {
            leerTexto(event.currentTarget);
        }
    });
});
