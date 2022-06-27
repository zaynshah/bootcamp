import shuffle from './support/shuffle.js'
import { getDefaultLogger } from './support/logging.ts'
import { parse } from 'https://deno.land/std/flags/mod.ts'

const LOSE_MESSAGE = 'You lose!'
const WIN_MESSAGE = 'You win!'
const DRAW_MESSAGE = 'Draw!'
const defaultLogger = await getDefaultLogger()

export function deck() {
  const cards = []

  // TO DO: Write your code here
  // Pushing all 52 cards to deck

  let suits = ['♠️', '♦️', '♣️', '♥️']
  for (let i of suits) {
    for (let j of [
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
    ]) {
      cards.push(j + i)
    }
  }

  return cards
}

export function pointsFor(hand) {
  // TO DO: Write your code here
  let totalSum = 0
  let cardValue = []

  if (hand.length == 0) {
    return totalSum
  } else if (hand[0][0] == 'A' && hand[1][0] == 'A') {
    totalSum += 21
    return totalSum
  } else {
    for (let i = 0; i < hand.length; i++) {
      cardValue[i] = hand[i][0]

      switch (cardValue[i]) {
        case 'A':
          totalSum += 11
          break
        case '1':
          totalSum += 10
          break
        case 'J':
          totalSum += 10
          break
        case 'Q':
          totalSum += 10
          break
        case 'K':
          totalSum += 10
          break
        default:
          totalSum += Number(cardValue[i])
      }
      let acesCount = 0
      // Aces are worth 1 if the player is over 21, otherwise they remain unchanged.

      if (cardValue[i] == 'A') {
        acesCount += 1
      }
      if (totalSum > 21 && acesCount >= 1) {
        totalSum -= 10
      }
      if (totalSum > 21 && acesCount >= 2) {
        totalSum -= 10
      }
      if (totalSum > 21 && acesCount >= 3) {
        totalSum -= 10
      }
      if (totalSum > 21 && acesCount >= 4) {
        totalSum -= 10
      }
    }
  }

  return totalSum
}

export function playerTurn(deck, hand, logger = defaultLogger) {
  logger.info(`Your hand is ${hand.join(', ')}\n(${pointsFor(hand)} points)`)

  //Accept the choice from the player
  const action = window.prompt('What do you want to do? ("hit" or "stick")')

  switch (action) {
    case 'hit': {
      // TO DO: Draw a card
      // player gets an extra card
      logger.info('Hitting')
      hand.push(deck.shift())
      let aceCheck = []

      if (pointsFor(hand) > 21) {
        logger.info(
          `Your hand is ${hand.join(', ')}\n(${pointsFor(hand)} points)`
        )
        logger.info(LOSE_MESSAGE)
        return false
      } else {
        // It's still the player's turn
        return true
      }
    }
    case 'stick': {
      // End the player's turn
      return false
    }
    default: {
      // Unknown action

      break
    }
  }
}

export function play({ seed = Date.now(), logger = defaultLogger } = {}) {
  const shuffledDeck = shuffle(deck(), seed)
  let playerHand = [shuffledDeck.shift(), shuffledDeck.shift()]

  let isPlayerTurn = true
  console.log(seed)

  while (isPlayerTurn) {
    isPlayerTurn = playerTurn(shuffledDeck, playerHand, logger)
  }
  // The dealer would only play if the player has not bust <21.
  if (pointsFor(playerHand) < 21) {
    // TO DO: Dealer's turn
    let dealerHand = [shuffledDeck.shift(), shuffledDeck.shift()]
    logger.info(
      `dealerHand is ${dealerHand.join(', ')}\n(${pointsFor(
        dealerHand
      )} points)`
    )
    while (pointsFor(dealerHand) < 17) {
      dealerHand.push(deck().shift())
      logger.info(
        `dealerHand hand is ${dealerHand.join(', ')}\n(${pointsFor(
          dealerHand
        )} points)`
      )
    }
    if (pointsFor(playerHand) == pointsFor(dealerHand)) {
      logger.info(DRAW_MESSAGE)
    } else if (pointsFor(dealerHand) > 21) {
      logger.info(WIN_MESSAGE)
    } else if (pointsFor(playerHand) > pointsFor(dealerHand)) {
      logger.info(WIN_MESSAGE)
    } else {
      logger.info(LOSE_MESSAGE)
    }
  }
}

if (import.meta.main) {
  const { seed } = parse(Deno.args)
  play({ seed })
}
