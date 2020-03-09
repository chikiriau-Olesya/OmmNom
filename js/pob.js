/*передаю все темы в массиве, 
через существующие переменные в css (var ---pink и тд)
*/
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
        '--pink': 'red',
        '--blue': 'black',
        '--font': 'Cormorant',
        '--horse-img': 'url('
        //то есть яв в переменную передаю картинку, а в дефолтном состоянии эта переменаая ноне в цсс
    }
]

let btnBabble = document.querySelector('#btnBable')
btnBabble.onclick = function(e) {
    // в переменную передаю значения из массива ([1] потом заменю на рандом в зависимости от количества тем в массиве)
    let randomTheme = colorThemes[1]
    Object.entries(randomTheme).forEach(function(theme) {
        document.documentElement.style.setProperty(theme[0], theme[1])
    })
    // let svg = e.target.find('svg path')
    console.log(e);


    // let randomTheme = colorThemes[Math.floor(Math.random() * 2)]
    // Object.entries(randomTheme).forEach(function(theme) {
    //     document.documentElement.style.setProperty(theme[0], theme[Math.floor(Math.random() * 2)])
    // })
    
//     for(let i = 0; i < colorThemes.length; i++ )
//         var randomTheme = colorThemes[0, 2]
//         Object.entries(randomTheme).forEach(function(theme) {
//             document.documentElement.style.setProperty(theme[0], theme[1])
//         })

//         // let svg = e.target.find('svg path')
//         console.log(e);
    
// }

// let btnBabble = document.querySelector('#btnBable')
// let randomTheme = colorThemes[0, 2]
// Object.entries(randomTheme).forEach(function(theme) {
//     btnBabble.addEventListener('click', handleThemeUp)
// })

// function handleThemeUp(e) {
//     switch(e.target.value) {
//         case 'theme[1]':
//          document.documentElement.style.setProperty(theme[0], theme[1])
//          break
//     }
//     console.log(e);
// }










ПРИМЕР ЖЕНИ 


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
   