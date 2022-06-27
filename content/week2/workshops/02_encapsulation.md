# OOP (continued)

> **We've taught this before!**
>
> See a previous version of this class [here](https://sigmalabs.rewatch.com/video/7785/oop-continued-optional-coding-workshop-may-4-2021/)

## Learning Objectives

By the end of this session, an attendee should be able to

- Explain the conventions around private properties in JavaScript
- Use `#` to make a variable or method private.
- Use the `instanceof` keyword to introduce type guards
- Be able to work with array instance properties on classes (e.g. the videos contained within a video store)

## Pre-work

### Create

In this workshop we're going to live code the relationship between a `Dog` and a `PetStore`.

Following the instructions below, attempt to build what we're going to doing in the next section. Here are the instructions written in plain english.

> The `Dog` class has a constructor that takes a `name` and `weight`. It also has a `bark()` function that will `console.log("WOOF")` if the dog is equal to or larger 100 and `console.log("woof")` if the dog is smaller than 100.
>
> Next, the `PetStore` contains an array of pets. It has a `addPet(pet)` function that allows a user to add a pet to the pet store which is then stored in the array. The `PetStore` should throw an error if the user tries to put more than 8 `Dog`s in it. The `PetStore` should have a `petsForSale()` function that returns the whole pets array. The `PetStore` should throw an error if the user tries to put something that isn't a `Dog` in it.
>
> When complete this code should run successfully.
>
> ```js
> let mutt = new Dog('Mutt', 65)
> let spot = new Dog('Spot', 32)
> let gruff = new Dog('Gruff', 95)
>
> let store = new PetStore([mutt, spot, gruff])
>
> let bingo = new Dog('Bingo', 103)
> store.addPet(bingo)
> ```

## Workshop Details

### Pop Quiz (5 mins)

<details>
    <summary>Do not open before class</summary>
    
  1.  What are the four principles of OOP? (Remember, A PIE)
  2.  How do you declare a class called `Ball` in javascript?
  3.  How do you create an instance of a class called `Ball` in javascript?
  4.  When is the constructor run?
  5.  Is this code correct?

    ```
    class Ball{
        constructor(color){
            this.color = color;
        }
        function throwBall(){
            console.log("Go long!")
        }
    }
    ```

</details>

### Q&A (15 mins)

Run through any questions that the students have from yesterday or that came from the Pop Quiz

### Challenge (30 mins)

Live code an example of the relationship between a Dog and a Pet Store from the pre-work above.

You should call out

- Demonstrate errors being thrown when trying to input too many `Dog`s
- Demonstrate how to catch and handle the error
- Using `_pets` rather than `pets` for the pets array variable name to imply that it is a private variable
- Using `#pets` to make a field completely private
- Using `instanceof` to detect if the user tried to put in something rather than a `Dog`

Extend the PetStore class by adding a `petsForSaleLargerThan()` function.

Be sure to leave time for questions and experimentation.
