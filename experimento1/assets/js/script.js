
let componente = document.querySelector('.componente__accesibilidad');
let menuAccesibilidad = document.querySelector('.menu__accesibilidad');
let cerrarMenu = document.querySelector('.cerrar__menu');

componente.addEventListener('click', function () {
    menuAccesibilidad.style.display = 'block';
});

cerrarMenu.addEventListener('click', function () {
    menuAccesibilidad.style.display = 'none';
});

document.addEventListener('keydown', function (event) {

    if (event.ctrlKey && event.key == 'a') {
        event.preventDefault();

        if (menuAccesibilidad.style.display === 'none'
            || menuAccesibilidad.style.display === '') {

            menuAccesibilidad.style.display = 'block';
        } else {
            menuAccesibilidad.style.display = 'none';
        }
    }
});