/*
    Experimento 2.
    - Cambiar el tamaño de los texto.
    - Aumentar y disminuir el tamaño de la fuente por medio de botones.
    - Ejemplo extraído de https://www.senadis.gob.cl/ 
*/

let btnDisminuir = document.querySelector('.btn__disminuir');
let btnRegular = document.querySelector('.btn__regular');
let btnAumentar = document.querySelector('.btn__aumentar');

let texto = document.querySelector('.section__text');
let tamanioOriginal = window.getComputedStyle(texto).fontSize;
let tamanioMaximo = (parseInt(tamanioOriginal) * 2);

btnAumentar.addEventListener('click', function () {

    let tamanioActual = window.getComputedStyle(texto).fontSize;
    let tamanioNumerico = parseInt(tamanioActual);
    
    if (tamanioNumerico < tamanioMaximo) {
        let nuevoTamanio = (tamanioNumerico + 4) + 'px';
        texto.style.fontSize = nuevoTamanio;

        console.log('Nuevo tamaño:', texto.style.fontSize);
        console.log('Tamaño anterior:', tamanioActual);
    } else {
        console.log('El tamaño máximo del 200% ha sido alcanzado.');
    }   
});