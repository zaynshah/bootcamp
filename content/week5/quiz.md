# Week 5 - Mastery quiz

<hr>

1. List at least four of HTTP Methods and describe what they do

<hr>

2. What is the meaning of a 200 status code when returned from a server?

<hr>

3. What is the meaning of a 404 status code when returned from a server?

<hr>

4. When is a the `body` of a HTTP Request/Response used?

<hr>

5. What is the difference between a `GET` and `POST` request?

<hr>

6. What are the Headers of a HTTP Request? List three and describe what they do.

<hr>

7. What is wrong with this code?

```js
function getData(url) {
  const data = await fetch(url)
  const json = await data.json()
  return data
}

getData('www.verygoodapi.com/details')
```

<hr>

8. Consider the following async function and its output. What will be displayed to the console when calling the f() function?

```js
async function f() {
  let result = 'first!'
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000)
  })

  result = await promise

  console.log(result)
}

f()
```

- A. first!
- B. done!
- C. JavaScript error
- D. Something else

<hr>

9. Is this the correct way fetch data from an endpoint as soon as a component mounts in React?

```js
async function componentDidMount() {
  let data = await fetch('www.myapi.com/data')
  let json = await data.json()
  this.state = { data: json }
}
```

<hr>
10. What are the three states that a `Promise` can be in?

<hr>

11. What would be the output of this code?

```js
Promise.resolve('Success!')
  .then((data) => {
    return data.toUpperCase()
  })
  .then((data) => {
    console.log(data)
  })
```

- A. print "Success!" and "SUCCESS!"
- B. print "Success!"
- C. print "SUCCESS!"
- D. Nothing prints
