// Déclaration des constantes
const dice = document.querySelector(".dice")
const roll = document.querySelector(".roll-dice")
const hold = document.querySelector(".hold")
const newGame = document.querySelector(".new-game")
const player0 = document.querySelector(".player0")
const player1 = document.querySelector(".player1")

// Déclaration des variables
let randomNumber = 0
let roundScore = 0
let activePlayer = 0
let scores = [0, 0]

// Récupération d'un nombre aléatoire entre 1 et 6
const rollDice = function () {
  randomNumber = Math.floor(Math.random() * 6) + 1

  // Affichage du dé
  dice.innerHTML = `<img class="dice" src="../images/dice/dice-${randomNumber}.png" alt="dice ${randomNumber}">`

  // Conditions du roundscore (score temporaire)
  if (randomNumber !== 1) {
    roundScore += randomNumber
    document.querySelector(`.ROUND${activePlayer}`).textContent = roundScore
  } else {
    changePlayer()
  }
}

// Changement de joueur
const changePlayer = function () {
  roundScore = 0
  document.querySelector(`.ROUND${activePlayer}`).textContent = 0
  activePlayer = activePlayer === 0 ? 1 : 0
  player0.classList.toggle("active-player")
  player1.classList.toggle("active-player")
}

// Enregistrement du score
const holdScore = function () {
  
  // Ajout du roundscore dans le score global
  scores[activePlayer] += roundScore
  
  // Affichage du score global
  document.querySelector(`.GLOBAL${activePlayer}`).textContent = scores[activePlayer]

  // Conditions si les 100 points sont atteints
  if (scores[activePlayer] >= 100) {
    document.querySelector(`.player-${activePlayer}`).classList.add("winner-player")
    document.querySelector(`.player-${activePlayer}`).innerHTML = `<p>Bravo !!!</p>`

  } else {
    changePlayer()
  }
}

// Nouvelle partie
const replay = function () {
  document.location.reload()
}

// Ecoute des événements
roll.addEventListener("click", rollDice)
hold.addEventListener("click", holdScore)
newGame.addEventListener("click", replay)