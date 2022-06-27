# Week 4 - Mastery quiz

## Quiz

1. React is mainly used for building \_\_\_.

- A. Databases
- B. Connectivity to the Internet
- C. User Interfaces
- D. Design Platforms

<hr>

2. React uses the \_\_\_\_ to increase performance. Explain how it uses this technology to do this.

<hr>

1. Which is the right way of accessing a function fetchData() from an h1 element in JSX?

- A. `<h1>{fetchData()}</h1>`
- B. `<h1>${fetchData()}</h1>`
- C. `<h1>{fetchData}</h1>`
- D. `<h1>${fetchData}</h1>`

<hr>

4. What is used to pass data to a component from another component?

- A. setState
- B. render with arguments
- C. PropTypes
- D. Props

<hr>

5. Order these lifecycle methods into the correct order

- ComponentWillUnmount
- componentDidUpdate
- Constructor
- ComponentDidMount
- shouldComponentUpdate
- Render (Initial)
- Render (Update)

<hr>

6. Which of the following is the correct syntax for a button click event handler foo?

- A. `<button onclick={this.foo()}>`
- B. `<button onclick={this.foo}>`
- C. `<button onClick={this.foo()}>`
- D. `<button onClick={this.foo}>`

<hr>

7. What will happen if the following render() method executes?

```js
render() {
  let langs = ['Ruby', 'ES6', 'Scala']
  return (
    <div>
      {langs.map((it) => (
        <p key={it}>{it}</p>
      ))}
    </div>
  )
}
```

- A. Displays the list of languages in the array
- B. Error. Cannot use direct JavaScript code in JSX
- C. Displays nothing
- D. Error. Should be replaced with a for..loop for correct output

<hr>

8. What is `create-react-app` and benefits of it? Write an example of a time that you have used it.

<hr>

9. What is Jest used for? Write an example of a time that you have used it.

<hr>

10. What is `yarn` used for? Write two examples of times that you have used it.

<hr>

11. What's problem with the following code?

```jsx
render() {
  const { title } = this.state

  return <form class='SubmitStory' onSubmit={(e) => this.handleSubmit(e)}>
    <section>
      <label>Title:
        <input
          value={ title }
          onChange={(e) => this.setState({ title: e.target.value })}
          class={ title.length < 10 ? 'error' : '' }
          type='text'
        />
      </label>
      { title.length < 10 && <p class='error'>Title is too short</p> }
    </section>
  </form>
}
```

<hr>

12. What is the difference between `onClick=({this.handleClick})` and `onClick=({() => this.handleClick()})`

<hr>

13. In `react-testing-library`, what will test check for?

```js
expect(screen.getByRole('button')).not.toBeDisabled()
```

<hr>

## Answers

Once you're done, check your answers [here](quiz_answers.md).
