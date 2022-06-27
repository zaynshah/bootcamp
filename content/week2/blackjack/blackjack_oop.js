export class Card {
  constructor(rank, suit) {
    this.rank = rank
    this.suit = suit.toUpperCase()
  }

  toStrin() {
    //TODO Complete this method so that it returns the correct string to represent the hand
    return `${this.suit}+${this.rank}`
  }

  get points() {
    //TODO Complete this method so that it gets the correct number of points for a card
    let cardPoint = this.rank
    switch (cardPoint) {
      case 'A':
        return 11
      case 'J':
      case 'Q':
      case 'K':
        return 10
      default:
        return Number(cardPoint)
    }
  }
}

export class Hand {
  constructor(cards) {
    if (!cards.every((card) => card instanceof Card)) {
      throw new TypeError('A Hand can only contain Cards')
    }

    this.cards = cards
  }

  get points() {
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

export class Deck {
  constructor() {
    //TODO Complete this method so the deck contains all the correct cards
    this.cards = this.generateDeck()
  }
  generateDeck() {
    const cardDeck = []
    const suit = ['S', 'D', 'C', 'H']
    const cardValue = [
      'A',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K'
    ]
    for (let i of suit) {
      for (let j of cardValue) {
        cardDeck.push(new Card(j, i))
      }
    }
    return cardDeck
  }

  draw() {
    return this.cards.shift()
  }

  shuffle(seed = Date.now()) {
    //TODO Complete this method so that it shuffles the deck
    let currentIndex = this.cards.length
    let temporaryValue, randomIndex

    let random = () => {
      var x = Math.sin(seed++) * 10000
      return x - Math.floor(x)
    }

    while (0 !== currentIndex) {
      randomIndex = Math.floor(random() * currentIndex)
      currentIndex -= 1
      temporaryValue = this.cards[currentIndex]
      this.cards[currentIndex] = this.cards[randomIndex]
      this.cards[randomIndex] = temporaryValue
    }
    return this.cards
  }
}

export class Setup {
  constructor() {
    this.playingDeck = this.playingDeckCall()
    this.playerCards = []
    this.playerHand = 'Start game'
    this.dealerCards = []
    this.dealerHand = 'Dealer hand'
  }

  playingDeckCall() {
    this.playingDeck = new Deck()
    return this.playingDeck
  }

  initalPlayerHand() {
    this.playingDeck.shuffle()
    this.playerCards.push(this.playingDeck.draw())
    this.playerCards.push(this.playingDeck.draw())

    this.playerHand = new Hand(this.playerCards)

    return this.playerHand
  }

  playerTurn() {
    const action = window.prompt("what do you want to do? ('hit' or 'stick')")

    switch (action) {
      case 'hit':
        console.log('Player wants to hit')
        this.playerCards.push(this.playingDeck.draw())
        if (this.playerHand.points > 21) {
          console.log(
            `you Lose!, your hand is ${this.cardName()}  and you have ${
              this.playerHand.points
            } points`
          )
          return false
        } else {
          console.log(
            `Your hand is ${this.cardName()}  and you have ${
              this.playerHand.points
            } points`
          )
          return true
        }
      case 'stick':
        console.log('Player wants to stick')
        return false
    }
  }

  cardName() {
    let playerCard = []
    this.playerHand.cards.forEach((i) => playerCard.push(i.rank + i.suit))
    return playerCard.join(', ')
  }
  dealerCardName() {
    let dealerCard = []
    this.dealerHand.cards.forEach((i) => dealerCard.push(i.rank + i.suit))
    return dealerCard.join(', ')
  }

  initialDealerHand() {
    this.dealerCards.push(this.playingDeck.draw())
    this.dealerCards.push(this.playingDeck.draw())
    this.dealerHand = new Hand(this.dealerCards)
    return this.dealerHand
  }
  dealerTurn() {
    while (this.dealerHand.points < 17) {
      console.log('The dealer is hitting')
      this.dealerCards.push(this.playingDeck.draw())
      console.log(
        `The dealer hand is ${this.dealerCardName()} and has ${
          this.dealerHand.points
        } points`
      )
    }
  }
  gameOutcome() {
    if (this.playerHand.points == this.dealerHand.points) {
      console.log(`It's a draw...`)
    } else if (this.playerHand.points > this.dealerHand.points) {
      console.log(`Congratulations, You win!`)
    } else if (this.dealerHand.points > 21) {
      console.log(`Congratulations, You win!`)
    } else {
      console.log(`Unlucky, You lose!`)
    }
  }
}

export class Game {
  constructor() {}
  play() {
    let game = new Setup()
    let player = game.initalPlayerHand()
    console.log(
      `Your hand is ${game.cardName()} and you have ${player.points} points`
    )
    let hitQuestion = true
    while (hitQuestion) {
      hitQuestion = game.playerTurn()
    }
    if (player.points <= 21) {
      let dealer = game.initialDealerHand()
      console.log(
        `The dealer hand is ${game.dealerCardName()} and has ${
          dealer.points
        } points`
      )
      game.dealerTurn()
      game.gameOutcome()
    }
  }
}

//Play the game
let a = new Game()
a.play()
