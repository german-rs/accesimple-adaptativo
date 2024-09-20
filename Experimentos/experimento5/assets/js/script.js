// Obtener el botón y el body
const alternarFuente = document.getElementById('alternarFuente');
const body = document.body;

// Escuchar el clic en el botón para alternar la fuente
alternarFuente.addEventListener('click', () => {
    // Verificar la fuente actual y cambiarla
    if (body.style.fontFamily === '"OpenDyslexic", sans-serif') {
        body.style.fontFamily = '"Poppins", sans-serif';
    } else {
        body.style.fontFamily = '"OpenDyslexic", sans-serif';
    }
});