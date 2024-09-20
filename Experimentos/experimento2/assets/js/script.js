/*
    Experimento 2.
    - Cambiar el tamaño de los texto.
    - Aumentar y disminuir el tamaño de la fuente por medio de botones.
    - Extraer todos los tamaños de fuentes junto a los elementos de texto de la página.
    - Ejemplo extraído de https://www.senadis.gob.cl/ 
*/


// Seleccionamos todos los elementos de texto relevantes en el documento.
const elementosDeTexto = document.querySelectorAll('a, p, span, h1, h2, h3, h4, h5, h6, li');

// Array para almacenar los elementos y sus tamaños originales.
const tamaniosOriginales = [];

// Recorremos cada elemento de texto para guardar su tamaño de fuente original.
elementosDeTexto.forEach(elemento => {
    // Obtenemos el tamaño de fuente actual del elemento.
    const tamanioDeFuente = window.getComputedStyle(elemento).fontSize;
    // Almacenamos el elemento y su tamaño de fuente original en el array.
    tamaniosOriginales.push({ elemento: elemento, tamanioDeFuente: parseInt(tamanioDeFuente) });
});

// Imprimimos el array con los tamaños originales para verificar.
console.log(tamaniosOriginales);

// Seleccionamos los botones que usaremos para cambiar el tamaño del texto.
const btnDisminuir = document.querySelector('.btn__disminuir');
const btnRestaurar = document.querySelector('.btn__restaurar');
const btnAumentar = document.querySelector('.btn__aumentar');

// Agregamos un evento al botón "Restaurar" para volver a los tamaños originales.
btnRestaurar.addEventListener('click', () => {
    tamaniosOriginales.forEach(item => {
        // Extraemos el elemento y su tamaño original del array.
        let elemento = item.elemento;
        let tamanioOriginal = item.tamanioDeFuente;

        // Restauramos el tamaño original del elemento.
        elemento.style.fontSize = tamanioOriginal + 'px';
        // Imprimimos un mensaje para confirmar la restauración del tamaño.
        console.log(`Restaurando ${elemento.tagName} a su tamaño original: ${tamanioOriginal}px`);
    });
});

// Agregamos un evento al botón "Aumentar" para incrementar el tamaño del texto.
btnAumentar.addEventListener('click', () => {
    tamaniosOriginales.forEach(item => {
        // Extraemos el elemento y su tamaño original del array.
        let elemento = item.elemento;
        let tamanioOriginal = item.tamanioDeFuente;  // Tamaño original del elemento.
        // Obtenemos el tamaño actual del elemento
        let tamanioActual = parseInt(window.getComputedStyle(elemento).fontSize);

        // Calculamos el nuevo tamaño aumentando 2px.
        let nuevoTamanio = tamanioActual + 2;
        // Calculamos el tamaño máximo permitido (200% del tamaño original).
        let tamanioMaximo = tamanioOriginal * 2;

        // Verificamos si el nuevo tamaño no supera el límite del 200%.
        if (nuevoTamanio <= tamanioMaximo) {
            // Si está dentro del límite, aplicamos el nuevo tamaño.
            elemento.style.fontSize = nuevoTamanio + 'px';
            // Imprimimos un mensaje para confirmar el aumento del tamaño.
            console.log(`Aumentando ${elemento.tagName} a: ${nuevoTamanio}px (máximo permitido: ${tamanioMaximo}px)`);
        } else {
            // Si supera el límite, imprimimos un mensaje indicando que se alcanzó el máximo.
            console.log(`El ${elemento.tagName} ya ha alcanzado el máximo de 200% (${tamanioMaximo}px)`);
        }
    });
});

// Agregamos un evento al botón "Disminuir" para reducir el tamaño del texto.
btnDisminuir.addEventListener('click', () => {
    // Recorremos cada elemento guardado en el array tamaniosOriginales.
    tamaniosOriginales.forEach(item => {
        // Extraemos el elemento y su tamaño original del array.
        let elemento = item.elemento;
        let tamanioOriginal = item.tamanioDeFuente;  // Tamaño original del elemento.
        // Obtenemos el tamaño actual del elemento.
        let tamanioActual = parseInt(window.getComputedStyle(elemento).fontSize);

        // Calculamos el nuevo tamaño disminuyendo 2px.
        let nuevoTamanio = tamanioActual - 2;

        // Verificamos si el nuevo tamaño no es menor que el tamaño original.
        if (nuevoTamanio >= tamanioOriginal) {
            // Si el nuevo tamaño es válido (no menor al original), aplicamos el nuevo tamaño.
            elemento.style.fontSize = nuevoTamanio + 'px';
            // Imprimimos un mensaje para confirmar la disminución del tamaño.
            console.log(`Disminuyendo ${elemento.tagName} a: ${nuevoTamanio}px (tamaño original: ${tamanioOriginal}px)`);
        } else {
            // Si el nuevo tamaño es menor al tamaño original, mantenemos el tamaño original.
            elemento.style.fontSize = tamanioOriginal + 'px';
            // Imprimimos un mensaje indicando que se ha alcanzado el tamaño original.
            console.log(`El ${elemento.tagName} ya ha alcanzado el tamaño original (${tamanioOriginal}px)`);
        }
    });
});
