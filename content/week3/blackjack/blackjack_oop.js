function shuffle(array, seed = 1) {
  let currentIndex = array.length
  let temporaryValue, randomIndex

  let random = () => {
    var x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }

  while (0 !== currentIndex) {
    randomIndex = Math.floor(random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}

class Card {
  constructor(rank, suit) {
    this.rank = rank
    this.suit = suit
  }

  toString() {
    return `${this.rank}${this.suit}`
  }

  get points() {
    switch (this.rank) {
      case 'A':
        return 11
      case 'J':
      case 'Q':
      case 'K':
        return 10
      default:
        return Number(this.rank)
    }
  }
}

class Hand {
  constructor(cards) {
    if (!cards.every((card) => card instanceof Card)) {
      throw new TypeError('A Hand can only contain Cards')
    }

    this.cards = cards
  }

  get points() {
    //TODO Complete this method so that it calculates the points for a hand of cards
    if (this.cards.length === 0) {
      return 0
    } else if (this.cards.every((card) => card.rank === 'A')) {
      return 21
    } else {
      return this.cards.reduce((total, card) => {
        return (total += card.points)
      }, 0)
    }
  }
}

class Deck {
  constructor() {
    this.cards = []

    for (let suit of ['S', 'D', 'C', 'H']) {
      for (let rank of ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']) {
        this.cards.push(new Card(rank, suit))
      }
    }
  }

  draw() {
    return this.cards.shift()
  }

  shuffle() {
    this.cards = shuffle(this.cards, Date.now())
  }
}
function restartGame() {
  const f = document.createElement('FORM')
  const btn = document.createElement('BUTTON')
  btn.innerHTML = 'Restart Game'
  f.appendChild(btn)
  let buttonNav = document.querySelector('.all-button')
  buttonNav.appendChild(f)
}

function playerHits() {
  playerCards.push(deck.draw())
  const cardIMG = document.createElement('IMG')
  cardIMG.setAttribute(
    'src',
    `https://deckofcardsapi.com/static/img/${
      playerCards[playerCards.length - 1].rank == 10
        ? 0
        : playerCards[playerCards.length - 1].rank
    }${playerCards[playerCards.length - 1].suit}.png`
  )

  playCardStore.appendChild(cardIMG)
  if (playerHand.points <= 21) {
    action.innerHTML = `Player turn you have <span class='good'>${playerHand.points} points.</span> Do you Want to hit or stick`
  } else {
    hitButton.remove()
    stickButton.remove()
    restartGame()
    action.innerHTML = `OH NO you have <span class='bad'>${playerHand.points} POINTS.</span> you LOSE... hahahaha`
  }
}

function playerSticks() {
  action.innerHTML = `You have chosen to stick, Now it is the Dealers turn. You have -  <span class='good'>${playerHand.points} points.</span>`
  hitButton.remove()
  stickButton.remove()
  dealerTurn()

  return playerHand.points
}

async function dealerTurn() {
  dealerHand['cards'].forEach((i) => {
    const cardIMG = document.createElement('IMG')
    cardIMG.setAttribute(
      'src',
      `https://deckofcardsapi.com/static/img/${i.rank == 10 ? 0 : i.rank}${
        i.suit
      }.png`
    )
    dealerCardStore.appendChild(cardIMG)
  })
  if (dealerHand.points < 17) {
    dealerAction.innerHTML = `Dealer has <span class='good'>${dealerHand.points} points</span> and has to hit`
  } else {
    dealerAction.innerHTML = `Dealer has <span class='good'>${dealerHand.points} points and has to stick`
    finalOutcome()
  }

  automatedDealer().then((res) => finalOutcome())
}
function automatedDealer(dealerTurn) {
  return new Promise((res, rej) => {
    setInterval(() => {
      if (dealerHand.points < 17) {
        dealerCards.push(deck.draw())
        const cardIMG = document.createElement('IMG')

        cardIMG.setAttribute(
          'src',
          `https://deckofcardsapi.com/static/img/${
            dealerCards[dealerCards.length - 1].rank == 10
              ? 0
              : dealerCards[dealerCards.length - 1].rank
          }${dealerCards[dealerCards.length - 1].suit}.png`
        )
        dealerCardStore.appendChild(cardIMG)

        if (dealerHand.points < 17) {
          dealerAction.innerHTML = `Dealer has <span class='good'>${dealerHand.points} points </span> and has to hit`
        } else if (dealerHand.points <= 21) {
          dealerAction.innerHTML = `Dealer has <span class='good'>${dealerHand.points} points</span> and has to stick`
          res(clearInterval())
        } else {
          dealerAction.innerHTML = `Dealer has <span class='bad'>${dealerHand.points} points and busts`
          res(clearInterval())
        }
      }
    }, 2000)
  })
}

function finalOutcome() {
  const outcome = document.querySelector('.final-outcome')
  console.log(dealerHand.points)
  console.log(playerHand.points)
  if (dealerHand.points > 21) {
    outcome.innerHTML = 'Dealer bust, You win 😡'
    restartGame()
  } else if (dealerHand.points === playerHand.points) {
    outcome.innerHTML = "You have equal points, It's a draw 😐"
    restartGame()
  } else if (dealerHand.points > playerHand.points) {
    outcome.innerHTML = 'Dealer has more points and wins, YOU LOSE 😂'
    restartGame()
  } else {
    outcome.innerHTML = 'Dealer has less points and loses, YOU WIN 😎'
    restartGame()
  }
}

// GAME starting
const deck = new Deck()
deck.shuffle() //Shuffle deck once
// initialize and display player random 2 cards
let playerCards = [deck.draw(), deck.draw()]
const playerHand = new Hand(playerCards)
const playCardStore = document.querySelector('.player-cards')

playerHand['cards'].forEach((i) => {
  const cardIMG = document.createElement('IMG')
  cardIMG.setAttribute(
    'src',
    `https://deckofcardsapi.com/static/img/${i.rank == 10 ? 0 : i.rank}${
      i.suit
    }.png`
  )
  playCardStore.appendChild(cardIMG)
})

//player chooses to hit or stick
const action = document.querySelector('.action')
action.innerHTML = `Player turn you have <span class='good'>${playerHand.points} points.</span> Do you Want to hit or stick`
const hitButton = document.querySelector('.hit-btn')
const stickButton = document.querySelector('.stick-btn')

hitButton.addEventListener('click', playerHits)
stickButton.addEventListener('click', playerSticks)

//Chosen to stick now it is the Dealers Turn
const dealerAction = document.querySelector('.dealer-action')
const dealerCards = [deck.draw(), deck.draw()]
const dealerHand = new Hand(dealerCards)
const dealerCardStore = document.querySelector('.dealer-cards')
