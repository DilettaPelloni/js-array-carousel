//vado a prendere la slide box
const slideBox = document.getElementById('slide-box');

//creo un array con i percorsi delle immagini
const imgList = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

//con un ciclo creo tante slide all'interno di slide box quante sono le immagini
for (let i = 0; i < imgList.length; i++) {

    slideBox.innerHTML += `<div class="slide">
                             <img src="${imgList[i]}">
                           </div>`;

}

//do alla prima slide la classe current, che la rende visibile
document.querySelector('#slide-box .slide').classList.add('current');

//creo la variabile current che servirà ad inidcare la slide corrente e quindi visibile
let current = 0;

//creo un array con le slide
const slideList = document.getElementsByClassName('slide');
console.log(slideList);

//prendo i bottoni
const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');

//quando clicco sul bottone di destra:
buttonRight.addEventListener ('click',
	function() {
        
        // tolgo la classe current alla slide corrente
        slideList[current].classList.remove('current');

        //incremento di 1 la variabile current
        current++;

        //assegno la classe current alla slide successiva
        slideList[current].classList.add('current');

        //rendo visibile il bottone di sinistra togliendo la classe hidden
        buttonLeft.classList.remove('hidden');

        //se sono all'ultima slide:
        if (current == slideList.length - 1) {

            //faccio sparire il bottone di destra
            buttonRight.classList.add('hidden');

        }
	}
)

//quando clicco sul bottone di sinistra:
buttonLeft.addEventListener ('click',
	function() {
        
        // tolgo la classe current alla slide corrente
        slideList[current].classList.remove('current');

        //decremento di 1 la variabile current
        current--;

        //assegno la classe current alla slide precedente
        slideList[current].classList.add('current');

        //rendo visibile il bottone di destra togliendo la classe hidden
        buttonRight.classList.remove('hidden');

        //se sono alla prima slide:
        if (current == 0) {

            //faccio sparire il bottone di sinistra
            buttonLeft.classList.add('hidden');

        }
	}
)





