# Promises, Async and Await

## Learning Objectives

- Describe the problem that promises and `async`/`await` are trying to fix (i.e. callback hell)
- Create a promise that is resolved if successful
- Create a promise that is rejected if not successful
- Resolve a promise using `.then()`
- Differentiate between where and when `await` can be used
- Use `await` to resolve a promise

## Pre-work

### Setup

**Create** a thread in the #workshops channel if it hasn’t already been created, named Promises, Async & Await: Pre Work.

**Watch** https://www.youtube.com/watch?v=670f71LTWpM

### Exercise

What is the output of the following code?

```js
console.log(“one”)
console.log(“two”)
console.log(“three”)
```

What should the output of this code be?

```js
console.log('one')
setTimeout(() => {
  console.log('two')
}, 100)
console.log('three')
```

Step by step write out what is happening when being called synchronously.

Questions to answer:

- What is the difference between the first set of code and the second?
- What is the definition of synchronous and asynchronous?

**Write** two examples of when you would use either synchronous or asynchronous code.

**Share** all of your answers to the above in the thread.

## Workshop

### Live Code

_Note:_ This code should be live coded rather than copy and pasted. The aim is to demonstrate _why_ we use promises or async/await.

Let's take an example of making a cup of coffee.

```js
function makeCoffee() {
  const beans = getBeans()
  const groundBeans = grindBeans(beans)
  const milk = getMilk()
  return makeCoffee(groundBeans, milk)
}

const coffee = makeCoffee()
drink(coffee)
```

This is all fine if all of these happen immediately - unfortunately each of these steps will take some time so we'll want to give each of these function a callback so they can tell us when they're done.

First lets change our `getBeans()` function to take a callback.

```js
function makeCoffee (nextStepCallback){
  getBeans(function (beans) {

  })
}

// Make and drink the coffee
makeCoffee(function (coffee) => {
  drink(coffee)
})
```

Then we've got use the beans that we get to pass them to `groundBeans()` then `getMilk()` then `makeCoffee()`

```js
function makeCoffee (nextStepCallback){
  getBeans(function (beans) {
    grindBeans(beans, function (groundBeans) {
        getMilk(function (milk) {
            makeCoffee(groundBeans, milk, function (coffee) {
                nextStepCallback(coffee)
            })
        })
    })
  })
}

// Make and drink the coffee
makeCoffee(function (coffee) => {
  drink(coffee)
})
```

What a confusing mess! How could we make this better?

### Live Code

A better alternative for this is to use `promise`s.

Let's live code an example for our `getBeans()` function

```js
function getBeans() {
  return new Promise(function (resolve, reject) {
    //Imagine this code took a long time to happen
    if (checkBeansExist()) {
      let beans = retrieveBeansFromStore()
      resolve(beans)
    } else {
      reject()
    }
  })
}
```

We can then check if we have beans "asynchronously" by writing this code

```js
getBeans().then((beans) => {
  console.log(beans)
})
```

Great! If we did this for all of our coffee functions we could write code that looks like this.

_Note_: An important note to make here is that if you `return` a promise inside a `.then()` then it will resolve that promise.

```js
function makeCoffee() {
  return getBeans()
    .then(beans => grindBeans(beans))
    .then(groundBeans => makeCoffee(groundBeans)))
};

// Make and drink coffee
makeCoffee().then(coffee => drink(coffee));
```

But we can make this even simpler...

### Live Code

Using `async/await` we can make this even simpler. When we use `await` we can remove the need for using `.then()`.

```js
async function makeCoffee {
  const beans = await getBeans()
  const groundBeans = await grindBeans(beans)
  const coffee = await makeCoffee(groundBeans)
  return coffee
}

const coffee = await makeCoffee()
drinkCoffee(coffee)
```

We can use `await` to resolve any promises in line.

### Pair Coding Exercise

Here is a snippet of nested `.then()` and "callback hell" code that is requesting three pictures of cats.

_Note:_ Inform the students that this is **intentionally is BAD CODE**. You shouldn't ever be writing code like this.

Re-write the code below to escape callback hell using `async`/`await`.

```js
const URL = 'https://thatcopy.pw/catapi/rest/'
function getCats(callback) {
  const cats = []
  fetch(URL)
    .then((catResponse) => {
      return catResponse.json()
    })
    .then((cat) => {
      cats.push(cat)

      fetch(URL)
        .then((catResponse) => {
          return catResponse.json()
        })
        .then((cat) => {
          cats.push(cat)

          fetch(URL)
            .then((catResponse) => {
              return catResponse.json()
            })
            .then((cat) => {
              cats.push(cat)
              callback(cats)
            })
        })
    })
}

getCats((arrayOfCats) => {
  console.log(arrayOfCats)
})
```

### Q+A

Leave a good amount of time for Q+A.

### Exercise

At this point students can continue onto the Scrimba course in the course content in the "Let's make a Promise" section.
