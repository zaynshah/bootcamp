# Fundamentals I: Procedural programming with JavaScript 🃏 <!-- omit in toc -->

## Contents <!-- omit in toc -->

- [Learning Objectives](#learning-objectives)
- [Previous Sessions](#previous-sessions)
- [Before you get started](#before-you-get-started)
  - [Cloning This Repository](#cloning-this-repository)
- [CLI Blackjack 🃏](#cli-blackjack-)
  - [Project Specification](#project-specification)
    - [The Game](#the-game)
    - [The order of play](#the-order-of-play)
    - [The Dealer's moves](#the-dealers-moves)
    - [The interface](#the-interface)
    - [Example games](#example-games)
    - [Pseudo-randomness & seeds](#pseudo-randomness--seeds)
  - [Getting started](#getting-started)
  - [Challenge 1: Generating our deck](#challenge-1-generating-our-deck)
  - [Challenge 2: Calculating points for hands](#challenge-2-calculating-points-for-hands)
  - [Challenge 3: Implement the Player's round](#challenge-3-implement-the-players-round)
  - [Challenge 4: Implement the Dealer's round, and determine the winner](#challenge-4-implement-the-dealers-round-and-determine-the-winner)
  - [Challenge 5: Test your code](#challenge-5-test-your-code)
  - [Mastery quiz](#mastery-quiz)
  - [Above and beyond](#above-and-beyond)
    - [Implement traditional blackjack rules](#implement-traditional-blackjack-rules)
    - [Implement betting](#implement-betting)
    - [Integrate emoji](#integrate-emoji)
    - [Support multiple players](#support-multiple-players)
    - [Support multiple decks](#support-multiple-decks)
    - [Create an AI player](#create-an-ai-player)
- [Glossary](#glossary)

## Timetable <!-- omit in toc -->

Below is an example pace at which you might work through the materials:

| Time                | Focus                                                                                                                                                                                                                                                                                                                                                        | Workshop                                                                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Monday morning      | Intro talk, setting up your workstation, installing Homebrew, Deno, IDE etc.                                                                                                                                                                                                                                                                                 | [Code of Conduct](.//workshops/code_of_conduct.md), [Intro to Git](./workshops/intro_to_git.md), Our Pedagogy, [Pair Programming](./workshops/pair_programming.md) |
| Monday afternoon    | Read through specification of the blackjack game. Draw a diagram of your solution and compare it to the model diagram. Watch the video on pseudo-randomness.                                                                                                                                                                                                 | (Optional) Code Review & Demos                                                                                                                                     |
| Tuesday morning     | Read through materials on array methods and learn about equality in JS. Become familiar with running Deno programs and test suites and aim to complete deck generation and point calculation for a single card.                                                                                                                                              | [Intro to Blackjack](./workshops/01_intro_to_blackjack.md)                                                                                                         |
| Tuesday afternoon   | Finish [Challenge 2](#challenge-2-calculating-points-for-hands) (extend solution to cover point calculation for all kinds of hand). Refactor your solution (if you have time).                                                                                                                                                                               | (Optional) Code Review & Demos                                                                                                                                     |
| Wednesday morning   | Read through code implementing the Player's turn. Read up on `switch` statements (if needed). Complete [Challenge 3](#challenge-3-implement-the-players-round).                                                                                                                                                                                              | [REPL and Array Methods](./workshops/02_repl_array_methods.md)                                                                                                     |
| Wednesday afternoon | Implement the Dealer's turn (the first part of [Challenge 4](#challenge-4-implement-the-dealers-round-and-determine-the-winner)).                                                                                                                                                                                                                            | (Optional) Code Review & Demos                                                                                                                                     |
| Thursday morning    | Complete Challenge 4 (win/lose conditions). Review your implementation of blackjack and ensure all tests are passing. Refactor or clean up your solution if you need.                                                                                                                                                                                        | [Debugging and Loops](./workshops/03_debugging_loops.md.md)                                                                                                        |
| Thursday afternoon  | Take the [Week 1 Mastery Quiz](./quiz.md).                                                                                                                                                                                                                                                                                                                   | (Optional) Code Review & Demos                                                                                                                                     |
| Friday              | **If you scored more 9 or more in the Mastery Quiz** - Congratulations 🎉! You've mastered the concepts for this week. You can move on to the [Above & beyond challenges](#above-and-beyond).                                                                                                                                                                |                                                                                                                                                                    |
|                     | **If you scored less than 9 in the Mastery Quiz** - Take the time you need to review the concepts you're unsure about (the guidance in the Quiz answers will point you to the materials to review). Once you're comfortable with all the concepts in the quiz, you can move on to the [Above & beyond challenges](#above-and-beyond) for any remaining time. |                                                                                                                                                                    |

## Learning Objectives

By the end of this week a learner will be able to

- Identify different data types in JavaScript (string, number, array and objects)
- Explain the difference between console.log() and return in Javascript
- Describe the benefits of using unit tests in software engineering
- Write code that transforms an array by using map
- Write code that calculates an output from an array using reduce
- Write code that manipulates arrays using push and shift
- Write code that accepts input from the command line
- Write code that acts conditionally depending on user input
- Describe what TDD is and why it is beneficial for the software development process
- Run tests by using Deno
- Debug failing tests by using Deno
- Write unit tests that tests existing code
- Write unit tests that test their own code

## Previous Sessions

You can find the previous recorded sessions of this week here on Rewatch

- [Cohort 1 Workshops](https://sigmalabs.rewatch.com/collection/782/week-1-procedural-programming-with-javascript)

## Before you get started

Before jumping into our first project. We'll need to make sure that you have completed all of the setup steps.

Please read and complete the steps in the [Getting Setup](./../getting-setup.md) guide.

It's important that you've got all of the software installed that we require before continuing.

### Cloning This Repository

To get started you'll want to fork and clone this repo so that you can work on the materials more easily.

1. Fork this repo on Github
2. Run this command

> git clone https://github.com/Sigma-Labs-XYZ/curriculum.git

3. When prompted, you'll need to generate a Personal Access Token to use instead of a password. You should follow the instructions [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
4. Enter your username and PAT as the password
5. Open the cloned repo in VSCode

## CLI Blackjack 🃏

We'll start things off by creating a simple one player [blackjack](https://en.wikipedia.org/wiki/Blackjack) game which we can play in our command line. Here's a sample of what our game will look like when it's finished:

<img src='https://user-images.githubusercontent.com/636814/90757616-c0df6a00-e2d5-11ea-8ff1-c191869848df.gif' width='650'>

### Project Specification

Almost every software project will start with a **specification**. At minimum a specification should be a clear and detailed description of what we're building. A specification might also include _user stories_ and _automated tests_.

- [:link: - Writing user stories](https://www.gov.uk/service-manual/agile-delivery/writing-user-stories) (10 min read)
- [:link: - What is a unit test?](https://dev.to/codingpizza/what-is-a-unit-test-1e1m) (10 min read)

For this first week, we're providing quite a detailed specification for the project your building. In coming weeks you'll have to play a larger role in defining the specification for future projects.

#### The Game

We're creating a simple blackjack game that we can play from our terminal. We're going to be using the rules from a variant of blackjack called **French/German Blackjack** which is slightly simpler than normal blackjack. (If you have time this week, you'll be able to expand your program to cover the rules of traditional blackjack too 🙂).

In French/German blackjack, each card is worth a certain number of points:

| Rank | Points |
| ---- | ------ |
| A    | 11     |
| 2    | 2      |
| 3    | 3      |
| 4    | 4      |
| 5    | 5      |
| 6    | 6      |
| 7    | 7      |
| 8    | 8      |
| 9    | 9      |
| 10   | 10     |
| J    | 10     |
| Q    | 10     |
| K    | 10     |

The Player's goal is to get as close to 21 as possible without going over. Usually the number of points in your hand is very easy to calculate. Let's say we start with a hand of A♠️ and 5♦️. Checking the table above, we have A = 11 and 5 = 5 (of course), so our hand is worth 16.

We can choose to draw another card (**"hit"**) or take our chances that the Dealer won't beat 16 points without going over 21 (**"stick"**). Let's say we hit and draw a Q♥️. Our hand is now worth 11 + 5 + 10 = 26 points: we went over 21 and we lose the round.

There are two cases special cases for calculating points. If our first two cards are two aces, our hand is worth 21 points (rather than 22 points as you'd expect). Also, if we have a hand with 6 or more cards that's worth less than 21 points we round it up to 21. So, for example, 5♣️, 2♠️, 3♦️, 4♣️, 2♣️, 3♠️ would be worth 21 points rather than 19. Both of these special cases are quite rare!

#### The order of play

Our game of blackjack proceeds like so:

1. The Player is dealt the top two cards from the deck.
2. If the Player already has 21 (a "natural" blackjack), go to step 4.
3. The Player's turn. The Player has the option to either "hit" or "stick". If they "hit" they draw another card. If this new card takes them over 21, go to step 5. A Player can "hit" as many times as they want. When a Player opts to "stick", proceed to step 4.
4. The Dealer's turn: see the next section.
5. Deciding a winner: if the Player went over 21, the Dealer wins (without the Dealer taking a turn). If the Player stayed under 21, but the Dealer went over 21, the Player wins. If both participants stayed under 21, the participant with most points wins - if both the Player and Dealer have the same number of points, the game is a draw.

> ℹ️ **Top tip**: Diagramming is a useful technique when developing programs. Try creating a simple flowchart showing the stages of our game. Once you've had a go, compare it with the example diagram below. Where (if anywhere) does your diagram diverge? Try printing off the example diagram (or using your own), going through different game scenarios and check that it matches your understanding.

<details>
  <summary>Show exemplar diagram</summary>

![](https://user-images.githubusercontent.com/636814/90762544-1e2ae980-e2dd-11ea-8f0d-316979489fd1.png)

</details>

#### The Dealer's moves

In blackjack the Player chooses their strategy, but the Dealer has to play according to a simple rule. If their hand is worth less than 17 points, they "hit" (draw another card). Otherwise they "stick" and end their turn. It's that simple!

#### The interface

We're building this program as a [command line program](https://en.wikipedia.org/wiki/Command-line_interface); in future weeks we'll look at extending our game with a web interface. For the basic version of our program, the Player only needs to issue one of two commands: "hit" and "stick".

To represent our cards, we'll use the numbers 1-10, A, J, Q, or K for the rank, followed by S, D, C or H (for spades, diamonds, clubs or hearts). For example, `7H` is the 7 of hearts, and `JC` is the jack of clubs. In the _Above and beyond_ section, you can try extending the program to use nicer looking emoji instead of letter for suits (e.g. 7♥️).

Our finished program should look like this:

<img src='https://user-images.githubusercontent.com/636814/88301379-767dc400-ccfc-11ea-96b1-262ee9e86c64.png' width='500'>

The code skeleton provided has the [ask library](https://github.com/jozsefsallai/ask) already set up to handle capturing input from the user.

#### Example games

Player busts:

```
(Seed: 1595333921566)

Your hand is 8H, 6H
(14 points)
? What do you want to do? ("hit" or "stick") hit
Hitting
You draw QD
Your hand is 8H, 6H, QD
(24 points)
You lose!
```

Dealer busts:

```
(Seed: 1595333898151)

Your hand is 3S, 10D
(13 points)
? What do you want to do? ("hit" or "stick") hit
Hitting
You draw 5C
Your hand is 3S, 10D, 5C
(18 points)
? What do you want to do? ("hit" or "stick") stick
Dealer's hand is 6C, 9C
(15 points)
Dealer draws 7D
Dealer's hand is 6C, 9C, 7D
(22 points)
You win!
```

Dealer wins:

```
(Seed: 1595333973866)

Your hand is QH, 6D
(16 points)
? What do you want to do? ("hit" or "stick") stick
Dealer's hand is 9H, KS
(19 points)
You lose!
```

Draw:

```
(Seed: 1595334258992)

Your hand is KS, JC
(20 points)
? What do you want to do? ("hit" or "stick") stick
Dealer's hand is 10H, JS
(20 points)
Draw!
```

#### Pseudo-randomness & seeds

What does the first line in our examples mean? Before each game, we "randomly" shuffle our deck of cards. However, if every game were truly completely unpredictable it would be very difficult to write automated tests. In reality, our shuffling is pseudorandom: it appears random (and has most of the same properties as a true random shuffle), but with the same inputs, it will produce the same output.

Our two inputs are our deck (which won't change) and a number called a "seed". Our seed lets us reproduce a shuffle (and thus a game) exactly. By default, we use the number of seconds which have passed since Jan 1 1970. This might seem odd, but this in fact is a very common programming idiom called [UNIX time](https://en.wikipedia.org/wiki/Unix_time) - in JS we can fetch the current unit time with `Date.now()`.

Unless we literally play two games in the same second, every game will therefore be different (since the inputs to our pseudorandom shuffle, our deck and seed, will be different). However, we can use a fixed seed instead of `Date.now()` to recreate a game we've played in the past by passing the `--seed` option. For example running:

```
deno run blackjack.js --seed 1595334258992
```

Will replay the draw game above. We use this same technique to allow us to write automated test cases.

It's actually not just our program which will always produce the same (non-random) output given the same inputs: this is actually a fundamental property of computers. To achieve "true" randomness on a computer you literally have to, for example, tune a radio receiver between stations and use the atmospheric noise to seed your PRNG (pseudorandom number generator) - this is what [RANDOM.ORG](https://www.random.org/faq/) does. Similarly, Chrome uses your mouse movements (among other things) to seed its PRNGs - while technically not truly random, these are unpredictable enough to give a very convincing illusion of true randomness.

If you're interested in this topic, you can learn more here:

<img src="https://img.youtube.com/vi/SxP30euw3-0/0.jpg" height="200">

- [:link: - Random Numbers - Numberphile](https://www.youtube.com/watch?v=SxP30euw3-0) (10 min watch)

<br>
<hr>
<br>

### Getting started

We've provided some starter code in `blackjack.js` which will be the basis of your blackjack program. We can play a game by running:

```
deno run blackjack.js
```

Right now our game is totally broken - but that's expected! We should see some output like this:

```
Your hand is ,
(undefined points)
? What do you want to do? ("hit" or "stick")
```

The first line is missing the cards in our hand, because we haven't generated our deck yet (Challenge 1). The second line reports our hand is worth `undefined points`, because we haven't taught our program to calculate points yet (Challenge 2).

You're provided with automated tests in `blackjack_challenge_tests.js`. Initially all the tests should **fail** when you run:

```
deno test blackjack_challenge_tests.js
```

Once all the tests are passing, you know you've successfully completed the 4 challenges :relaxed:.

Sometimes it can be useful to run a subset of tests, you can do this by adding a `--filter` option to `deno test`. For example, to run just the tests for Challenge 2, run:

```
deno test --filter "pointsForHand()" blackjack_challenge_tests.js
```

You're also provided with an additional file `blackjack_student_tests.js`, where you're encouraged to write your own test cases as you go along.

In order to test our blackjack game, we'll check the output of our game (looking for messages like "You lose!"). To achieve this we need to use Deno's logging functionality, rather than our usual `console.log()` calls. Whenever you want to output a message in your `blackjack.js` program, use `logger.info()` rather than `console.log()`.

<br>
<hr>
<br>

### Challenge 1: Generating our deck

First we'll generate a deck of cards in new deck order (we won't have an jokers in our deck). We want the function `deck()` to return an array like this:

```js
[
  'AS', '2S', '3S', '4S', ... // all spades
  'AD', '2D', ... // all diamonds
  'AC', '2C', ... // all clubs
  'AH', '2H', ..., '10H', 'JH', 'QH', 'KH'
]
```

You can see the exact output we're expecting by looking at the first test case in `blackjack_challenge_tests.js`.

<details>
  <summary>Hints if you're stuck</summary>

(Try and read as few hints as you can, working from top to bottom).

1. We want to go through every suit and every rank, so we should be thinking about loops. Refresh yourself on [for of loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) in JS.
2. One nice way to solve the problem is to use [nested loops](https://codingrooms.com/nested-loops-javascript/). What should be our inner and outer loop? (Does it matter?)
3. The [`.push()` method]() adds an element to an array.
</details>

<br>
<hr>
<br>

### Challenge 2: Calculating points for hands

Next, we'll write a method `pointsForHand`, which takes an array of cards (for example, `['7H', '2D']`) and returns their point value (`9` for our example). Don't forget about the special cases explained in [_The game_ section](#the-game).

Since our `hand` is an array, getting familiar with some simple array methods will be useful for this challenge:

- [:link: - 10 JavaScript array methods you should know](https://dev.to/frugencefidel/10-javascript-array-methods-you-should-know-4lk3) (10 min read)

One common pitfall you might encounter in this challenge is that you can't compare two array in the normal way. For example if we wanted to check if our hand was the ace of clubs and spades, we might naively write:

```js
export function pointsForHand(cards) {
  if (cards === ['AC', 'AS']) {
    logger.info("This isn't logged!")
  }
}
```

But this code won't work. To discover why, let's read a snippet of the excellent [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS):

- [:link: - Comparisons section of YDKJS Get Started, Chapter 2](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch2.md#comparisons) (15 min read)

There are plenty of ways to solve this, for example, I could check the value at index `0` and `1` instead:

```js
export function pointsForHand(cards) {
  if(cards[0] === 'AC' && cards[1] === 'AC']) {
    logger.info("This is logged!")
  }
}
```

<details>
  <summary>Hints if you're stuck</summary>

(Try and read as few hints as you can, working from top to bottom).

1. Start by trying to split the rank and the suit of a card. Perhaps start by getting rid of the last character of each card (we don't care about the suit for the purposes of point calculation).
2. For a non-picture card, have a look at the [`parseInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt). For picture cards, a [`switch` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) will work fine. (Is there a more elegant solution?).
3. Ignore the special cases to start with. To calculate the points for a normal hand, a good approach is to start from 0 and increment the score for each card in our hand:

```js
export function pointsForHand(cards) {
  let score = 0
  cards.forEach((card) => (points += pointsForCard(card)))
}
```

We can make this more elegant using the [reduce method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

</details>

> ℹ️ **Top tip**: `pointsForHand` is actually quite a powerful method. Can we decompose `pointsForHand` into smaller building blocks? For example, what if we wrote a `pointsForCard` method which gave us the numerical points for a single card.
>
> Try writing some smaller functions to make your `pointsForHand` function simpler (we often call these helper functions/methods) and write tests for them in `blackjack_student_tests.js`

<br>
<hr>
<br>

### Challenge 3: Implement the Player's round

This challenge is less about writing code and more about reading code (an equally important skill when you're a developer!). Finish off the `playerTurn()` function. Think about:

- What should happen for the "hit" and "stick" actions?
- What does the return values of the function represent?
- What special cases need handling?
- What does the `default: { break }` section mean?

For guidance, have a look at the [Example games](#example-games) section. Your goal is to get the game playable up until the point that the Dealer enters.

> ⚠️ **Note**: Make sure you use `logger.info()` rather than `console.log()` to get the tests for Challenges 3 and 4 passing.

<details>
  <summary>Hints if you're stuck</summary>

(Try and read as few hints as you can, working from top to bottom).

1. The return value of `playerTurn()` determines the value of `isPlayerTurn`. What does this variable name tell you?
2. The `push` and `shift` methods we've encountered already will help us with the "hit" action.
3. Don't forget to handle the case where a Player busts.
</details>

<br>
<hr>
<br>

### Challenge 4: Implement the Dealer's round, and determine the winner

Next, you'll need to implement [the Dealer's moves](#the-dealers-moves).

At the start of the Dealer's round, give the Dealer two cards from the top of the deck.

Just like in the Player's round, every time the Dealer "hits", you should log a line with the Dealer's hand and current point total in the same format, with `Dealer's hand is` replaced with `Your hand is`. (See [Example games](`#example-games`)).

Lastly, determine who won the game. Use `logger.info` and the variables `WIN_MESSAGE`, `LOSE_MESSAGE` and `DRAW_MESSAGE` to announce the result (this ensures our automated tests can properly check your implementation).

<details>
  <summary>Hints if you're stuck</summary>

(Try and read as few hints as you can, working from top to bottom).

1. For the Dealer's strategy, we continue some action until a condition is met. A [`while` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) should be helpful here.
2. Don't forget: there are multiple conditions which trigger victory/defeat for either participant. Make sure you cover them all. Perhaps draw out a list or table on pen-and-paper to make sure your comfortable with the logic for deciding a winner.
</details>

### Challenge 5: Test your code

Before moving onto the Mastery Quiz, you should confirm that you code is working properly by writing tests. You should write up to ten tests. To get you started here are some ideas for tests

1. A test that confirms that the dealer loses when Bust
2. A test that confirms that the player wins when they have the higher score
3. A test that confirms that the player loses when they have the lower score
4. A test that confirms that the player and dealer take alternating turns
5. ...

These tests will be useful when you move onto the **Above And Beyond** section since you'll be able to confirm that your game still works even when you extend it.

<br>
<hr>
<br>

### Mastery quiz

Once you've completed the core project, have a go at the [Mastery Quiz for this week](quiz.md).

If you score 9/10 or more, move on to the **Above and beyond** challenge below. Otherwise, take the time to review the materials for the questions you got wrong.

### Above and beyond

Congratulations for making it this far, you've completed your first, non-trivial program 🎉.

Now it's time to have some fun, extending your program in interesting ways. Below are some ideas of ways to take your code to the next level, but if you have an idea of your own feel free to pursue it! Whichever challenge you take on, don't forget to write tests for you new features!

#### Implement traditional blackjack rules

We've successfully implemented a simplified version of blackjack (French/German blackjack). An obvious next step would be to extend this to cover traditional blackjack rules. Specifically we'll need to handle:

- Aces, which in traditional blackjack can be worth 1 _or_ 11. (How would that effect our `pointsForHand()` method?) This also introduces changes to the Dealer's behaviour due to the introduction of a "soft" and "hard" seventeen.
- Splitting: when a Player's hand contains two cards of the same value, they can choose to split and play out the two hands separately.

#### Implement betting

Most people don't play blackjack for fun, but to win some money 💵! A great challenge is to integrate a betting system into your game. This could be as simple or ambitious as you'd like.

At it's simplest, allow the Player to bet a certain number of chips at the start of the round and calculate the payout at the end. To make it more complex, you could let the Player play multiple games with a persistent "purse" of money, could add in rules like "doubling down" and insurance/side bets.

#### Integrate emoji

A nice UI improvement would be to use the special emoji used for playing card suits (e.g. ♣). This is trickier than it seems because emoji are "multibyte characters", so they'll need some special handling. Start by watching this talk:

<img src="https://img.youtube.com/vi/jeIBNn5Y5fI/0.jpg" height="200">

- [:link: - Computer Stuff They Didn't Teach You #2 - Code Pages, Character Encoding, Unicode, UTF-8 and the BOM](https://www.youtube.com/watch?v=jeIBNn5Y5fI) (20 min watch)

#### Support multiple players

Typically blackjack is played with 3-5 players. Why not extend your game to allow multiple players (for now, that would just mean multiple people taking turns making decisions via the same command-line - online play etc. is too advanced for now!). Perhaps you could use `ask` to prompt each Player for their name when the game begins.

Keeping tracks of turns and hands for a variable number of players is an interesting challenge. Think about what data you'd need to store to cleanly solve this challenge.

#### Support multiple decks

A relatively easy extension would be to shuffle together multiple decks; something casinos do to combat card counting and increase their edge. Perhaps you could provide the number of decks used as a [command line argument](https://deno.land/std/flags/README.md) to your program.

#### Create an AI player

AI is all the rage these days, so far an ambitious challenge, try creating an AI player to take on the Dealer! A simple rules-based AI is probably best, here are a couple of basic strategies to inspire you:

- [:link: - Blackjack Basic Strategy](http://web.archive.org/web/20201108101718/https://www.cs.bu.edu/~hwxi/academic/courses/CS320/Spring02/assignments/06/basic-strategy.html)
- [:link: - What You Need To Know Before Blowing Your Money At The Blackjack Table
  ](https://www.businessinsider.com/what-you-need-to-know-before-going-broke-at-the-blackjack-table-2012-3?r=US&IR=T)

Think about testing: how would you go about validating that your AI is working as expected?

<br>
<hr>
<br>

## Glossary

(Items at the top are new this week).

- **Loop** - A loop is a sequence of instructions that is continually repeated until a certain condition is reached.
- **Pseudo-randomness** - Behaviour that, although produced by a completely deterministic and repeatable process, is seemingly unpredictable and appears have no pattern.
- **Runtime** - A runtime system that provides an environment in which programs run. Runtime systems are the bridge between the code you write and your machine's operating system.
- **Seed** - A special number used to reproduce the data given by a pseudorandom number generator.
- **Switch statement** - A switch statement checks the value of a variable and compares it with multiple cases. Once the case match is found, a block of statements associated with that particular case is executed.
- **Testing** - Checking by means of actual execution whether a program behaves in the desired manner.
- Array - An ordered collection/list of items.
- Command line/Command line interface (CLI) - A text-based interface that is used to operate software.
- Conditional - A conditional statement tells a program to execute different actions depending on whether a condition is true or false. For example: "if the account balance is less than 0, freeze the account" is an example of a conditional statement.
- Floating point number/float - A number with a decimal point.
- Function - A named section of a program that performs a specific task.
- Git - The most popular version control system.
- Github - A popular platform for hosting Git repositories.
- Integer - A whole number.
- JavaScript - JavaScript is a programming language commonly used in web development.
- Object - JavaScript's Object data type associates names (or keys) with values. For example, the object `{ 'Johnson': '+440773141214', 'Lewis': '+4141915901' }` associates surnames and telephone numbers.
- Pipes - A pipe is a technique for passing information from one program process to another. For example the command `ls -1 | wc -l` passes the result of `ls` program to the `wc` program to count the number of files in the current directory.
- Program/script - A program is a set of instructions that a computer follows in order to perform a particular task. For a language like JavaScript, Python, and Ruby which can execute programs from just the source code, a "script" is the same as a "program".
- Repository/repo - A (Git) repository tracks all the files and changes for a single project.
- Unix - The operating system that forms the basis of Linux and macOS (but not Windows). Most web servers run on Unix environments, so Unix environments are usually preferred to Windows by web developers.
- Version control - Version control is a system that records changes to a file or set of files over time. By carefully recording changes, version control systems let you undo mistakes, compare versions of a program, and work on a codebase in a team without your changes overriding those of your colleagues.
