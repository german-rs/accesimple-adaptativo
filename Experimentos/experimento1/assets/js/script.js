/*
    Experimento 1.
    - Menú de accesibilidad.
        - Ejecutar por medio de teclado con Ctrl + a.
*/

// Selecciona el elemento del DOM con la clase '.componente__accesibilidad'
let componente = document.querySelector('.componente__accesibilidad');

// Selecciona el elemento del DOM con la clase '.menu__accesibilidad', que será el menú de accesibilidad
let menuAccesibilidad = document.querySelector('.menu__accesibilidad');

// Selecciona el elemento del DOM con la clase '.cerrar__menu', que es el botón para cerrar el menú
let cerrarMenu = document.querySelector('.cerrar__menu');

// Añade un evento 'click' al elemento 'componente'
// Al hacer clic en el componente de accesibilidad, el menú de accesibilidad se mostrará (display: 'block')
componente.addEventListener('click', function () {
    menuAccesibilidad.style.display = 'block';
});

// Añade un evento 'click' al botón de cerrar menú
// Al hacer clic en el botón de cerrar, el menú de accesibilidad se oculta (display: 'none')
cerrarMenu.addEventListener('click', function () {
    menuAccesibilidad.style.display = 'none';
});

// Añade un evento de teclado (keydown) a todo el documento
// Detecta si se presionan las teclas Ctrl + 'a' simultáneamente
document.addEventListener('keydown', function (event) {

    // Verifica si se presionó Ctrl y la tecla 'a'
    if (event.ctrlKey && event.key == 'a') {

        // Prevenir el comportamiento por defecto (como seleccionar todo el texto en la página)
        event.preventDefault();

        // Si el menú de accesibilidad está oculto o su display no está definido, lo muestra
        if (menuAccesibilidad.style.display === 'none'
            || menuAccesibilidad.style.display === '') {

            menuAccesibilidad.style.display = 'block';
        } else {
            // Si el menú de accesibilidad ya está visible, lo oculta
            menuAccesibilidad.style.display = 'none';
        }
    }
});