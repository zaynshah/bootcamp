# Intro to Blackjack

> **We've taught this before!**
>
> See a previous version of this class [here](https://sigmalabs.rewatch.com/video/7518/blackjack-challenges-coding-workshop-april-27-2021/)

## Learning Objectives

By the end of this session, an attendee should be able to

- Describe the modified rules for blackjack as presented in this week's challenge
- Write and modify source code with VS Code
- Run your tests from the command line
- Interpret passing and failing test cases
- Write simple test cases using Deno's built-in assertions

## Pre-Work

### 1. Setup

Before this session make sure you've got your VSCode setup properly. You should complete **all** of the setup steps in the [Getting Setup guide](/getting-setup.md#31-visual-studio-code).

### 2. Research

**Setup:** If nobody has done so already, create a thread on Slack titled **"TDD Research"**. You'll be sharing useful links in there.

Before this session you should be confidently able to answer the following questions.

1. What is Unit Testing in Software Engineering?
2. What is Test Driven Development?
3. Why is Unit Testing important in Software Engineering?

When you find resources that are useful for you, **share them in the Slack thread**.

### 3. Research

**Setup:** If nobody has done so already, create a thread on Slack titled **"Deno Testing Research"**. You'll be sharing useful links in there.

We'll be using Deno's testing library to write unit tests for our code. Before attending the session research Deno and it's testing library. You should be able confidently describe what this code does

```js
Deno.test('pointsFor(): two aces with other cards', () => {
  assertEquals(pointsFor(['2D', 'AD', 'AC']), 24)
})
```

Again, if you find resources that are useful, **share them in the Slack thread**.

## Workshop

### Live Coding

1. Spend some time running through the rules of Blackjack
2. Spend some time running through the test suite provided for the Blackjack Project
3. Identify how the student can tell if tests are failing

### Live Coding

#### Useful Links

- https://deno.land/manual/testing

#### Instructions

Live Code an example of a Email Validation function. You should use TDD.

The tests should include:

- Does the test fail when an email doesn't contain a `@`?
- Does the test fail when an email doesn't contain a `.`?
- Does the test fail when nothing is before the `@`?
- Does the test fail when nothing is after the `@`?
- ...

When all tests have been written, red/green refactor the function so that all tests pass.
