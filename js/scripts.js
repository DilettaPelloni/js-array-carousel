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

//prendo i bottoni
const buttonLeft = document.querySelector('.button-left');
const buttonRight = document.querySelector('.button-right');

//quando clicco sul bottone di destra:
buttonRight.addEventListener ('click',
	function() {
        
        // tolgo la classe current alla slide corrente
        slideList[current].classList.remove('current');

        // se mi trovo all'ultima slide
        if (current == slideList.length - 1) {
            //riporto current a 0
            current = 0;

        }
        else {
            //altrimenti, incremento di 1 la variabile current
            current++;
        }

        //assegno la classe current alla slide successiva
        slideList[current].classList.add('current');

	}
)

//quando clicco sul bottone di sinistra:
buttonLeft.addEventListener ('click',
	function() {
        
        // tolgo la classe current alla slide corrente
        slideList[current].classList.remove('current');

        // se mi trovo alla prima slide
        if (current == 0) {
            //porto current all'indice dell'ultima slide
            current = slideList.length - 1;
        }
        else {
            //altrimenti, decremento di 1 la variabile current
            current--;
        }
        
        //assegno la classe current alla slide precedente
        slideList[current].classList.add('current');

	}
)





