/*
    Experimento 3.
    - Modo claro y oscuro.
    - Escala de grises.
*/

/**
 *      Modo claro y oscuro.
 */

// Espera a que el contenido del DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona el elemento con el ID 'modeToggle' (posiblemente un interruptor de modo oscuro/claro)
    const modeToggle = document.getElementById('modeToggle');
    
    // Referencia al elemento <body> del documento
    const body = document.body;

    // Verifica si hay un modo guardado previamente en el localStorage
    // 'darkMode' es el nombre clave para verificar si el modo oscuro está habilitado
    const savedMode = localStorage.getItem('darkMode');
    
    // Si el valor de 'darkMode' en localStorage es 'enabled', aplica el modo oscuro
    if (savedMode === 'enabled') {
      
      // Añade la clase 'dark-mode' al <body> para activar el modo oscuro  
      body.classList.add('dark-mode');

      // Marca el interruptor como activado (checked = true)  
      modeToggle.checked = true;
    }

    // Agrega un evento 'change' al interruptor (modeToggle) que detecta cuando su estado cambia
    modeToggle.addEventListener('change', () => {

       // Si el interruptor está activado (modo oscuro), añade la clase 'dark-mode'  
      if (modeToggle.checked) {

            body.classList.add('dark-mode');
            // Guarda el estado 'enabled' en localStorage para recordar que el modo oscuro está activado
            localStorage.setItem('darkMode', 'enabled');
        } else {
          // Si el interruptor está desactivado, quita la clase 'dark-mode' (vuelve al modo claro)
          body.classList.remove('dark-mode');
          
          // Guarda el estado 'disabled' en localStorage para recordar que el modo oscuro está desactivado
          localStorage.setItem('darkMode', 'disabled');
        }
    });
});



/**
 *      Escala de grises.
 */

// Selecciona el elemento con el ID 'gray-scale-checkbox', que es la casilla de verificación para activar/desactivar el filtro de escala de grises
const casillaEscalaDeGris = document.getElementById('gray-scale-checkbox');

// Referencia al elemento <body> del documento
const body = document.body;

// Función que alterna el filtro de escala de grises en el sitio web
function alternarEscalaDeGris() {
  
  // Si la casilla de verificación está marcada (activada), añade la clase 'gray-scale' al <body>
  if (casillaEscalaDeGris.checked) {
    body.classList.add('gray-scale');
  } else {
    // Si la casilla de verificación está desmarcada (desactivada), quita la clase 'gray-scale' del <body>
    body.classList.remove('gray-scale');
  }
}

// Escucha el evento 'change' en la casilla de verificación (se activa cada vez que su estado cambia)
// Al cambiar el estado de la casilla de verificación, se ejecuta la función toggleGrayScale para alternar el filtro de escala de grises
casillaEscalaDeGris.addEventListener('change', alternarEscalaDeGris);