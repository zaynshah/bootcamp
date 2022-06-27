import {
  assertEquals,
  assertThrows
} from 'https://deno.land/std/testing/asserts.ts'
import { Card, Hand, Deck } from './blackjack_oop.js'

Deno.test('Card.rank', () => {
  const card = new Card('J', 'H')
  assertEquals(card.rank, 'J')
})

Deno.test('Card.suit', () => {
  const card = new Card('J', 'H')
  assertEquals(card.suit, 'H')
})

Deno.test('Card.suit is uppercased', () => {
  const card = new Card('J', 'h')
  assertEquals(card.suit, 'H')
})

Deno.test('Card.points', () => {
  const card = new Card('J', 'H')
  const anotherCard = new Card('3', 'S')

  assertEquals(card.points, 10)
  assertEquals(anotherCard.points, 3)
})

Deno.test('Card.toString()', () => {
  const card = new Card('J', 'H')
  const anotherCard = new Card('3', 'S')

  assertEquals(card.toString(), 'JH')
  assertEquals(anotherCard.toString(), '3S')
})

Deno.test('Hand only accepts Cards', () => {
  assertThrows(() => {
    new Hand(['AC', '7H'])
  }, TypeError)
})

Deno.test('Hand.points: empty hand', () => {
  assertEquals(new Hand([]).points, 0)
})

Deno.test('Hand.points: number cards only', () => {
  const hand = new Hand([new Card('7', 'H'), new Card('2', 'D')])
  assertEquals(hand.points, 9)
})

Deno.test('Hand.points: number cards and face cards', () => {
  const hand = new Hand([
    new Card('3', 'D'),
    new Card('J', 'C'),
    new Card('Q', 'H'),
    new Card('2', 'H'),
    new Card('A', 'C')
  ])
  assertEquals(hand.points, 36)
})

Deno.test('Hand.points: two aces only', () => {
  const hand = new Hand([new Card('A', 'D'), new Card('A', 'C')])
  assertEquals(hand.points, 21)
})

Deno.test('Hand.points: two aces with other cards', () => {
  const hand = new Hand([
    new Card('2', 'D'),
    new Card('A', 'D'),
    new Card('A', 'C')
  ])
  assertEquals(hand.points, 24)
})

Deno.test("Deck: generating a fresh deck in 'new deck order'", () => {
  const deck = new Deck()

  // Putting everything together
  const cardsInDeck = Array.from(deck.cards).map(() => deck.draw().toString())

  // prettier-ignore
  assertEquals(cardsInDeck, [
    "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS",
    "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD",
    "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC",
    "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH"
  ])
})
