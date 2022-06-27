# Week 1 - Mastery quiz

<hr>

1. Without running it, what will the result of this code be?:

```js
let names = []

for (let a of ['Jackson', 'Carter', 'Tyler']) {
  for (let b of ['Lindsay', 'Kennedy']) {
    names.push(`${b} ${a}`)
  }
}

console.log(names)
```

<hr>

2. Do these two lines of code imply the same behaviour?:

```js
if (pointsFor(playerHand) > 21) return logger.info(LOSE_MESSAGE)
```

```js
if (22 <= pointsFor(playerHand)) {
  return logger.info(LOSE_MESSAGE)
}
```

<hr>

3. What method should go in place of `????` below:

```js
const scores = [1, 5, 3]
const doubledScores = scores.????(score => score * 2)

console.log(doubledScores) // [2, 10, 6]
```

<hr>

4. Is the code below valid JavaScript? Why, or why not?:

```js
let cards = ['AH', '3D', '7C']

for cards {
  console.log(card)
}
```

<hr>

5. Is this a useful test case? Why, or why not?:

```js
Deno.test('pointsFor(): empty hand', () => {
  assertEquals(pointsFor([]), 0)
})
```

<hr>

6. Do these two snippets imply the same behaviour?:

```js
let score = 0
for (const card of hand) {
  score += pointsForCard(card)
}
```

```js
let score = hand.reduce((sum, card) => sum + pointsForCard(card), 0)
```

<hr>

7. What's the problem with this piece of code?:

```js
function generateSeed() {
  return Math.floor(Math.random() * 10000) // returns a random integer from 0 to 9999
}

const shuffledDeck = shuffle(deck(), generateSeed())
logger.info(`Seed to reproduce shuffle: ${generateSeed()}`)
```

<hr>

8. Without running it, what will the output of this code be? (Think carefully before answering):

```js
const names = ['Alex', 'Bob', 'Charles', 'David']

let index = 0

while (index <= 3) {
  index += 1
  console.log(names[index])
}
```

<hr>

9. Will the results of these two snippets be the same?:

```js
const mainBet = '100'
const sideBet = '50'

const prize = mainBet + sideBet
console.log(prize)
```

```js
const mainBet = 100
const sideBet = 50

const prize = mainBet + sideBet
console.log(prize)
```

<hr>

10. Without running it, what will the output of this code be?

```js
if ([1, 2, 3] === [1, 2, 3]) {
  console.log('Equal!')
} else {
  console.log('Not equal!')
}
```

<hr>

11. What is the Deno REPL useful for?

<hr>

12. Choose all of the true statements below about Test Driven Development

- A. TDD is a faster way of writing code
- B. TDD give you more confidence that the code that you write will be bug free
- C. TDD means that you cannot write buggy code
- D. TDD is when you write your tests first followed by your code
- E. TDD makes it easier for other developers to understand your code

<hr>

13. Which of these is the best variable name?

- A. `let array = [141,241,342,424,542]`
- B. `let numbers = [141,241,342,424,542]`
- C. `let randomNumbers = [141,241,342,424,542]`
- D. `let arrayOfNumbers = [141,241,342,424,542]`

<hr>

14. What is the command to run the tests in a file named "task.test.js" using deno?

<hr>

### Answers

Once you're done, check your answers [here](quiz_answers.md).
