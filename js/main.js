
let colorThemes = [
    {
        '--pink': '#FF9FA1',
        '--blue': '#0029FF',
        '--grey': '#C4C4C4',
        '--white': 'white',
        '--font': 'Source Code Pro',
        '--lightBlue' : '#0029FF',
    },
    {
        '--pink': '#5B22FF',
        '--blue': '#10BB60',
        '--white': 'black',
        '--font': 'Cormorant',
    },
    {
        '--pink': 'black',
        '--blue': 'black',
        '--lightBlue': 'black',
    },
    {
        '--pink': '#FF9FA1',
        '--blue': '#8B5AF6',
        '--white': 'white',
        '--lightBlue' : '#5dcdbe',
    },
    {
        '--pink': '#C4C4C4',
        '--blue': '#C4C4C4',
        '--lightBlue' : '#C4C4C4',
        '--white': 'white',
        '--font': 'Tinos',
    }
]


//Черный фон
let btnBabble = document.querySelector('#btnBable')
btnBabble.onclick = function(e) {
  let themeOfPage = colorThemes[1]
  Object.entries(themeOfPage).forEach(function(theme) {
      document.documentElement.style.setProperty(theme[0], theme[1])
  })

}
//Фон с буквами
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

//Фон с картинками
let fishImg = document.querySelector('.fish')
let fishAnim = anime({
    targets: fishImg,
    tranlateX: ['50%','100%'],
    tranlateY: ['5%','50%'],
    easing: 'linear',
    duration: 700
})
let svgPhoto = document.querySelector('.pink__oval svg')
let ellipsePhoto = document.querySelector('.pink__oval svg ellipse')
let btnPhoto = document.querySelector('.pink__circle')
btnPhoto.onclick = function (e) {
    let themeOfPage = colorThemes[3]
    Object.entries(themeOfPage).forEach(function(theme) {
        document.documentElement.style.setProperty(theme[0], theme[1])
    })
    document.querySelector('.img__bc').style.display = 'block'
    svgPhoto.classList.add('svg__horse')
    ellipsePhoto.style.fill = 'transparent'
    document.querySelector('.blue__rect').style.backgroundColor = 'var(--lightBlue)'
    document.querySelector('.blue__adress__square').style.backgroundColor = 'var(--lightBlue)'
    document.querySelector('.rounded__img path').style.stroke = 'var(--lightBlue)'
    document.querySelector('.candy__two__img path').style.fill = 'var(--lightBlue)'
    // for (let i = 0; i < downCandy.lenght; i++) {
    //     downCandy[i].style.fill = 'var(--lightBlue)'
    // }
    
}

// document.querySelector('body').onclick = function(e) {
//     svgPhoto.classList.remove('svg__horse')
//     ellipsePhoto.style.fill = '#ff9fa1'
// }


//Красный фон 
let btnRedSquare = document.querySelector('.pink__rect')
btnRedSquare.onclick = function (e) {
    let themeOfPage = colorThemes[4]
    Object.entries(themeOfPage).forEach(function(theme) {
        document.documentElement.style.setProperty(theme[0], theme[1])
    })
    let headings = document.querySelectorAll('h1')
    for (let i = 0; i < headings.length; i++) {
        headings[i].style.color = 'black'
    }
    let headingsSecond = document.querySelectorAll('h2')
    for (let i = 0; i < headingsSecond.length; i++) {
        headingsSecond[i].style.color = 'black'
    }
    document.querySelector('.squares').style.opacity = 1
}

//сброс стилей (пока реализован так)
let btnReset = document.querySelector('.header__logo__link')
btnReset.onclick = function(e) {
  let themeOfPage = colorThemes[0]
  Object.entries(themeOfPage).forEach(function(theme) {
      document.documentElement.style.setProperty(theme[0], theme[1])
  })
  for(let i = 0; i < bigLetters.length; i++) {
    bigLetters[i].style.visibility = 'hidden'
    }
  document.querySelector('.blue__rect').style.backgroundColor = 'var(--blue)'
  ellipsePhoto.style.fill = 'var(--pink)'
  svgPhoto.classList.remove('svg__horse')
  document.querySelector('.img__bc').style.display = 'none'
  let headings = document.querySelectorAll('h1')
  for (let i = 0; i < headings.length; i++) {
      headings[i].style.color = 'white'
  }
  let headingsSecond = document.querySelectorAll('h2')
  for (let i = 0; i < headingsSecond.length; i++) {
      headingsSecond[i].style.color = 'white'
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
