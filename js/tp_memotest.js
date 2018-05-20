let a = [
  'https://raw.githubusercontent.com/adafront/frontendV3/master/modulo3-js/ejercicios/TP2Memotest/recursos/adaLovelace.jpg',
  'https://raw.githubusercontent.com/adafront/frontendV3/master/modulo3-js/ejercicios/TP2Memotest/recursos/adaLovelace.jpg',
  'https://raw.githubusercontent.com/adafront/frontendV3/master/modulo3-js/ejercicios/TP2Memotest/recursos/adaLovelace.jpg',
  'https://raw.githubusercontent.com/adafront/frontendV3/master/modulo3-js/ejercicios/TP2Memotest/recursos/adaLovelace.jpg',
  'https://raw.githubusercontent.com/adafront/frontendV3/master/modulo3-js/ejercicios/TP2Memotest/recursos/chienS.png',
  'https://raw.githubusercontent.com/adafront/frontendV3/master/modulo3-js/ejercicios/TP2Memotest/recursos/chienS.png',
  'https://raw.githubusercontent.com/adafront/frontendV3/master/modulo3-js/ejercicios/TP2Memotest/recursos/chienS.png',
  'https://raw.githubusercontent.com/adafront/frontendV3/master/modulo3-js/ejercicios/TP2Memotest/recursos/chienS.png',
  'https://raw.githubusercontent.com/adafront/frontendV3/master/modulo3-js/ejercicios/TP2Memotest/recursos/graceHopper.jpg',
  'https://raw.githubusercontent.com/adafront/frontendV3/master/modulo3-js/ejercicios/TP2Memotest/recursos/graceHopper.jpg',
  'https://raw.githubusercontent.com/adafront/frontendV3/master/modulo3-js/ejercicios/TP2Memotest/recursos/graceHopper.jpg',
  'https://raw.githubusercontent.com/adafront/frontendV3/master/modulo3-js/ejercicios/TP2Memotest/recursos/graceHopper.jpg',
  ]

//AGREGAR NOMBRE DE JUGADOR
const userName = $('#userName')

function add() {
  const inputValue = $('#nameInput').val()
  const showUser = '<p class="userStyle">' + inputValue + '</p>'

  userName.append(showUser)
 
}

//MOSTRAR TURNOS RESTANTES
const counter = $('#counting')

function left() {
  const tickTock = '<p class="ticking">' + "Te quedan " + turnos + " intentos." + '</p>'
  counter.html(tickTock)
}


$('#nameInput').on('keypress', function(e) {
    if (e.keyCode == 13) {
        add()
        $('#nameInput').addClass('hideMe')
        $('#jugador').addClass('hideMe')
    }
})

//DESORDENAR EL ARRAY DE IMÁGENES

const desordenadas = a.sort(function() {
  return Math.random() - 0.5
});

 
let gameArray = []  //ARRAY A LLENAR CADA 2 CLICKS

let gameObjects = []

let findTheWinner = [] 

let turnos = 24;

$('img').on('click', function(e) {
  const id = e.target.id
  const clickedIndex = $(this).index()
  const saveThisClick = $(this)
  
$('#' + id).attr('src', desordenadas[clickedIndex]) //REEMPLAZAR URL
/*
if (saveThisClick.hasClass('isClicked')) {
  $(this).attr('src', "https://media.licdn.com/dms/image/C560BAQEDf5SaTOmTKg/company-logo_200_200/0?e=2126476800&v=beta&t=hD_7eqBx_noU3Mcf6qmFaK7kplLwxqd7YdzyC8NUYp4")
}*/

//DETECTAR PERDEDOR
if (turnos == 0) {
  alert('Game Over')
  location.reload()
}

//$(this).addClass('isClicked');
turnos--
    //console.log(turnos)
left()

gameArray.push(desordenadas[clickedIndex])  //AGREGO IMAGENES CLICKEADAS A ARRAY

gameObjects.push( {
  imgIndex: clickedIndex,
  clickedDiv: saveThisClick
})
   
if (gameArray.length == 2) {  
 
  if (gameArray[0] == gameArray[1]) { //COMPARAR PAR DE CARTAS
    
    findTheWinner.push(gameArray[0], gameArray[1])
    gameArray = []
    gameObjects = []
    console.log(findTheWinner)
    
    setTimeout(function() {
      const inputValue = $('#nameInput').val()
    if (findTheWinner.length == 12) {
      alert('Ganaste ' + inputValue + "!") 
    }    
  }, 1000)
  

  } else {
    setTimeout(function(){
   // saveThisClick.removeClass('isClicked')
      gameObjects[0].clickedDiv.attr('src', "imgs/blurred.png" )      
      gameObjects[1].clickedDiv.attr('src', "imgs/blurred.png" )

      gameArray = []
      gameObjects = []
    },900) 
  } 
}  
//"https://media.licdn.com/dms/image/C560BAQEDf5SaTOmTKg/company-logo_200_200/0?e=2126476800&v=beta&t=hD_7eqBx_noU3Mcf6qmFaK7kplLwxqd7YdzyC8NUYp4"

// console.log(id)
//console.log(clickedIndex)
//console.log(desordenadas[clickedIndex])
// console.log(gameArray)
})


 
//usar data para guardar info