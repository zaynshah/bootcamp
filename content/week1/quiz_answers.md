# Week 1 - Mastery quiz (answers)

<hr>

Question 1.

**Answer**:

```js
;[
  'Lindsay Jackson',
  'Kennedy Jackson',
  'Lindsay Carter',
  'Kennedy Carter',
  'Lindsay Tyler',
  'Kennedy Tyler'
]
```

**Explanation**: We're using two nested loops here; you probably used a similar approach to generate the cards in your deck. Notice that the values from the inner loop (`'Lindsay'` and `'Kennedy'`) appear first because we add `${b} ${a}` to our array (not `${a} ${b}`).

**If you got this wrong**: Review the below materials on for loops, and string interpolation.

- [:link: - for...of statement (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/for...of)
- [:link: - Template strings (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

<hr>

Question 2.

**Answer**: Either yes or no are acceptable answers (as long as you reasoned along the lines of the explanation below, and didn't just guess!)

**Explanation**: For integers (whole numbers), a > b is the same as (b + 1) ≤ a. Since we know that `pointsFor()` will return a whole number the behaviour will be the same. So _yes_ is a reasonable answer.

On the other hand, if `pointsFor()` returned, say, `21.5` then the first condition would be true but the second condition would be false, so _no_ is the more technically correct answer.

Note that the presence/absence of braces (`{`, `}`) after the `if` statement don't make any difference to the behaviour of the code.

**If you got this wrong**: Review the below materials on conditionals, integers and floating point numbers, and basic math in JS.

- [:link: - Basic math in JavaScript — numbers and operators (MDN)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)
- [:link: - Making decisions in your code — conditionals (MDN)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

<hr>

Question 3.

**Answer**: The correct method is [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) one of the most common array methods:

```js
const scores = [1, 5, 3]
scores.map((score) => score * 2)

console.log(doubledScores) // [2, 10, 6]
```

**If you got this wrong**: Review the article below on array methods.

- [:link: - 10 JavaScript array methods you should know](https://dev.to/frugencefidel/10-javascript-array-methods-you-should-know-4lk3)

<hr>

Question 4.

**Answer**: This is not valid JavaScript code.

**Explanation**: First of all, the `for` keyword (as well as `if`, `switch`, `function` etc.) are always followed by parentheses. Next, a `for` keyword on its own doesn't make sense, it needs to be followed by a keyword like `of` (e.g. `for (name in names)`). Lastly, we refer to `card` in the `console.log()` statement but `card` isn't defined anywhere!

**If you got this wrong**: If you were confused because of the `for` loop, read about the `for...of` statement below. If you have larger confusions about what is & isn't valid JavaScript syntax, read the Reintroduction to Javascript tutorial.

- [:link: - for...of statement (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/statements/for...of)
- [:link: - A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

<hr>

Question 5.

**Answer**: Yes, this is indeed a useful test case!

**Explanation**: Although an empty hand may seem like a strange idea, if `pointsFor()` accepts a collection (array) of cards, we ought to consider what should happen if that collection is empty. This is a classic example of an edge case. We want to make sure that potential edge cases are documented and tested.

**If you got this wrong**: Read more about writing good tests & edge cases below.

- [:link: - Designing for the edge cases](https://pixelfridge.digital/designing-for-the-edge-cases/)
- [:link: - A Beginner’s Guide to Testing: Error Handling Edge Cases](https://www.freecodecamp.org/news/a-beginners-guide-to-testing-implement-these-quick-checks-to-test-your-code-d50027ad5eed/)

<hr>

Question 6.

**Answer**: Yes, they do imply the same behaviour.

**Explanation**: The 2nd argument to `.reduce` is the starting value for our `sum`, and is equivalent to `let score = 0` in the first snippet. Then for each element in the array we set the new value of `sum` to the old value plus `pointsForCard(card)`. The final value of `sum` is then assigned to `score`. Thus the second snippet is just a more compact way of writing the first snippet.

**If you got this wrong**: Read more about the `.reduce` method and array methods in general below.

- [:link: - Array.reduce (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [:link: - 10 JavaScript array methods you should know](https://dev.to/frugencefidel/10-javascript-array-methods-you-should-know-4lk3)

<hr>

Question 7.

**Answer**: Calling `generateSeed()` will return a random number between 0 and 9999. Each time `generateSeed()` is called it will (in all likelihood) return a different number. We want to know what value was used after the first call to `generateSeed()` so that we can reproduce the shuffle. We should instead only call `generateSeed()` once, and store it in a variable like so:

```js
function generateSeed() {
  Math.floor(Math.random() * 10000) // returns a random integer from 0 to 9999
}

const seed = generateSeed()
const shuffledDeck = shuffle(deck(), seed)
logger.info(`Seed to reproduce shuffle: ${seed}`)
```

**If you got this wrong**: Review the materials below on call functions and pseudorandomness.

- [:link: - Calling functions (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Calling_functions)
- [:link: - Random Numbers - Numberphile](https://www.youtube.com/watch?v=SxP30euw3-0)

<hr>

Question 8.

**Answer**: The output will be:

```
Bob
Charles
David
undefined
```

**Explanation**: There are a few "gotchas" here. First we start `index` at `0`, so a glance might lead you to believe that we first log `Alex`. However, since we increment the index before logging, we actually start at David. Similarly, to get the value `David` we would access `names[3]` (remember array indexes start at 0). However, on our last iteration we're accessing `names[4]` which doesn't exist and so returns `undefined`.

**If you got this wrong**: If you got this wrong because of confusion about array indexing/accessing or `while` loops read the articles below. If you have larger confusions about JS control flow, read the Reintroduction to Javascript tutorial.

- [:link: - Accessing array elements (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Accessing_array_elements)
- [:link: - while statement (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [:link: - A re-introduction to JavaScript (JS tutorial)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

<hr>

Question 9.

**Answer**: No, the result of the first snippet is `'10050'` and the second snippet is `150`.

**Explanation**: In the first case we're adding two strings together. Although these strings happen to contain numbers, to JS it's no difference that calling `"good" + "bye"` to make `"goodbye"`. In the second case we're adding numbers, so addition works as we'd expect. (Bonus, harder question: what do you think happens if we mix types we're adding together, e.g. `"100" + 50`?)

**If you got this wrong**: Read about the addition operator and data types below.

- [:link: - Addition operator (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)
- [:link: - JavaScript Fundamentals - Data types](https://javascript.info/types)

<hr>

Question 10.

**Answer**: The output is `Not equal!`.

**Explanation**: Arrays and objects are compared by reference not by value. Meaning two identical arrays (with the same value) aren't automatically equal:

```js
const a = [1, 2, 3]
const b = [1, 2, 3](a === a)(
  // true
  a === b
) // false, they're different arrays
```

**If you got this wrong**: This a confusing part of JavaScript (many other languages don't behave the same way), which is well explained by _You Don't Know JS_:

- [:link: - Comparisons section of YDKJS Get Started, Chapter 2](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch2.md#comparisons)

<hr>

Question 11.

**Answer**: The Deno REPL is useful for helping you experiment and debug small parts of a larger code base.

**Explanation**: The Deno REPL is good for when you want to test individual functions or small snippets of code. You could - theoretically - write whole programs in there however we wouldn't recommend it!

**If you got this wrong**: REPLs are one of the tools you'll use to help you understand what your code is doing. Read this article to clarify your understanding

- [:link: - Read-Eval-Print Loop: What are REPLs and How to Use Them](https://www.jungledisk.com/blog/2018/06/01/read-eval-print-loop-what-are-repls-and-how-to-use-them/)

<hr>

Question 12.

**Answer**: B, D and E are correct

**Explanation**:

- A. TDD will not help you write code faster. In fact, it might actually slow down the speed of your output, however the output
- B. TDD will give you more confidence that your code is write because you've got to also confirm that it works - not only assume that it does
- C. You can still write buggy code because your test cases may not cover all of the areas of your program. Your tests could also introduce bug themselves!
- D. This is correct - this is one of the definitions of TDD
- E. Your tests can also act as a form of documentation for your code. Good tests mean that it's easier for a new developer to tell what your code is trying to achieve.

**If you got this wrong**: TDD is a big subject that we'll speak about throughout the course. Watch this video to clarify your understanding

- [:link: - Test Driven Development - What? Why? And How?](https://www.youtube.com/watch?v=llaUBH5oayw)

<hr>

Question 13.

**Answer**: You could argue that both B and C are good answers. If you chose either then you are correct.

**Explanation**:

- A. Bad - Using only `array` does not describe what is in the array
- B. Good - Describes what is in the array
- C. Good - Describes what is in the array and how they are generated (however we can't assume they are random)
- D. Bad - We don't need to use the word array since the 's' in 'numbers' is a hint that this contains multiple numbers.

**If you got this wrong**: Choosing good variables is always really tricky and skill that you'll learn over time. Read this article to find out more.

- [:link: - Dev Principle #1: Choose Appropriate Variable Names](https://www.freshconsulting.com/insights/blog/development-principle-1-choose-appropriate-variable-names/)

<hr>

Question 14.

**Answer**: `deno test task.test.js`

**Explanation**: We use the `test` keyword to run the tests in a file. We'd use `run` to run the code without running the tests.

**If you got this wrong**: Refresh your memory of how testing works in Deno by reading the manual

- [:link: - Deno Manual - Testing](https://deno.land/manual/testing)
