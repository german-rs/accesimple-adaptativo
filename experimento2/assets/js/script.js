/*
    Experimento 2.
    - Cambiar el tamaño de los texto.
    - Aumentar y disminuir el tamaño de la fuente por medio de botones.
    - Extraer todos los tamaños de fuentes junto a los elementos de texto de la página.
    - Ejemplo extraído de https://www.senadis.gob.cl/ 
*/

const elementosDeTexto = document.querySelectorAll('a, p, span, h1, h2, h3, h4, h5, h6, li');
const tamaniosDeFuentes = [];

elementosDeTexto.forEach(elemento => {

    const tamanioDeFuente = window.getComputedStyle(elemento).fontSize;
    tamaniosDeFuentes.push({elemento: elemento.tagName, tamanioDeFuente: tamanioDeFuente});
});

console.log(tamaniosDeFuentes);

for (let i = 0; i < tamaniosDeFuentes.length; i++) {
    const item = tamaniosDeFuentes[i];
    console.log(`Elemento: ${item.elemento}, Tamaño de Fuente: ${item.tamanioDeFuente}`);
}
  
for (const item of tamaniosDeFuentes) {
    console.log(`Elemento: ${item.elemento}, Tamaño de Fuente: ${item.tamanioDeFuente}`);
}

//Funcionalidad de los botones.

const btnDisminuir = document.querySelector('.btn__disminuir');
const btnRegular = document.querySelector('.btn__regular');
const btnAumentar = document.querySelector('.btn__aumentar');
const texto = document.querySelector('.section__text');

let tamanioOriginal = window.getComputedStyle(texto).fontSize;
let tamanioMaximo = (parseInt(tamanioOriginal) * 2);

btnAumentar.addEventListener('click',  () => {

    let tamanioActual = window.getComputedStyle(texto).fontSize;
    let tamanioNumerico = parseInt(tamanioActual);
    console.log(`tamaño máximo: ${tamanioMaximo}`);

    if (tamanioNumerico < tamanioMaximo) {
        // let nuevoTamanio = (tamanioNumerico * 1.25) + 'px';
        let nuevoTamanio = (tamanioNumerico + 4) + 'px';
        texto.style.fontSize = nuevoTamanio;

        console.log('Nuevo tamaño:', texto.style.fontSize);
        console.log('Tamaño anterior:', tamanioActual);
    } else {
        console.log('El tamaño máximo del 200% ha sido alcanzado.');
    }   
});


btnRegular.addEventListener('click', () => {

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

btnDisminuir.addEventListener('click', () => {

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