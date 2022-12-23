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




//vado a prendere la thumb box
const thumbBox = document.querySelector('.thumb-box');

//con un ciclo creo tante thumb all'interno di thumb box quante sono le immagini
for (let i = 0; i < imgList.length; i++) {

    thumbBox.innerHTML += `<div class="thumb">
                             <img src="${imgList[i]}">
                             <div class="frame overlay"></div>
                           </div>`;

}




//do alla prima slide la classe current, che la rende visibile
document.querySelector('#slide-box .slide').classList.add('current');

//do alla frame della prima thumb selected e tolgo overlay
document.querySelector('.thumb-box .frame').classList.add('selected');
document.querySelector('.thumb-box .frame').classList.remove('overlay');




//creo la variabile current che servirà ad inidcare la slide corrente e quindi visibile
let current = 0;




//creo un array con le slide
const slideList = document.getElementsByClassName('slide');

//creo un array con le frame
const frameList = document.getElementsByClassName('frame');


//prendo i bottoni
const buttonTop = document.querySelector('.button-top');
const buttonBottom = document.querySelector('.button-bottom');

//quando clicco sul bottone di destra:
buttonBottom.addEventListener ('click',
	function() {
        
        // tolgo la classe current alla slide corrente
        slideList[current].classList.remove('current');
        // tolgo la classe selected alla thumb corrente e le rimetto overlay
        frameList[current].classList.remove('selected');
        frameList[current].classList.add('overlay');

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
        //assegno la classe selected alla thumb successiva e le tolgo overlay
        frameList[current].classList.add('selected');
        frameList[current].classList.remove('overlay');
	}
)

//quando clicco sul bottone di sinistra:
buttonTop.addEventListener ('click',
	function() {
        
        // tolgo la classe current alla slide corrente
        slideList[current].classList.remove('current');
        // tolgo la classe selected alla thumb corrente e le rimetto overlay
        frameList[current].classList.remove('selected');
        frameList[current].classList.add('overlay');

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
        //assegno la classe selected alla thumb successiva e le tolgo overlay
        frameList[current].classList.add('selected');
        frameList[current].classList.remove('overlay');

	}
)





