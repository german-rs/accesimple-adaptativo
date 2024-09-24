

const btnAccesibilidad = document.querySelector('.btn__accesibilidad');
const enlaces = document.querySelectorAll('a');
let estaDestacado = false; 

btnAccesibilidad.addEventListener('click', () => {

    estaDestacado = !estaDestacado; // Cambia el estado al hacer clic

    enlaces.forEach( (enlace) => {

        if(estaDestacado){
            enlace.style.backgroundColor = '#000000';
            enlace.style.color = 'yellow';
            enlace.style.textDecoration = 'underline';
        }else{
            enlace.style.backgroundColor = ''; // Restablece el color de fondo
            enlace.style.color = ''; // Restablece el color del texto
            enlace.style.textDecoration = 'none';
        }

      
    });

});





