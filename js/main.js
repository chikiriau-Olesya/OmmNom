/*передаю все темы в массиве, 
через существующие переменные в css (var ---pink и тд)
*/
let colorThemes = [
    {
        pink: 'pink'
    },
    {
        '--pink': 'red',
        '--blue': 'black',
        '--horse-img': 'url('
        //то есть яв в переменную передаю картинку, а в дефолтном состоянии эта переменаая ноне в цсс
    }
]

let btnBabble = document.querySelector('#btnBable')
btnBabble.onclick = function(e) {
    //в переменную передаю значения из массива ([1] потом заменю на рандом в зависимости от количества тем в массиве)
    let randomTheme = colorThemes[1]
    Object.entries(randomTheme).forEach(function(theme) {
        document.documentElement.style.setProperty(theme[0], theme[1])
    })
    // let svg = e.target.find('svg path')
    console.log(e);
    
}

//Для модального окно с синим баблом
let btn = document.querySelector('.candy__two')
let modal = document.querySelector('.modal')
let close = document.querySelector('.modal__bable__content__close')
btn.onclick = function() {
    modal.classList.toggle('is-visible');
    if (btn.onclick == true) {
        
    }
}
close.onclick = () => {
    modal.style.display = 'none';
}

// Попытка сделать огромное количество розовых кругов
let btnCreatCirc = document.querySelector('.pink__circle__two')
btnCreatCirc.onclick = function() {
    let numberOfCircles = 100
    for(let i = 0; i < numberOfCircles; i++) {
        let divCircle = document.createElement('div')
        divCircle.classList.toggle('div__circle');
        divCircle.style.position = 'fixed',
        divCircle.style.transform = `translate(${anime.random(0,90)}vw, ${anime.random(0,100)}vh)`
        // divCircle.getBoundingClientRect().height
        document.body.append(divCircle)
        //Реализую исчезновение созданных кругов по наведении курсора мыши
        divCircle.addEventListener('mouseout', function() {
            divCircle.style.display = 'none';
             //вместо верхнего ноне я передаю в опасити в аниме это для кружков, тема их исчезновения
            anime({
                targ
            })
        });
    }



}


