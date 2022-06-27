import {
  assertEquals,
  assertThrows
} from 'https://deno.land/std/testing/asserts.ts'
import { Video } from './blockbuster_oop.js'

Deno.test('Video.displayTitle()', () => {
  const video = new Video('The Matrix', 1999, 150)
  assertEquals(video.displayTitle(), 'The Matrix (1999)')
})

Deno.test('Video.rentalPrice() - regular movie from this year', () => {
  const video = new Video('Mission Impossible 8', new Date().getFullYear(), 90)
  assertEquals(video.rentalPrice(), 1000)
})

Deno.test('Video.rentalPrice() - regular movie from previous years', () => {
  const video = new Video('The Mummy', 1999, 124)
  assertEquals(video.rentalPrice(), 500)
})

Deno.test('Video.rentalPrice() - extra long movie from this year', () => {
  const video = new Video("Zack Snyder's Justice League", new Date().getFullYear(), 242)
  assertEquals(video.rentalPrice(), 2000)
})

Deno.test('Video.rentalPrice() - extra long movie from previous years', () => {
  const video = new Video('Fellowship of the Ring: Extended Edition', 2001, 250)
  assertEquals(video.rentalPrice(), 1000)
})

Deno.test('Video.displayPrice()', () => {
  const video = new Video('The Matrix', 1999, 150)
  assertEquals(video.displayPrice(), '£5.00')
})

Deno.test('Video must have a title', () => {
  assertThrows(() => {
    new Video(undefined, 2010, 90)
  })
})