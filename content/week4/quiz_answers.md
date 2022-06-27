# Week 4 - Mastery quiz (answers)

<hr>

Question 1

**Answer & explanation**:

> C. User Interfaces

React is used only to render the User Interface of an application. We will need to provide other libraries and code to do additional actions (e.g. fetch data, act on user input )

**If you got this wrong**: Review the section of React docs linked below:

- [:link: - Reactjs.org](https://reactjs.org/)

<hr>

Question 2

**Answer & explanation**:

> B. Virtual DOM

React is uses the virtual DOM to calculate what needs to be changes in order to reduce wasted work.

The VDOM works by

1. Creating a lightweight representation of the DOM in memory
2. This is used to calculate all the changes that need to happen on the DOM
3. It then calculates a `diff` that will then changes only the elements in the DOM that need to be changed

**If you got this wrong**: Review the the resources linked below:

- [:link: - Virtual DOM Explained in Simple English](https://programmingwithmosh.com/react/react-virtual-dom-explained/)

<hr>

Question 3

**Answer & explanation**:

> A. `<h1>{fetchData()}</h1>`

In React, we can use JSX to combine JavaScript and HTML. In order to run JS inside a HTML block we need to `{` and `}` to tell the React compiler that this is JavaScript that needs to be run.

**If you got this wrong**: Review the the resources linked below:

- [:link: - JSX in React – Explained with Examples](https://www.freecodecamp.org/news/jsx-in-react-introduction/)

<hr>

Question 4

**Answer & explanation**:

> D. Props

Props are used to pass data between a parent and child component. You can pass any type between components this way (strings, objects, arrays, functions etc)

**If you got this wrong**: Review the the resources linked below:

- [:link: - React – Components and Props](https://reactjs.org/docs/components-and-props.html)

<hr>

Question 5

**Answer & explanation**:

> Mount Stage
>
> 1. Constructor
> 2. Render (Initial)
> 3. ComponentDidMount
>
> Update Stage
>
> 4. ComponentShouldUpdate
> 5. Render (Update)
> 6. ComponentDidUpdate
>
> Unmount Stage
>
> 7. ComponentWillUnmount

This is a tricky one!

Every component goes through the React lifecycle however not every lifecycle method will happen immediately. For example, there could be some time between a component mounting and an update being requested.

**If you got this wrong**: Review the the resources linked below:

- [:link: - React Lifecycle Methods – A Deep Dive](https://programmingwithmosh.com/javascript/react-lifecycle-methods/)

<hr>

Question 6

**Answer & explanation**:

> D. `<button onClick={this.foo}>`

Importantly, `onClick` must be used with a upper case 'c' in React. Also, you mustn't add the parenthesis otherwise React will run your code immediately instead of when the onClick function is called.

**If you got this wrong**: Review the the resources linked below:

- [:link: - Handling Events](https://reactjs.org/docs/handling-events.html)
- [:link: - React onClick event handlers: A complete guide](https://reactjs.org/docs/handling-events.html)

<hr>

Question 7

**Answer & explanation**:

> A. Displays the list of languages in the array

This is working code! It's perfectly possible to render an array of components using a `.map()`

**If you got this wrong**: Review the the resources linked below:

- [:link: - Rendering an Array of Data with map() and JSX](http://www.hackingwithreact.com/read/1/13/rendering-an-array-of-data-with-map-and-jsx)

<hr>

Question 8

**Answer & explanation**:

`create-react-app` is a command line tool, developed by Facebook, to setup a simple React app that we can build upon to create our own apps.

You can use it by writing this command into a terminal window

```sh
npx create-react-app myapp
```

**If you got this wrong**: Review the the resources linked below:

- [:link: - React - Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html)

<hr>

Question 9

**Answer & explanation**:

Jest is a JavaScript testing library that can be used to to test React components.

A simple example of a Jest test might be

```js
test('renders Form component', () => {
  render(<Form />)
  screen.debug()
})
```

**If you got this wrong**: Review the the resources linked below:

- [:link: - How to Start Testing Your React Apps Using the React Testing Library and Jest](https://www.freecodecamp.org/news/8-simple-steps-to-start-testing-react-apps-using-react-testing-library-and-jest/)

<hr>

Question 10

**Answer & explanation**:

`yarn` is a package manager that is automatically used by `create-react-app`. Package managers are useful ways of handling external project dependencies such as libraries.

An example of a time we might use it is to install Jest. For example

```sh
yarn add --dev jest
```

or

```sh
yarn start
```

or

```sh
yarn test
```

**If you got this wrong**: Review the the resources linked below:

- [:link: - Yarn - Getting Started](https://classic.yarnpkg.com/en/docs/getting-started)
- [:link: - NPM vs. Yarn: Which Package Manager Should You Choose?](https://www.whitesourcesoftware.com/free-developer-tools/blog/npm-vs-yarn-which-should-you-choose/)

<hr>

Question 11.

**Answer & explanation**:

We use `class` instead of `className` throughout. `class` is a reserved word in JS, so we need to use `className` when we want to set the HTML `class` property.

**If you got this wrong**: Review the section of React docs linked below:

- [:link: - React docs - Styling and CSS](https://reactjs.org/docs/faq-styling.html)

<hr>

Question 12.

**Answer & explanation**:

When an arrow function is used, the function passed is automatically bound to the scope of the class component. This means that `this` is references the class component from inside the function and thus can access functions such as `setState()`.

If you don't use an arrow function, you have to use `.bind()` in your constructor to bind the function to your class.

**If you got this wrong**:

- [:link: - Binding functions in React](https://codeburst.io/binding-functions-in-react-b168d2d006cb)

<hr>

Question 13.

**Answer & explanation**:

This test checks if the first button on the screen is not disabled. That is to say that it checks if the `html` attribute [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled) is not on the element.

The important point here is that it will **only** check the first button it finds in the component. If the component has more than one button it will not check all of them.

**If you got this wrong**:

- [:link: - How to Start Testing Your React Apps Using the React Testing Library and Jest](https://www.freecodecamp.org/news/8-simple-steps-to-start-testing-react-apps-using-react-testing-library-and-jest)

<hr>
