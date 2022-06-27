import {
  assert,
  assertEquals,
  assertStringIncludes,
  assertArrayIncludes
} from 'https://deno.land/std/testing/asserts.ts'
import { deck, pointsFor, play } from './blackjack.js'

import { getTestLogger } from './support/logging.ts'
import { playerChooses, takePlayerTurn } from './support/testing.js'

Deno.test("deck(): a fresh deck in 'new deck order'", () => {
  // prettier-ignore
  assertEquals(deck(), [
    "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS",
    "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD",
    "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC",
    "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH"
  ])
})

Deno.test(
  'pointsFor() calculates the correct amount of points when no cards are present',
  () => {
    assertEquals(pointsFor([]), 0)
  }
)

Deno.test(
  'pointsFor() calculates the correct amount of points when only number cards are used',
  () => {
    assertEquals(pointsFor(['7H', '2D']), 9)
  }
)

Deno.test(
  'pointsFor() calculates the correct amount of points when only number and face cards are used',
  () => {
    assertEquals(pointsFor(['3D', 'JC', 'QH', '2H', 'AC']), 36)
  }
)

Deno.test(
  'pointsFor() calculates the correct amount of points when there are only two aces',
  () => {
    assertEquals(pointsFor(['AD', 'AC']), 21)
  }
)

Deno.test(
  'pointsFor() calculates the correct amount of points when there are two aces and another card',
  () => {
    assertEquals(pointsFor(['2D', 'AD', 'AC']), 24)
  }
)

Deno.test(
  'playerTurn(): choosing to hit outputs a "Hitting" message',
  async () => {
    const { logger, handler } = await getTestLogger()
    const c = playerChooses(['hit', 'stick'])

    await takePlayerTurn({ logger })
    assertArrayIncludes(handler.messages, ['Hitting'])
    c.restore()
  }
)

Deno.test('playerTurn(): choosing to hit shows an updated hand', async () => {
  const { logger, handler } = await getTestLogger()
  const c = playerChooses(['hit', 'stick'])

  await takePlayerTurn({ logger })
  const handInfo = handler.messages.filter((m) => m.startsWith('Your hand is'))

  // Check we have a 2nd instance of "Your hand is" message
  assert(handInfo[1])

  // Check our hand is updated
  assertStringIncludes(handInfo[1], 'Your hand is AS, 2S, 3S')
  c.restore()
})

Deno.test(
  'playerTurn(): choosing to hit shows an updated point total',
  async () => {
    const { logger, handler } = await getTestLogger()
    const c = playerChooses(['hit', 'stick'])

    await takePlayerTurn({ logger })
    const handInfo = handler.messages.filter((m) =>
      m.startsWith('Your hand is')
    )

    // Check we have a 2nd instance of "Your hand is" message
    assert(handInfo[1])

    // Check our hand is updated
    assertStringIncludes(handInfo[1], '(16 points)')
    c.restore()
  }
)

Deno.test(
  "playerTurn(): hitting and busting ends the player's turn",
  async () => {
    const { logger, handler } = await getTestLogger()
    const c = playerChooses(['hit'])

    await takePlayerTurn({ logger, seed: 1595870164262 })

    assertEquals(c.calls.length, 1)
    c.restore()
  }
)

Deno.test(
  "playerTurn(): hitting and busting displays a 'you lose' message",
  async () => {
    const { logger, handler } = await getTestLogger()
    const c = playerChooses(['hit'])

    await play({ logger, seed: 1595870164262 })
    assertArrayIncludes(handler.messages, ['You lose!'])
    c.restore()
  }
)
