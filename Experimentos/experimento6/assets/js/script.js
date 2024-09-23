/* 
  Experimento 6.
    - Alternar tamaño del cursor.
*/

const button = document.getElementById('toggleCursorBtn');
let esElCursorGrande = false;

// Evento para alternar el cursor grande al hacer clic en el botón
button.addEventListener('click', () => {
  if (esElCursorGrande) {
    // Remueve el cursor personalizado
    document.body.classList.remove('large-cursor'); 

    // Cambia el texto a "AGRANDAR CURSOR"
    button.textContent = 'AGRANDAR CURSOR'; 
  } else {
    // Aplica el cursor personalizado
    document.body.classList.add('large-cursor'); 

    // Cambia el texto a "REDUCIR CURSOR"
    button.textContent = 'REDUCIR CURSOR';
  }
  // Alterna el estado del cursor
  esElCursorGrande = !esElCursorGrande; 
});