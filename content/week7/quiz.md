# Week 7 - Mastery quiz

1. Are any or all of these valid reasons why we might prefer to execute code on the backend, rather than the frontend (in the user's browser)?

- We can have a much higher level of trust for code that runs on the backend, so it's good for sensitive operations (user login, for example)
- It's cheaper to run code on the backend for the company hosting the application
- We can effectively use any language to run code on the backend

<hr>

2. What does the acronym **CRUD** stand for in web development?

<hr>

3. I'm designing a banking application, and I need to add a new endpoint to allow a user to open a new account. Which HTTP method am I most likely to use for my new endpoint?

<hr>

4. I want to add functionality to my link shortener allowing me to delete shortened links. However, I accidentally mix up my `.delete` and `.get` handlers:

```js
// ...
.delete("/l/:shortcode", goToShortlink)
.get("/l/:shortcode", deleteShortlink)

function goToShortlink(server) {
  const { shortcode } = server.params
  const url = await store.get(shortcode)

  server.redirect(url)
}

function deleteShortlink(server) {
  const { shortcode } = server.params
  await store.delete(shortcode)

  server.redirect('/')
}
```

Will I be able to run my application, even though I'm deleting data in my `GET` handler and reading data in my `DELETE` handler?

<hr>

5. Which of the following statements are true?

- A key-value store is conceptually similar to an object in JavaScript
- Key-value stores are never used in production
- Key-value stores are much more powerful and flexible than SQL databases
- We can leverage serialization (e.g. to JSON) to store more complex values in a KV store
- The user can read all of the values in a key-value store from their browser

<hr>

6. What are the _two_ main problems with the code below (for an imagined banking application)?:

```js
// ...
import { Application } from 'https://deno.land/x/abc@v1.3.1/mod.ts'

const app = new Application()
const PORT = 8080
const christmas = new Date(`December 25, ${new Date().getFullYear()}`)

app
  .get('/', async (server) => {
    const store = new Store('bank')
    await store.set('balance', 1000)
  })
  .get('/withdraw', async (server) => {
    const store = new Store('bank')
    const oldBalance = await store.get('balance')

    await store.set('balance', oldBalance - 100)
  })
  .get('/deposit', async (server) => {
    const store = new Store('bank')
    const oldBalance = await store.get('balance')

    await store.set('balance', oldBalance + 100)
  })
  .start({ port: PORT })
console.log(`Server running on http://localhost:${PORT}`)
```

<hr>

7. Write an endpoint that accepts a `GET` request to the path `cities` that returns a list of three city names in an array

<hr>

8. What is a CORS? What does it achieve?
