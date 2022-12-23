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





