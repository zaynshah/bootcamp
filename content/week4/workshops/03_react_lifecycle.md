# React Lifecycle Workshop

## Learning Objectives

- Accurately recall the React component lifecycle
- Choose when code is executed depending on the lifecycle state of the component

## Previous Recordings

We've run this (or a related) workshop before!

You can find the recording of the workshop here:

- [Code Review - React & Component Lifecycle](https://sigmalabs.rewatch.com/video/11139/code-review-react-component-lifecycle-coding-workshop-july-1-2021/)

## Pre-work

### Watch

**Setup:** If it hasn’t been created, create a thread called ‘React Component Lifecycle: Summary’ and another one called ‘React Component Lifecycle: Diagrams’ on Slack

Watch this video:
https://www.youtube.com/watch?v=deMOuGlpOso

### Write

Summarise the React component life cycle in 100-200 words and post your response in the summary thread.

### Draw

Draw a diagram showing the lifecycle of a component and share it in the diagrams thread.

### Pop quiz

<details>
<summary>Do not open before workshop</summary>

1. What are Props?
2. List two examples of when you would use props
3. What is State?
4. What would the state be after running this code?

```js
state = {
  counter: 1,
  alive: true,
  numbers: [1, 2, 3, 4],
  person: { name: 'Chris' }
}

setState({ alive: false, enabled: true, person: { name: 'Tommy' } })
```

5. List at least four benefits of using React
6. What is the Virtual Dom?
7. What is JSX?
8. What does this line do?

`import React from 'react'`

</details>

## Workshop

### Recap

Run through the React Lifecycle leaving lots of time for questions.

### Live Code

Using the test code found here
https://github.com/Sigma-Labs-XYZ/ReactHierarchyTest

- Add console.logs() on each of the react lifecycle methods
- Demonstrate the lifecycle by using `setState()`
- Show how you can use `shouldComponentUpdate()` to stop certain components from rerendering
