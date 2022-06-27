# Debugging and Loops

> **We've taught this before!**
>
> See a previous version of this class [here](https://sigmalabs.rewatch.com/video/7563/logging-coding-workshop-april-28-2021/)

## Learning Objectives

By the end of this session, an attendee should be able to

- Write code that can iterate through an array in different ways (classic `for` loops, `for... of`, `for... in` and `forEach`)
- Compare the pros & cons of different ways of iterating through array
- Write code that can help you debug the state of your program
- Use the debugger to debug you code in situ
- Add logging output to your programs

## Pre-work

### Research

**Setup:** If nobody has done so already, create a thread on Slack titled "Debugging Research". You'll be sharing useful links in there.

Before you attend this session, research the following questions

1. What is debugging?
2. What is a debugger?
3. How would you use `console.log()` to debug?

### Exercise

Below you will find a code snippet that uses the classic `for` loop. Re-write the snippet so that it uses:

1. A `for... of` loop
2. A `for... in` loop
3. A `forEach` loop

You are expected to research or seek answers from your classmates for each of these types of loop if you do not already understand them.

Here is the challenge:

> Write a short program that prints each number from 1 to 100 on a new line.
>
> For each multiple of 3, print "Fizz" instead of the number.
>
> For each multiple of 5, print "Buzz" instead of the number.
>
> For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

and here is the solution

```js
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]

for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
    console.log('FizzBuzz')
  } else if (numbers[i] % 3 === 0) {
    console.log('Fizz')
  } else if (numbers[i] % 5 === 0) {
    console.log('Buzz')
  } else {
    console.log(numbers[i])
  }
}
```

## Workshop

### Live Coding (10 mins)

Work through a solution from the pre-work either by selecting a students work or live coding it from scratch.

### Live Coding (10 mins)

- Show how you can use `console.log()` to debug the programme written for the pre-work.
- Show prepending text to identify where you are in the programme e.g. `console.log("Fizz: Num: " + i)`

### Live Coding (10 mins)

- Show how you can use the debugger to step through your code from previously
  - Make sure `.vscode/launch.json` is present to enable VSCode & Deno debugging properly
  - To run debugger, `Run` -> `Start Debugger`

### Discussion (5 mins)

In small team, discuss the pro and cons of each style of debugging. When is `console.log()` better? When is using the debugger better?

### Exercise

Poll the students for a bug that they're working through currently and then

- If several students have bugs, split them into groups to work on solving them with the debugger
- If one student has a bug, driver/navigator solve it using the debugger
- If no students have bugs, then end the workshop and allow the students to return to their work
