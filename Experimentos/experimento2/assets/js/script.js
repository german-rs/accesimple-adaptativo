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
    tamaniosDeFuentes.push({ elemento: elemento.tagName, tamanioDeFuente: tamanioDeFuente });
});

console.log(tamaniosDeFuentes);

let etiquetas = [];
let tamaniosOriginales = [];

for (let i = 0; i < tamaniosDeFuentes.length; i++) {
    const item = tamaniosDeFuentes[i];
    console.log(`Elemento: ${item.elemento}, Tamaño de Fuente: ${item.tamanioDeFuente}`);
    etiquetas[i] = item.elemento;
    tamaniosOriginales[i] = parseInt(item.tamanioDeFuente);
}

//Revisando elementos extraidos.

for (const etiqueta of etiquetas) {
    console.log(`Etiquetas: ${etiqueta}`);
}

for (const tamanio of tamaniosOriginales) {
    console.log(`Tamaño: ${tamanio}`);
}


//Funcionalidad de los botones.

const btnDisminuir = document.querySelector('.btn__disminuir');
const btnRegular = document.querySelector('.btn__regular');
const btnAumentar = document.querySelector('.btn__aumentar');



//Pendiente. Falta que reconozca tamaños originales.
btnRegular.addEventListener('click', () => {

    etiquetas.forEach(etiqueta => {

        let elementos = document.getElementsByTagName(etiqueta);

        elementos = Array.from(elementos);

        for (let i = 0; i < elementos.length; i++) {

            let tamanioActual = parseInt(window.getComputedStyle(elementos[i]).fontSize);
            console.log('tamaño actual: ' + tamanioActual);
            console.log('tamaño original:' + tamaniosOriginales[i]);

            if (tamanioActual[i] > tamaniosOriginales[i]) {
                elementos[i].style.fontSize = tamaniosOriginales[i] + 'px';
            } else {
                console.log('El texto tiene su tamaño original');
            }

        }

    })
});



// const texto = document.querySelector('.section__text');
// let tamanioOriginal = window.getComputedStyle(texto).fontSize;
// let tamanioMaximo = (parseInt(tamanioOriginal) * 2);

// btnRegular.addEventListener('click', () => {

//     let tamanioActual = parseInt(window.getComputedStyle(texto).fontSize);
//     let tamanioOriginalNum = parseInt(tamanioOriginal);

//     console.log(`tamaño original (btnRegular): ${tamanioOriginalNum}`);
//     console.log(`tamaño actual (btnRegular): ${tamanioActual}`);

//     if(tamanioActual > tamanioOriginalNum){
//         texto.style.fontSize = tamanioOriginalNum + 'px';
//     }else{
//         console.log(`El texto tiene su tamaño original`);
//     }
// });


//Pendiente. falta asignar un valor máximo de crecimiento.
btnAumentar.addEventListener('click', () => {

    etiquetas.forEach(etiqueta => {

        let elementos = document.getElementsByTagName(etiqueta);

        elementos = Array.from(elementos);

        elementos.forEach(elemento => {

            let tamanioOriginal = window.getComputedStyle(elemento).fontSize;
            let tamanioNumerico = parseInt(tamanioOriginal);
            let nuevoTamanio = (tamanioNumerico + 2) + 'px';
            elemento.style.fontSize = nuevoTamanio;
        });

    });
});


// btnAumentar.addEventListener('click',  () => {

//     let tamanioActual = window.getComputedStyle(texto).fontSize;
//     let tamanioNumerico = parseInt(tamanioActual);
//     console.log(`tamaño máximo: ${tamanioMaximo}`);

//     if (tamanioNumerico < tamanioMaximo) {
//         // let nuevoTamanio = (tamanioNumerico * 1.25) + 'px';
//         let nuevoTamanio = (tamanioNumerico + 4) + 'px';
//         texto.style.fontSize = nuevoTamanio;

//         console.log('Nuevo tamaño:', texto.style.fontSize);
//         console.log('Tamaño anterior:', tamanioActual);
//     } else {
//         console.log('El tamaño máximo del 200% ha sido alcanzado.');
//     }   
// });




// btnDisminuir.addEventListener('click', () => {

//     let tamanioActual = parseInt(window.getComputedStyle(texto).fontSize);
//     let tamanioOriginalNum = parseInt(tamanioOriginal);

//     console.log(`tamaño original (btnDisminuir): ${tamanioOriginalNum}`);
//     console.log(`tamaño actual (btnDisminuir): ${tamanioActual}`);    

//     if(tamanioActual > tamanioOriginalNum){
//         let nuevoTamanio = (tamanioActual - 4) + 'px';
//         console.log(`nuevo tamaño (btnDisminuir): ${nuevoTamanio}`); 
//         texto.style.fontSize = nuevoTamanio;
//     }else{
//         console.log(`El texto tiene su tamaño original`);
//     }

// });