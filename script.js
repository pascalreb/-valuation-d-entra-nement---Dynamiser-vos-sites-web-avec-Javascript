const newGame = document.querySelector('.fa-circle-plus')
const rollDice = document.querySelector('.fa-rotate')
const hold = document.querySelector('.fa-file-arrow-down')

const GLOBAL1 = document.querySelector('.GLOBAL1')
const GLOBAL2 = document.querySelector('.GLOBAL2')
const ROUND1 = document.querySelector('.ROUND1')
const ROUND2 = document.querySelector('.ROUND2')

const diceFace = document.querySelector('.dice-face')

//Clique sur le bouton New Game

launchNewGame = (e) => {
  e.preventDefault()

  GLOBAL1.innerHTML = 0
  GLOBAL2.innerHTML = 0
  ROUND1.innerHTML = 0
  ROUND2.innerHTML = 0

}

newGame.addEventListener('click', launchNewGame)

//Clique sur le bouton Roll Dice

LaunchDice = (e) => {
  e.preventDefault()
  


  let diceResult = Math.floor(Math.random()*6 + 1)
  diceFace.innerHTML = diceResult

  if (diceResult !== 1) {
    ROUND1.innerHTML =+ diceResult
  } else {
    ROUND1.innerHTML = 0
    }


}

rollDice.addEventListener('click', LaunchDice)
