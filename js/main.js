
let colorThemes = [
    {
        pink: 'pink'
    },
    {
        '--pink': '#5B22FF',
        '--blue': '#10BB60',
        '--white': 'black',
        '--font': 'Cormorant',
        '--horse-img': 'url('
        //то есть яв в переменную передаю картинку, а в дефолтном состоянии эта переменаая ноне в цсс
    },
    {
        '--pink': 'black',
        '--blue': 'black',
    }
]

let btnBabble = document.querySelector('#btnBable')
btnBabble.onclick = function(e) {
  let themeOfPage = colorThemes[1]
  Object.entries(themeOfPage).forEach(function(theme) {
      document.documentElement.style.setProperty(theme[0], theme[1])
  })

}

let bigLetters = document.querySelectorAll('.letters')
let btnCandy = document.querySelector('#btnCandy')
btnCandy.onclick = function(e) {
    let themeOfPage = colorThemes[2]
    Object.entries(themeOfPage).forEach(function(theme) {
        document.documentElement.style.setProperty(theme[0], theme[1])
    })
    for(let i = 0; i < bigLetters.length; i++) {
        bigLetters[i].style.visibility = 'visible'
        bigLetters[i].style.position = 'fixed'
        bigLetters[i].style.transform = `translate(${anime.random(0,100)}vw, ${anime.random(0,50)}vh) scale(${anime.random(1, 3)}) rotate(${ anime.random(0,360)}deg)`
    }
 
}

//Для модального окно с синим баблом

    /* для появления модального окна при клике 
    на элемент вешаю новый (видимый) класс 
    на модальное окно, при закрытии убираю его*/

let btn = document.querySelector('.candy__two')
let modal = document.querySelector('.modal')
let close = document.querySelector('.modal__bable__content__close')
btn.onclick = function() {
    modal.style.visibility = 'visible';
    modal.classList.add('modal-animation-open')
}
close.onclick = () => {
    modal.style.visibility = 'hidden';
    modal.classList.remove('modal-animation-open')
}

//Появление розовых кругов и их расчищениекурсором мышки

    /*Создаю цикл, который генерит 100 кругов
    и позиционирует их рандомно на странице. 
    Для исчезновения кругов использую mouseout,
    невешивая обработчик событий */

let btnCreatCirc = document.querySelector('.pink__circle__two')
btnCreatCirc.onclick = function() {
    let numberOfCircles = 100
    let numberOfPictures = 10
    for(let i = 0; i < numberOfCircles; i++) {
        let divCircle = document.createElement('div')
        divCircle.classList.toggle('div__circle')
        divCircle.style.position = 'fixed'
        divCircle.style.transform = `translate(${anime.random(0,90)}vw, ${anime.random(0,100)}vh)`
        document.body.append(divCircle)

        divCircle.addEventListener('mouseout', function() {
            divCircle.style.display = 'none';
            
        });
    }
    for (let i = 0; i < numberOfPictures; i++) {
        let imgCandy = document.createElement('img')
        imgCandy.classList.toggle('img__new__candy')
        imgCandy.style.position = 'fixed'
        imgCandy.style.transform = `translate(${anime.random(0,90)}vw, ${anime.random(0,100)}vh)`
        document.body.append(imgCandy)

        imgCandy.addEventListener('mouseout', function() {
            imgCandy.style.display = 'none';
          
    });
    console.log(1)
   

    }
   

    // if () {
    //     let btn = document.querySelector('.candy__two')
    //     let modal = document.querySelector('.modal')
    //     btn.onclick = function() {
    //         modal.style.visibility = 'hidden';
    //     }

    // }



}
