import {
  assertEquals,
  assertThrows
} from 'https://deno.land/std/testing/asserts.ts'
import {
  Video,
  Customer,
  VideoStore,
  Rental,
  DVD,
  VendingMachine
} from './blockbuster_oop.js'

Deno.test('Customer.name', () => {
  const john = new Customer('John', 'Smith', '24/01/1980')
  assertEquals(john.name, 'John Smith')
})

// Fill out more tests below :)! assertEquals and assertThrows should be all you need, but there
// are "fancier" asserts available too, see https://deno.land/manual/testing/assertions
Deno.test('Video must have a title', () => {
  assertThrows(
    () => {
      new Video('', 1999, 40)
    },
    Error,
    'Video mush contain a title, year and runtime.'
  )
})

Deno.test('Video must have a year', () => {
  assertThrows(
    () => {
      new Video('Matilda', 0, 40)
    },
    Error,
    'Video mush contain a title, year and runtime.'
  )
})

Deno.test('Video must have a runtime', () => {
  assertThrows(
    () => {
      new Video('Matilda', 2000, 0)
    },
    Error,
    'Video mush contain a title, year and runtime.'
  )
})

Deno.test('Year must be above 1990', () => {
  assertThrows(
    () => {
      new Video('Matilda', 1889, 40)
    },
    Error,
    'The video year must be a given as a 4 digit number and before 1990'
  )
})

Deno.test('Year must be a number', () => {
  assertThrows(
    () => {
      new Video('Matilda', '2000', 40)
    },
    Error,
    'The video year must be a given as a 4 digit number and before 1990'
  )
})

Deno.test('runtime must be a number', () => {
  assertThrows(
    () => {
      new Video('Matilda', 2000, '40')
    },
    Error,
    'The runtime must be a number in mins and not less then 30 mins or greater then 300 mins.'
  )
})

Deno.test('runtime must be a greater then 30 mins', () => {
  assertThrows(
    () => {
      new Video('Matilda', 2000, 30)
    },
    Error,
    'The runtime must be a number in mins and not less then 30 mins or greater then 300 mins.'
  )
})

Deno.test('runtime must be a greater less then 300 mins', () => {
  assertThrows(
    () => {
      new Video('Matilda', 2000, 300)
    },
    Error,
    'The runtime must be a number in mins and not less then 30 mins or greater then 300 mins.'
  )
})

// Code for challenge 2.2 customer

Deno.test('First name is mandatory', () => {
  assertThrows(
    () => {
      new Customer('', 'smitch', '12/12/19978')
    },
    Error,
    'You must input a first and last name as well as a date of birth.'
  )
})

Deno.test('Last name is mandatory', () => {
  assertThrows(
    () => {
      new Customer('Zayn', '', '12/12/19978')
    },
    Error,
    'You must input a first and last name as well as a date of birth.'
  )
})

Deno.test('DoB name is mandatory', () => {
  assertThrows(
    () => {
      new Customer('Zayn', 'Shah', '')
    },
    Error,
    'You must input a first and last name as well as a date of birth.'
  )
})

Deno.test('date is invalid', () => {
  assertThrows(
    () => {
      new Customer('Zayn', 'Shah', '44/12/1997')
    },
    Error,
    'The date does not exist'
  )
})

Deno.test('age method', () => {
  const customer = new Customer('Zayn', 'Shah', '14/12/1997')
  assertEquals(customer.age(), 24)
})

Deno.test('joining first and last name, with a space', () => {
  const customer = new Customer('Zayn', 'Shah', '14/12/1997')
  assertEquals(customer.name, 'Zayn Shah')
})

Deno.test('Over 13', () => {
  assertThrows(
    () => {
      new Customer('Zayn', 'Shah', '10/12/2020')
    },
    Error,
    'too young'
  )
})
// Code for challenge 2.3 VideoStore
// overall video class
Deno.test('Must have less then 10 movie titles', () => {
  assertThrows(
    () => {
      new VideoStore(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'])
    },
    Error,
    'The store must contain more then 0 movies but cannot carry more then 10 movies.'
  )
})

Deno.test('Must have less then 0 movie titles', () => {
  assertThrows(
    () => {
      new VideoStore([])
    },
    Error,
    'The store must contain more then 0 movies but cannot carry more then 10 movies.'
  )
})

Deno.test('Video must be instantiated', () => {
  let video = new Video('matrix', 2000, 150)
  assertThrows(
    () => {
      new VideoStore(['not defined'])
    },
    Error,
    'Video stores contains videos that has not been recorded'
  )
})
// check to see if availability displays title and stock.
Deno.test('this availability', () => {
  let video1 = new Video('matrix', 2000, 150)
  let video2 = new Video('star', 2001, 120)
  let video3 = new Video('super', 2013, 90)
  const hmv = new VideoStore([video1, video2, video3])
  assertEquals(hmv.availability['star'], 3)
})
//findVideoByTitle method
Deno.test('find video by title and it exist', () => {
  let video1 = new Video('matrix', 2000, 150)
  let video2 = new Video('star', 2001, 120)
  let video3 = new Video('super', 2013, 90)
  const hmv = new VideoStore([video1, video2, video3])
  assertEquals(hmv.findVideoByTitle('star'), 1)
})

Deno.test('find video by title and it does not exist', () => {
  let video1 = new Video('matrix', 2000, 150)
  let video2 = new Video('star', 2001, 120)
  let video3 = new Video('super', 2013, 90)
  const hmv = new VideoStore([video1, video2, video3])
  assertEquals(hmv.findVideoByTitle('star wars'), null)
})
// isAvailable method
Deno.test('checking to see if available', () => {
  let video1 = new Video('matrix', 2000, 150)
  let video2 = new Video('star', 2001, 120)
  let video3 = new Video('super', 2013, 90)
  const hmv = new VideoStore([video1, video2, video3])
  assertEquals(hmv.isAvailable('matrix'), true)
})

Deno.test('checking error', () => {
  let video1 = new Video('matrix', 2000, 150)
  let video2 = new Video('star', 2001, 120)
  let video3 = new Video('super', 2013, 90)

  assertThrows(
    () => {
      const hmv = new VideoStore([video1, video2, video3])
      hmv.isAvailable('star wars')
    },
    Error,
    'video is undefined'
  )
})

Deno.test('checking if more then 0', () => {
  let video1 = new Video('matrix', 2000, 150)
  let video2 = new Video('star', 2001, 120)
  let video3 = new Video('super', 2013, 90)
  const hmv = new VideoStore([video1, video2, video3])
  assertEquals(hmv.isAvailable('matrix'), true)
})

// rentMethod test
Deno.test('not having customer argument', () => {
  let video1 = new Video('matrix', 2000, 150)
  let video2 = new Video('star', 2001, 120)
  let video3 = new Video('super', 2013, 90)

  assertThrows(
    () => {
      const hmv = new VideoStore([video1, video2, video3])
      hmv.rentVideo('star')
    },
    Error,
    'Customer is not instantiated and/or title is non-existant'
  )
})

Deno.test('not having valid video title', () => {
  let video1 = new Video('matrix', 2000, 150)
  let video2 = new Video('star', 2001, 120)
  let video3 = new Video('super', 2013, 90)
  let zayn = new Customer('zayn', 'Shah', '14/12/1997')

  assertThrows(
    () => {
      const hmv = new VideoStore([video1, video2, video3])
      hmv.rentVideo('star wars', zayn)
    },
    Error,
    'Customer is not instantiated and/or title is non-existant'
  )
})
