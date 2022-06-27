# Fundamentals II: Object-oriented programming with JavaScript <!-- omit in toc -->

## Contents <!-- omit in toc -->

- [Learning Objectives](#learning-objectives)
- [Previous Sessions](#previous-sessions)
- [Blackjack OOP 🃏](#blackjack-oop-)
  - [OOP implementation](#oop-implementation)
    - [Side note: type checking](#side-note-type-checking)
    - [Side note: `function`s vs `method`s](#side-note-functions-vs-methods)
  - [Discussion](#discussion)
- [Week 2 Project: Blockbuster OOP 📼](#week-2-project-blockbuster-oop-)
  - [Project Overview](#project-overview)
  - [Challenge 1: Implement `Video` class](#challenge-1-implement-video-class)
    - [Behaviour](#behaviour)
    - [Validation](#validation)
  - [Challenge 2: Implement `Customer` and `VideoStore` classes](#challenge-2-implement-customer-and-videostore-classes)
    - [`Customer`](#customer)
    - [`VideoStore`](#videostore)
  - [Challenge 3: Implement `Rental` class, rewinding and fines](#challenge-3-implement-rental-class-rewinding-and-fines)
    - [Renting and fines](#renting-and-fines)
    - [Rewinding and bans](#rewinding-and-bans)
  - [Challenge 4: Implement DVDs and vending machines](#challenge-4-implement-dvds-and-vending-machines)
  - [Discussion](#discussion-1)
  - [Above and beyond](#above-and-beyond)
    - [Implement rental limits, stock and reservations](#implement-rental-limits-stock-and-reservations)
    - [Add a command line interface](#add-a-command-line-interface)
    - [Implement fuzzy searching](#implement-fuzzy-searching)
    - [Add promotional offers](#add-promotional-offers)
    - [Load external data](#load-external-data)
- [Glossary](#glossary)

## Timetable <!-- omit in toc -->

Below is an example pace at which you might work through the materials:

| Time                | Focus                                                                                                                                                                                                                                                                                                                                                        | Workshop                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| Monday morning      | Brainstorm disadvantages/advantages of simple (non-OOP) blackjack implementation. Review materials on difference between instances, classes, objects & constructors.                                                                                                                                                                                         | [Intro to OOP](./workshops/01_intro_oop.md)      |
| Monday afternoon    | Start OOP rewrite of blackjack program ([warmup Challenge](#week-2-warmup-blackjack-oop-)). Read materials on getter methods.                                                                                                                                                                                                                                |                                                  |
| Tuesday morning     | Finish OOP rewrite of blackjack. Discussion exercise on advantages/difficulties of OOP style.                                                                                                                                                                                                                                                                | [OOP Continued](./workshops/02_oop_continued.md) |
| Tuesday afternoon   | Review materials on Floating point numbers. Complete [Challenge 1](#challenge-1-implement-video-class). Brainstorm, implement and compare data validations.                                                                                                                                                                                                  |                                                  |
| Wednesday morning   | Implement `Customer` and `VideoStore` classes, complete [Challenge 2](#challenge-2-implement-customer-and-videostore-classes).                                                                                                                                                                                                                               | [Inheritance](./workshops/03_inheritance.md.md)  |
| Wednesday afternoon | Complete [Challenge 3](#challenge-3-implement-rental-class-rewinding-and-fines) (`Rental` class, rewinding and fines). Create a state diagram for video rewound state.                                                                                                                                                                                       |                                                  |
| Thursday morning    | Review materials on class inheritance. Implement DVDs and vending machines to complete [Challenge 4](#challenge-4-implement-dvds-and-vending-machines).                                                                                                                                                                                                      |                                                  |
| Thursday afternoon  | Go through Discussion questions in your group. Take the [Week 2 Mastery Quiz](./quiz.md).                                                                                                                                                                                                                                                                    |                                                  |
| Friday              | **If you scored more 9 or more in the Mastery Quiz** - Congratulations 🎉! You've mastered the concepts for this week. You can move on to the [Above & beyond challenges](#above-and-beyond).                                                                                                                                                                |                                                  |
|                     | **If you scored less than 9 in the Mastery Quiz** - Take the time you need to review the concepts you're unsure about (the guidance in the Quiz answers will point you to the materials to review). Once you're comfortable with all the concepts in the quiz, you can move on to the [Above & beyond challenges](#above-and-beyond) for any remaining time. |                                                  |

## Learning Objectives

By the end of this week a learner will be able to

- Define what object oriented programming is
- Explain the relationship between a superclass and subclass
- Write code that implements inheritance
- Create a class using the `class` keyword
- Create an instance of a class with the `new` keyword
- Define OOPs advantages and disadvantages when building software
- Define the role of getter and setter methods
- Implement getter and setter methods using the get and set keyword in JS
- Throw an error in Javascript
- Describe different class-types

## Previous Sessions

You can find the previous recorded sessions of this week here on Rewatch

- [Cohort 1 Workshops](https://sigmalabs.rewatch.com/collection/783/week-2-object-oriented-programming-with-javascript)

## Blackjack OOP 🃏

These week we'll be learning Object Oriented Programming (OOP). To get warmed up, let's look at how we could rewrite last week's challenge in an object oriented style.

In our original non-OOP blackjack implementation, we used generic data types to represent the entities in our game. For example, the string `"AS"` represented the ace of spades, and the array `["KD", "KH"]` represents a hand containing a pair of red kings.

There are a number of disadvantages to only using the built-in generic data types. Here are a few observations:

- We use arrays to represent both decks and cards. If we see `[]` in our code - how do we know if that's an empty hand or an empty deck? Our `playerTurn` method takes an argument for `deck` and `hand`. What if we got them mixed up? Would we be able to check that?
- Using strings to represent cards is convenient, but it's not really what they're designed for. String should represent text data (words, phrases, names), rather than "things" like playing cards.
- It feels like certain methods "belong" to certain entities. `pointsFor` is strongly associated with a hand. This isn't reflected in how our code is organized - our methods have no kind of grouping at all.

---

> **💡 Exercise:** Can you think of any more disadvantages (or advantages) of the simplistic style we used when writing our blackjack implementation?

---

In object-oriented programming, we think about the "things" (entities) that our important for our program: in blackjack that would likely include `Deck`s, `Card`s and `Hand`s. Each of these defines a **class** (kind) of objects. Sometimes a class is described as the "blueprint" for objects of a particular kind - it determines how that kind of entity will behave in the world of our program. We work with individual **instances** of class: the ace of spades would be an instance of our `Card` class. **Instances** are defined by their **properties** (sometimes called **instance variables** or **attributes**), for example, a playing card is defined by its rank and suit. Lastly, instances have **methods**. These methods might use some logic to compute an answer based on instance's properties (like calculating the point value of a card), or change it's properties (like add a card to a hand).

Let's see an example. I define a class for `Card`. When defining the class, I write a **constructor** method, which specifies which property values I should declare up front when creating an instance of the class (we can also add properties after we've created an instance). In this case, we create a card with a rank and suit:

```js
class Card {
  constructor(rank, suit) {
    this.rank = rank
    this.suit = suit
  }
}

// Instantiate Ace of Hearts
new Card('A', 'H')

// Instantiate 3 of Diamonds
new Card(3, 'H')
```

The `rank` and `suit` are defined by exactly what we pass when instantiating the object (with `new Card()`), but we can process our arguments too. For example, we could transform the suit to uppercase (even if we construct it with the lowercase version):

```js
export class Card {
  constructor(rank, suit) {
    this.rank = rank
    this.suit = suit.toUpperCase()
  }
}

const card = new Card(3, 'h')
console.log(card.suit) // => 'H'
```

Have a watch of the video below to reinforce these concepts. Then try and answer the question below:

<img src="https://img.youtube.com/vi/5AWRivBk0Gw/0.jpg" height="200">

- [:link: - What are Classes, Objects, and Constructors?](https://www.youtube.com/watch?v=5AWRivBk0Gw) (5 min watch)

---

> **❓ Question :** Given a simple game of blackjack (one player and the dealer playing with a single deck), how many different classes will we have? How many instances will we have?

---

<details>
  <summary>Answer</summary>

- We have (at a minimum) 3 classes: `Card`, `Deck`, `Hand`.
- We would have 1 instance of `Deck` (the single deck we're playing with). We would have 2 instances of `Hand` (the player's hand and the dealer's hand), and we'd have 52 instances of `Card`.
</details>

### OOP implementation

Now we understand the basics of OOP, we'll try to implement some of the core logic from our blackjack program in an OOP style. The starter file `blackjack_oop.js` includes classes for `Card`, `Deck` and `Hand`. You'll need to implement the methods marked with `TO DO`. You should be able to reuse much of the logic from your original blackjack program - and look out for opportunities to simplify your code.

Use the tests in `blackjack_oop_tests.js` to guide you. Reading through the tests will also reinforce the principles of how we work with classes and objects in an OOP style :simple_smile:.

You'll notice there's something special about the `points` methods: we've put the keyword `get` before the method declarations:

```js
class Card {
  // ...
  get points() {
    return 0
  }
}

class Hand {
  // ...
  get points() {
    return 0
  }
}
```

This is mostly a stylistic choice which allows us to call the method **as if it were a property**:

```js
const card = new Card('A', 'H')

// Get a property, note: no parentheses
console.log(card.rank)

// Call a method, note: we need parentheses even though we pass no arguments
console.log(card.toString())

// Call a getter method, note: no parentheses. We treat as if it were a property.
console.log(card.points)
```

If we didn't use the `get` keyword, we would need to use parentheses (`card.points()`). Note that getter methods can't take arguments. Read more below:

- [:link: - JavaScript reference - getter (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) (10 min read)

#### Side note: type checking

Notice that one advantage of an OOP style is we can more easily enforce what classes of objects can be used in which places, for example, by using the `instanceof` keyword:

```js
export class Hand {
  contructor(cards) {
    if (!cards.every((card) => card instanceof Card)) {
      throw new TypeError('A Hand can only contain Cards')
    }

    this.cards = cards
  }
}
```

This stops us, for example accidentally constructing a nonsensical hand:

```js
new Hand(['banana', 42]) // TypeError
```

This is also the first example we've come across of **throwing errors** in our programs. While beginners often naturally assume that errors are bad things, in fact it's very common to use errors to prevent unexpected behaviour.

There are many other approaches to type checking, beyond using `instanceof`. One approach is "duck typing", where rather than checking whether an element of our hand is a `Card`, we instead check it has the necessary properties (e.g. it has a rank, suit and point value). This can come in handy if we leverage polymorphism (a topic we'll encounter in the challenges below). Strongly-typed languages like [TypeScript](https://www.typescriptlang.org/) (an extension of JavaScript) provide even more powerful tools for validating the types in your programs.

#### Side note: `function`s vs `method`s

In OOP, you may notice that we use the word "method" when previously we used the word "function". In general terms, we use them interchangeably but in OOP they have a very specific set of differences.

In the most general terms

> A method is a function that lives inside an object

However it also has some further specific properties

| Function                                                       | Method                                                                                                                                      |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| A function is called directly by its name. e.g. `getData()`    | A method is called by the name of its object and its method name using dot notation or square bracket notation. e.g. `networking.getData()` |
| Only data passed into a function can be used e.g as parameters | A method also gets the object on which it was called                                                                                        |
| A function lives on its own.                                   | A method is a function associated with an object property.                                                                                  |

### Discussion

Once you have your tests passing, in groups tackle the following exercise:

---

> **💡 Exercise:** What have you learned from implementing some of the logic of blackjack in an OOP style? What is easier or harder? Is the resulting code easier to read or understand? Brainstorm a list of advantages/disadvantages of an OOP approach.

---

<br>
<br>

## Week 2 Project: Blockbuster OOP 📼

### Project Overview

This week, we'll take a trip back to the 90s to create a rental system for BlockBuster video. We'll dive into the specification of different parts of the system in each Challenge, but from a high level, in our system:

- Videos have a title, year of release, runtime and rental price.
- BlockBuster stores stock multiple videos for rental.
- Stores can look up videos by name.
- Customers can rent videos up to 3 videos at a time. Videos have to be rewound before being returned. Any late returns incur fines.
- Customers with significant outstanding fines can't rent videos (until their fines are paid off).

In the last challenge, we'll implement new kinds of media (DVDs) for BlockBuster to stock and launch BlockBuster vending machines.

One nice thing about our challenge last week is that from the get-go we hand an interactive interface (a CLI) with which we could interact with our code. This week we won't be so lucky! We'll writing our classes to meet our specs and automated tests, but we can't "play" with our code in the same way. Working in this more abstract fashion can be challenging, but is an important skill for software developers.

<br>
<hr>
<br>

### Challenge 1: Implement `Video` class

#### Behaviour

Let's start by filling in the behaviour of our `Video` class. Use the tests for `Video` in `blockbuster_challenge_tests.js` as a complement to this specification if you're confused how any method should behave.

We instantiate a `Video` by providing a title, year of release and runtime in minutes (in that order). These should be saved on the video on the properties `title`, `year` and `runtime`:

```js
const vid = new Video('The Matrix', 1999, 150)
```

`Video` has a `displayTitle()` method which displays the title followed by the year of release in parentheses:

```js
console.log(vid.displayTitle()) // => The Matrix (1999)
```

The `rentalPrice()` of a video is calculated based on these rules:

- A normal video released this year costs £10
- Otherwise it costs £5
- A video with a runtime of more than 4 hours costs double the normal price

The rental price should be returned in pennies, so a £10 video should return `1000`. For some insight on why we generally deal in pennies/cents when working with money in programs, see:

<img src="https://img.youtube.com/vi/PZRI1IfStY0/0.jpg" height="200">

- [:link: - Floating Point Numbers - Computerphile](https://www.youtube.com/watch?v=PZRI1IfStY0) (10 min watch)
- or [:link: - Never Use Floats for Money](https://husobee.github.io/money/float/2016/09/23/never-use-floats-for-currency.html) (5 min read)

However, since we humans aren't used to thinking in pennies, `Video` lastly has a `displayPrice()` method that displays prices as we'd expect:

```js
console.log(vid.displayPrice()) // => £10.00
```

#### Validation

An important part of building robust systems (especially ones that might be taking input from the user) is **validating** our data. Good validations help catch typos (e.g. writing "199" instead of "1999") and misunderstandings (e.g. entering runtime in hours instead of minutes).

Brainstorm as many reasonable validations as you can. When a validation fails, your `constructor()` method should throw an error. Add tests for your validations in `blockbuster_student_tests.js`, then write code for your tests to pass. For example, let's say we want validate that the release year of a video should be after 1900. First, we add a test to `blockbuster_student_tests.js`:

```js
Deno.test('Videos must be released after 1900', () => {
  assertThrows(() => {
    new Video('The Dreyfus Affair', 1899, 13)
  })
})
```

The test should initially **fail**. We then add the necessary code to make it pass:

```js
export class Video {
  contructor(title, year, runtime) {
    if (year < 1900) {
      throw new Error("Videos can't be released before 1900")
    }
  // ...
```

Writing failing tests, then writing the code to make them pass is a best-practice known as **test driven development (TDD)**. You can read more here:

- [:link: - Test Driven Development: what it is, and what it is not.](https://www.freecodecamp.org/news/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2/) (10 min read)

Once you've written as many reasonable validations as you can think of, compare against the example list of validations below. Did you miss any? Are there any you disagree with?

<details>
  <summary>Example validations</summary>

- Title shouldn't be blank
- Title shouldn't be too long (> 1000 characters)
- Title should (arguably) contain some alphanumeric characters
- Year of release should be a number
- Year of release should be after, say, 1900
- Year of release shouldn't be (far) in the future
- Runtime should be a number
- Runtime shouldn't be negative
- Runtime shouldn't be impossibly long (say, > 24 hours)
- Runtime (arguably) should be too short (say, < 10 minutes)
- Runtime should be a whole number
</details>

<br>
<hr>
<br>

### Challenge 2: Implement `Customer` and `VideoStore` classes

Next, we'll add `Customer`s and `VideoStore`s to our application. From here on out, we'll need to write our own tests in `blockbuster_student_tests.js`; writing good tests is a really valuable skill in itself. Use the tests we've seen previously in `blockbuster_challenge_tests.js`, `blockbuster_oop_tests.js` and `blackjack_challenge_tests.js` (from last week) for inspiration, or to help with correct syntax for test cases. Ideally, you should write you tests first, then write an implementation that gets them to pass.

#### `Customer`

A customer should be instantiated with a `firstName`, `lastName` and `dateOfBirth` in the format `dd/mm/yyyy`:

```js
const john = new Customer('John', 'Smith', '24/01/1980')
```

A customer should have a `name` _getter_ method which returns the customer's first name and last name joined by a space:

```js
john.name // => 'John Smith'
```

`Customer` should also have an `age()` method which returns the customer's age (as an integer (i.e. a persons age cannot be `18.6`)). Finally, add a validation so that a customer must be at least 13 years old. Attempting to instantiate a younger customer should throw an `Error`. Feel free to add any other validations you think are reasonable.

---

> **💡 Key Idea:** A common mantra in software development is [Don't Repeat Yourself](https://www.oreilly.com/library/view/97-things-every/9780596809515/ch30.html) (DRY). You'll need to use some logic to turn the Customer's date of birth into an age in years. Make sure you _reuse_ that logic (e.g. by calling a method), rather than _repeating_ it (e.g. by retyping the code in a different place).

---

#### `VideoStore`

A `VideoStore` stocks a collection of `Video` objects, and keeps tracks of which of those videos are currently rented. We can think of a `VideoStore` a bit like an array with special abilities - rather like our `Hand` class in our OOP blackjack implementation. We instantiate a VideoStore with a collection of videos:

```js
const matrix = new Video('The Matrix', 1999, 150)
const terminator = new Video('The Terminator', 1985, 108)
const store = new VideoStore([matrix, terminator])
```

Fill out the `constructor` method of `VideoStore` to ensure the following:

- A video store must carry at least some (> 0) videos
- A video store can't carry more than 10 videos

If these conditions are violated, you should throw at `Error`. Next, we need the ability to find a particular video by its title:

```js
console.log(store.findVideoByTitle('The Matrix')) // Video { title: "The Matrix" }
console.log(store.findVideoByTitle('Nonexistent Movie')) // null
```

You only need to worry about exact matches for now (fuzzy searching is a challenge you can take on in the _Above and Beyond_ section).

Lastly, we need to implement the concept of **availability** for a video store with a pair of method: `isAvailable()` and `rentVideo()`:

- `isAvailable` takes one argument: the title of a video
- `rentVideo` takes two arguments: the title of a video and a `Customer` object
- Initially `isAvailable()` should return true for all titles that the `VideoStore` stocks and should throw an error for a non-existent title
- Once we call `rentVideo()` on a title, then subsequent calls to `isAvailable()` for that title return false
- Calling `rentVideo()` for a non-existent title, or without a `Customer` object as the 2nd argument should throw an error
- For now, `rentVideo()` doesn't need a return value (we'll fix this in Challenge 3)

Generally when writing specifications, we only care about the behaviour of our classes, but we leave their internal implementation flexible. We'll need to give our `VideoStore` instances some kind of _internal state_ (i.e. properties) to allow it to keep track of which videos have already been rented. There are lots of valid ways to tackle this! Have an experiment, and if you get stuck, expand the hint below.

<details>
  <summary>Hints if you're stuck</summary>

Here's one starting point for managing availability. In our constructor method, we create an `availability` property on `VideoStore`, where `availability` is an object with video titles as its keys, and booleans for its values:

```
constructor(videos) {
  // ...
  this.availability = {}

  for (let video of videos) {
    this.availability[video.title] = true
  }
}
```

Both `isAvailable()` and `rentVideo()` will rely on `this.availability` and should be relatively straightforward.

</details>

<br>
<hr>
<br>

### Challenge 3: Implement `Rental` class, rewinding and fines

#### Renting and fines

As a gentle start, we'll add an `outstandingFine` property to customer, which should initially be 0:

```js
const john = new Customer('John', 'Smith', '24/01/1980')
console.log(john.outstandingFine) // 0
```

As always, outstanding fine represents a monetary amount in pennies. Next, we'll extend our `rentVideo()` method, and add a `returnVideo()` method according to the following spec:

- `rentVideo()` should now return an instance of the `Rental` class (i.e. you should be calling `new Rental()` within the body of `rentVideo`). The `Rental` instance should have a `dueDate` property, equal to two weeks from `Date.now`.
- `returnVideo()` take two arguments: an instance of the `Rental` class (returned by `rentVideo()`) and a return date in the format `dd/mm/yyyy`
  - If the return date is before the `Rental` instance's due date, the title should become available again (e.g. `store.isAvailable('Whatever movie')` should return true again)
  - If the return date is after the `Rental` instance's due date, the title should become available again **and** the `outstandingFine` for the `Customer` who rented the video (e.g. the third argument to the original call to `rentVideo`) should be increased by £10, or £15 for a movie released this year.
  - If return video is missing either argument, it should throw an error

`Rental` is what we might refer to as a "helper" class. We don't instantiate it directly, rather, it's used by our other classes to help us implement complex behaviour as simply as possible. You have much more flexibility in how you implement `Rental` compared to the previous classes we've tackled.

<details>
  <summary>Hints if you're stuck</summary>

(Try and read as few hints as you can, working from top to bottom).

1. `Rental` will need knowledge of the `Customer` which made the rental, and the video that was rented.
2. "Knowledge" of a `Customer` implies it should have a `.customer` property or similar.
3. `Rental` can't just store the video title, it needs to store the actual video object (why?)
</details>

#### Rewinding and bans

All good citizens know they should rewind their videos before returning them. Our video stores are extra strict, and won't accept unrewound videos!

Let's start by adding a property and two methods to `Video`:

- `isRewound` is initially `true`
- If I call `.watch()` on a fresh video, `isRewound` becomes `false`
- If I call `.watch()` on the video again (when `isRewound` is `false`), I should get an error
- If I call `.rewind()` on the video, `isRewound` becomes `true` again
- If I call `.rewind()` on a video that's already been rewound, I should get an error

---

> ℹ️ **Top tip**: This another great opportunity to use diagramming to help us. Draw a simple flowchart showing the relationship between `watch()`, `rewind()` and `isRewound`. A special type of diagram called a [state diagram](https://en.wikipedia.org/wiki/State_diagram) is particularly helpful here.

---

Let's also add a `video` property on `Rental`, which returns the video being rented:

```js
const rental = store.rentVideo('The Matrix', john)
console.log(rental.video) // Video { title: "The Matrix" }
```

Now, extend our `returnVideo()` so it throws an error if the video being rented hasn't been rewound. Here's a complete example of a customer renting, watching and responsibly rewinding a video:

```js
const store = new VideoStore([
  new Video('The Matrix', 1999, 150),
  new Video('The Terminator', 1985, 108)
])
const john = new Customer('John', 'Smith', '24/01/1980')

const rental = store.rentVideo('The Matrix', john)
const { video } = rental

video.watch()
video.rewind()
store.returnVideo(rental, '01/08/2020')
```

Let's also prevent serial late returners from make rentals. If a `Customer` with an `outstandingFine` of more than £50 shouldn't be able to make rentals (`rentVideo()` should throw an error). To offset this, also add a `payOffFine()` method on customer which reduces their fine back to 0.

<br>
<hr>
<br>

### Challenge 4: Implement DVDs and vending machines

Lastly, we'll introduce the last key concept of Object Oriented Programming we've yet to encounter: polymorphism. Start by watching the video below:

<img src="https://img.youtube.com/vi/wwWzt-vSJqo/0.jpg" height="200">

- [:link: - ES6 Class Inheritance
  ](https://www.youtube.com/watch?v=wwWzt-vSJqo) (10 min watch)

Let's create a new `DVD` class, which inherits from our `Video` class:

```js
class DVD extends Video {}
```

Whereas video rentals vary for new releases and two-cassette films, DVDs have a flat rental cost of £12:

```js
class DVD extends Video {
  rentalPrice() {
    return 1200
  }
}
```

Notice we're able to able to inherit the behaviour of the parent class, while overriding the behaviour of certain methods in a targeted way:

```js
const vhs = new Video('The Matrix', 1999, 150)
const dvd = new DVD('The Matrix', 1999, 150)

console.log(vhs.displayTitle() === dvd.displayTitle()) // true
console.log(vhs.rentalPrice() < dvd.rentalPrice()) // true
```

As well as introducing completely independent new behaviours (e.g. DVDs cost £12), we can also create new behaviours based on old behaviours using the `super` keyword. For example, if we wanted DVDs to cost £1 more than their VHS equivalent, we could write:

```js
class DVD extends Video {
  rentalPrice() {
    return super.rentalPrice() + 100
  }
}
```

---

> **💡 Key Idea:** We've modelled `DVD` so that it _inherits_ from `Video` thus `Video` is the ancestor of the `DVD`. Some developers might feel this isn't ideal, since it implies that a DVD is a kind of video cassette; whereas really DVDs and VHSes are both kinds of home media. They might prefer to make `DVD` and `Video` both subclasses of a `HomeMedia` type.
> `HomeMedia` would be an _abstract class_, meaning we would never create instances of the class directly (`new HomeMedia()`) but would instead use it as a place to keep the logic shared between `DVD` and `Video`.

---

We'll also add a subclass of our `VideoStore` class: a `VendingMachine` class:

```js
class VendingMachine extends VideoStore {}
```

Now have a go at implementing the following behaviours using polymorphism:

- DVDs don't need rewinding. A DVD should still have a `watch()` method, but returning a watched DVD doesn't throw an error
- `VendingMachine`s can hold a maximum of 5 movies (on DVD or VHS), rather than 10 for a `VideoStore`
- `VendingMachine`s don't levy fines: returning a video to a `VendingMachine` late shouldn't increment `outstandingFine`

### Discussion

Once you have your tests passing, in groups, discuss the following questions:

- Is it possible for a `VideoStore` to stock the DVD and VHS version of the same film? Why/why not? If not, how would you fix this?
- Is it possible to rent videos from one store or vending machine and return it to another?
- What are the advantages/disadvantages of using polymorphism rather than creating our `DVD` and `VendingMachine` classes from scratch?

<br>
<hr>
<br>

### Above and beyond

Once you've completed the challenges above, you're free to extend your program in interesting ways (just like last week). Below are some ideas of ways to take your code to the next level, but if you have an idea of your own feel free to pursue it! Whichever challenge you take on, don't forget to write tests for you new features!

#### Implement rental limits, stock and reservations

Right now a Customer can rent an unlimited number of movies, which isn't very realistic. Try extending your program to add a sensible limit on the number of movies a given customer can rent.

Another unrealistic feature of our current system is that a store can only carry 1 copy of each film! Add in the concept of stories having multiple copies in stock. Instead of availability being a simple boolean, we'll need to increment and decrement the stock levels of the movies we carry.

Lastly, if a movie's out of stock, it would be nice to offer customers the option to reserve the movie. Add a `reserve()` method to `VideoStore`, such that a `Rental` will be created for an out-of-stock movie when that movie is returned (with `returnVideo()`).

#### Add a command line interface

To keep the scope of our system manageable, we've opted not to include an interface this week - but adding a CLI would definitely take our system to the next level! You could try building a simple text interface allowing users to:

- Add movies to a store (the CLI could prompt the user for title, year of release etc.)
- Create a Customer account
- Rent and return movies for a given Customer

To speed things up, draw on last week's project for inspiration. For example, you could use the [ask library](https://github.com/alexpeattie/ask) to capture user input.

#### Implement fuzzy searching

Currently when we want to look up a movie (using `findVideoByTitle()`) we need to use the exact title to get a match. Try extending the method so it works for partial matches - so that for example `findVideoByTitle("The Mat")` would return a film called "The Matrix" (hint: the [`.includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) method will help with this). Likewise, extend the method to be case insensitive, so `findVideoByTitle("the matrix")` will return a match.

A more ambitious goal is to handle misspellings, so that `findVideoByTitle("The Martix")` would return a match. This is a well-studied problem, the Levenshtein Distance algorithm is a good place to start:

<img src="https://img.youtube.com/vi/MiqoA-yF-0M/0.jpg" height="200">

- [:link: - Edit Distance Between 2 Strings - The Levenshtein Distance ("Edit Distance" on LeetCode)](https://www.youtube.com/watch?v=MiqoA-yF-0M) (15 min watch)

#### Add promotional offers

Blockbuster was famous for its promotional offers, so why not have a go at adding special discounts to your program. Let your imagination run wild, but offers could include:

- All rentals are half price if made on Tuesdays
- 10% off if you make a rental less than one week after your previous rental
- Get 25% off if you rent both a movie and its sequel. (How would you detect if a movie was the sequel of another?)
- Add coupons codes to your system. (This could be an extra argument to `rentVideo()`, and you could add logic to validate coupon codes against a list)

#### Load external data

Currently, we're individually instantiating `Video`s - in real-world systems it's common to load data from spreadsheets or databases. Have a try at instantiating `Video`s from this comma-separated values (CSV) file - https://gist.github.com/alexpeattie/2d5e4ecbc41e9a3e414886e59383b4e5 - a sample of which is below:

| Title                               | Year | Runtime |
| ----------------------------------- | ---- | ------- |
| Titanic                             | 1997 | 194     |
| The Great Gatsby                    | 2013 | 143     |
| World War Z                         | 2013 | 116     |
| The Curious Case of Benjamin Button | 2008 | 166     |
| Dark Shadows                        | 2012 | 113     |
| The Wolfman                         | 2010 | 103     |
| I Am Legend                         | 2007 | 101     |
| Spider-Man 3                        | 2007 | 139     |
| Australia                           | 2008 | 165     |
| The Island                          | 2005 | 136     |
| Knight and Day                      | 2010 | 109     |
| Speed 2: Cruise Control             | 1997 | 121     |
| Town & Country                      | 2001 | 104     |
| Gladiator                           | 2000 | 155     |

To read CSV files we can use the [`deno-csv`](https://deno.land/x/csv@v0.4.0) library. We'll need to add the `--allow-read=.` flag when we run our script, to give it permission to read our CSV file from our hard drive.

<br>
<hr>
<br>

## Glossary

(Items at the top are new this week).

- **Abstract class** - An abstract is a class which cannot be instantiated, meaning you cannot create new instances of an abstract class. The purpose of an abstract class is to be a base for **subclasses**.
- **Class** - A class is a blueprint that defines a nature of a future object. Classes define **properties** and **methods** for these future objects.
- **Constructor** - The constructor method is a special method of a class for creating and initializing an object of that class.
- **Don't Repeat Yourself (DRY)** - A mantra that says we should avoid having the same piece of code copy-pasted in a lot of different places when working on a particular codebase.
- **Error**/**Exception** - An error or exception is an event, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions.
- **Getter** - A method that is called when a property is read.
- **Inheritance** - Inheritance is a mechanism in which one class (the child class or subclass) acquires the properties and methods of another class (the parent class or superclass).
- **Instance** - An instance is the concrete occurrence of a class. For example, if the `Card` class is the blueprint for any playing card, then the Ace of Spades is a instance of `Card` (it's a concrete example of a playing card).
- **Instantiate** - Instantiation is the process of taking a class definition and creating an object that you can use in a program.
- **Methods** - A method is a programmed procedure that is defined as part of a class and included in any object of that class.
- **Object-oriented programming (OOP)** - Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data, in the form of properties, and code, in the form of methods.
- **Polymorphism** - Polymorphism describes a pattern in object oriented programming in which classes have different functionality while sharing a common interface.
- **Properties** - A property is a characteristic of an object, often describing attributes associated with what it's modelling in the real world.
- **Refactoring** - The process of changing code in such a way that it does not alter the external behavior of the code yet improves its internal structure.
- **Setter** - A method that is called when a property is written.
- **Subclass** - The class that inherits from another class.
- **Superclass** - The class being inherited from.
- **Test driven development (TDD)** - an evolutionary approach to software development which combines test-first development where you write a test before you write just enough production code to fulfill that test and refactoring.
- **Validation** - Validation is an automatic computer check to ensure that the data entered is sensible and reasonable.
- Array - An ordered collection/list of items.
- Command line interface (CLI) - A text-based interface that is used to operate software.
- Loop - A loop is a sequence of instructions that is continually repeated until a certain condition is reached.
- JavaScript - JavaScript is a programming language commonly used in web development.
- Pseudorandomness - Behaviour that, although produced by a completely deterministic and repeatable process, is seemingly unpredictable and appears have no pattern.
- Runtime - A runtime system that provides an environment in which programs run. Runtime systems are the bridge between the code you write and your machine's operating system.
- Seed - A special number used to reproduce the data given by a pseudorandom number generator.
- Switch statement - A switch statement checks the value of a variable and compares it with multiple cases. Once the case match is found, a block of statements associated with that particular case is executed.
- Testing - Checking by means of actual execution whether a program behaves in the desired manner.
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
