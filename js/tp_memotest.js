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

let gameArray = []  //array a llenar cada dos clicks

let gameObjects = []

let findTheWinner = [] //según length indica el ganador 

let turnos = 24; 

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

//CLICK DA VUELTA LA IMAGEN
$('img').on('click', function(e) {
  const id = e.target.id
  const clickedIndex = $(this).index()
  const saveThisClick = $(this)

  $('#' + id).attr('src', desordenadas[clickedIndex]) //REEMPLAZAR URL
  
  turnos--
  left()

  if (turnos == 0) { //DETECTAR PERDEDOR
    alert('Game Over')
    location.reload()
  }
    
  gameArray.push(desordenadas[clickedIndex])  //IMAGEN CLICKEADA SE PUSHEA AL ARRAY

  gameObjects.push({
    imgIndex: clickedIndex,
    clickedDiv: saveThisClick
  })
   
  if (gameArray.length == 2) {   
    if (gameArray[0] == gameArray[1]) { //COMPARAR PAR DE CARTAS
    
      findTheWinner.push(gameArray[0], gameArray[1])
    
      gameArray = []
      gameObjects = []
    
      setTimeout(function() {
      const inputValue = $('#nameInput').val()
        if (findTheWinner.length == 12) {
        alert('Ganaste ' + inputValue + "!") 
      }    
    }, 1000)
  
  } else { //VOLVER A IMG INICIAL
    setTimeout(function(){  
      gameObjects[0].clickedDiv.attr('src', "imgs/blurred.png" )      
      gameObjects[1].clickedDiv.attr('src', "imgs/blurred.png" )

      gameArray = []
      gameObjects = []
    },900) 
   } 
  }  
})


 

//if (saveThisClick.hasClass('isClicked')) 
//$(this).addClass('isClicked');
 // saveThisClick.removeClass('isClicked')