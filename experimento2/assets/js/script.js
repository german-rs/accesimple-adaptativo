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


btnRegular.addEventListener('click', function(){

    let tamanioActual = parseInt(window.getComputedStyle(texto).fontSize);
    let tamanioOriginalNum = parseInt(tamanioOriginal);

    console.log(`tamaño original (btnRegular): ${tamanioOriginalNum}`);
    console.log(`tamaño actual (btnRegular): ${tamanioActual}`);
    
    if(tamanioActual > tamanioOriginalNum){
        texto.style.fontSize = tamanioOriginalNum + 'px';
    }else{
        console.log(`El texto tiene su tamaño original`);
    }
});

btnDisminuir.addEventListener('click', function(){

    let tamanioActual = parseInt(window.getComputedStyle(texto).fontSize);
    let tamanioOriginalNum = parseInt(tamanioOriginal);

    console.log(`tamaño original (btnDisminuir): ${tamanioOriginalNum}`);
    console.log(`tamaño actual (btnDisminuir): ${tamanioActual}`);    

    if(tamanioActual > tamanioOriginalNum){
        let nuevoTamanio = (tamanioActual - 4) + 'px';
        console.log(`nuevo tamaño (btnDisminuir): ${nuevoTamanio}`); 
        texto.style.fontSize = nuevoTamanio;
    }else{
        console.log(`El texto tiene su tamaño original`);
    }

});