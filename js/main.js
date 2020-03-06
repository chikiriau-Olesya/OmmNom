
//Для модального окно с синим баблом
/*
let openWindow = anime({
    targets: '.modal',
    display: 'block',
    translateX: 500,
    autoplay: false

})
let openWindowBtn = document.querySelector('.candy__two')
openWindowBtn.onclick =  openWindow.play
*/

let btn = document.querySelector('.candy__two')
let modal = document.querySelector('.modal')
let close = document.querySelector('.modal__bable__content__close')
btn.onclick = function() {
    modal.style.display = "block";
    let modalImg = document.querySelector('.modal__pic')
    modalImg.classList.toggle("animation-open");
}
close.onclick = () => {
    modal.style.display = "none";
}
