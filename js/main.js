const colorThemes = [
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
        '--red': '#5B22FF',
        '--lightBlue': '#10BB60',
        '--font': 'Cormorant',
    },
    {
        '--pink': 'black',
        '--blue': 'black',
        '--white': 'white',
        '--acid-green' : '#0029FF',
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
        '--acid-green' : '#C4C4C4',
        '--lightBlue' : '#C4C4C4',
        '--white': 'white',
        '--font': 'Tinos',
    },
    {
        '--white': '#FF9FA1',
        '--pink': '#C4C4C4',
    }
]

let state = {
    isShowingLetters: false,
    heading: false
}

//Выбор цветовой темы
function setTheme(themeNumber) {
    let themeOfPage = colorThemes[themeNumber]
    Object.entries(themeOfPage).forEach(function(theme) {
        document.documentElement.style.setProperty(theme[0], theme[1])
    })
}

//Отображение букв
function toggleLettersVisibility() {
    let bigLetters = document.querySelectorAll('.letters')

    if (state.isShowingLetters) {
        for (let i = 0; i < bigLetters.length; i++) {
            bigLetters[i].style.visibility = 'hidden'
        }
        state.isShowingLetters = false
    } else {
        for (let i = 0; i < bigLetters.length; i++) {
            bigLetters[i].style.visibility = 'visible'
            bigLetters[i].style.position = 'fixed'
            bigLetters[i].style.transform = `translate(${anime.random(0,100)}vw, ${anime.random(0,50)}vh) scale(${anime.random(1, 3)}) rotate(${ anime.random(0,360)}deg)`
        }
        state.isShowingLetters = true 
    }
    
}

function changeElemColor(heading) {
    // if (state.heading) {
    //     for (let i = 0; i < heading.length; i++) {
    //         heading[i].style.color = 'black'
    //     }
    //     state.heading = false
    // } else {
    //     for (let i = 0; i < heading.length; i++) {
    //         heading[i].style.color = 'white'
    //     }
    //     state.heading = true
    // }
    for (let i = 0; i < heading.length; i++) {
        heading[i].style.color = 'black'
        heading[i].style.stroke = 'var(--blue)'
        heading[i].style.fill = 'transparent'
    } 
}

function changeColorCssShapes(color) {
    color.style.backgroundColor = 'transparent'
    color.style.border = 'var(--blue) solid 0.1vw'
    color.style.fill = 'transparent'
    color.style.stroke = 'white'
}


//Черный фон
let btnBabble = document.querySelector('#btnBable')
btnBabble.onclick = function(e) {
    setTheme(1)
    let line = document.querySelector('.line')
    line.style.visibility = 'visible'
}


//Фон с буквами
let btnCandy = document.querySelector('#btnCandy')
btnCandy.onclick = function(e) {
    setTheme(2)
    toggleLettersVisibility()
}

//Фон с картинками
let svgPhoto = document.querySelector('.pink__oval svg')
let ellipsePhoto = document.querySelector('.pink__oval svg ellipse')
let btnPhoto = document.querySelector('.pink__circle')
btnPhoto.onclick = function (e) {
    setTheme(3)
    document.querySelector('.img__bc').style.display = 'block'
    svgPhoto.classList.add('svg__horse')
    ellipsePhoto.style.fill = 'transparent'
    document.querySelector('.blue__rect').style.backgroundColor = 'var(--lightBlue)'
    document.querySelector('.blue__adress__square').style.backgroundColor = 'var(--lightBlue)'
    document.querySelector('.rounded__img path').style.stroke = 'var(--lightBlue)'
    document.querySelector('.candy__two__img path').style.fill = 'var(--lightBlue)'
    document.querySelector('.fish').style.opacity = 1
}

let fishAnim = anime({
    targets: '.fish-img',
    translateX: ['50%','-400%'],
    translateY: ['5%','300%'],
    rotate: ['-30', 360],
    easing: 'linear',
    direction: 'alternate',
    duration: 5000,
    autoplay: false
})
let fishBtn =  document.getElementById('fishBtn')
fishBtn.onclick = fishAnim.play



//Красный фон 
let btnRedSquare = document.querySelector('.pink__rect')
btnRedSquare.onclick = function (e) {
    setTheme(4)
    let headingsFirst = document.querySelectorAll('h1')
    changeElemColor(headingsFirst)

    let headingsSecond = document.querySelectorAll('h2')
    changeElemColor(headingsSecond)

    document.querySelector('.squares').style.opacity = 1
}


//Фон с контурным фигурами и морфингом
let btnMorf = document.querySelector('.blue__rect__three')
btnMorf.onclick = function (e) {
    setTheme(5) 
    let path = document.querySelectorAll('.path__morf')
    changeElemColor(path)
    let rectOne = document.querySelector('.blue__rect')
    changeColorCssShapes(rectOne )
    let rectTwo = document.querySelector('.blue__rect__two')
    changeColorCssShapes(rectTwo)
    let rectThr = document.querySelector('.blue__adress__square')
    changeColorCssShapes(rectThr)
    let rectFou = document.querySelector('.blue__rect__four')
    changeColorCssShapes(rectFou)
    let rectFifth = document.querySelector('.blue__rect__three')
    changeColorCssShapes(rectFifth)
    let rounded = document.querySelector('.rounded__img path')
    rounded.style.strokeWidth = 1.5

    let ellipseOne = document.querySelector('.pink__title__oval svg ellipse')
    changeColorCssShapes(ellipseOne)
    let morfAnime = anime ({
        
    })

}

//сброс стилей 
let btnReset = document.querySelector('.header__logo__link')
btnReset.onclick = function(e) {
    window.location.reload(false); 
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

        imgCandy.addEventListener('mouseenter', function() {
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
