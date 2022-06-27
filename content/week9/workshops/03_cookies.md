# Cookies

## Learning Objectives

- Explain what cookies are, and how they enable persistence
- Understand how to set and read cookies
- List the key attributes for controlling cookie behaviour (e.g. expiry, access)

## Pre-work

### Setup

If you haven't already, create a thread in the #workshops channel called 'Week 9: 🍪 Pre-work'

### Research

- What are cookies?
- What is persistence?
- When would we need to use cookies as a developer?

Do some research to answer the above questions and keep a note of all of the links you use.

### Exercise

**Written**

- What's your favourite type of cookie (no wrong answers!)
- Describe what cookies are in your own words, no longer than 100 words.

**Coding Exercise**

- Create a single page JS app to set and display your favourite type of cookie.

This is what the output should look like, where your _name_ and the _type of cookie_ are the cookies that you have set.![Screenshot 2021-10-07 at 17 56 02](https://user-images.githubusercontent.com/86953663/136430687-113fb988-bbb8-407b-9e72-e0bc804dafb7.png)

Share your answers and links to research in the above thread.

## Workshop

### Metaphor

We can begin by explaining cookies using the metaphor of a cloakroom tag:

![Cloakroom tag](../assets/cloakroom-tag.jpg)

The key aspects of the metaphor which apply:

- The tag has no inherent meaning or value. It's just a token to associate a customer (user) with their possessions (data)
- A cloakroom needs a place to store the coats, separate from the system of tags. Likewise, we'll usually use cookies in concert with a storage backend (a database)
- You wouldn't be able to use a cloakroom tag at a different establishment. Likewise, generally cookies only work within the scope of a single domain

However, there are a couple of key differences:

- Cloakroom tags tend to be numbered sequentially, since it's difficult to forge a physical tag. With digital cookies, we usually choose a hard-to-guess number (a UUID) for improved security
- In some cases, cookies can be used across domains. This could be analogous to cloakroom tags being usable across a chain of nightclubs

### Live Coding

Begin with a simple `abc` server:

```js
import { Application } from 'https://deno.land/x/abc@v1.3.3/mod.ts'

const app = new Application()

app
  .get('/time', (c) => {
    return server.json({ time: new Date().toISOString() })
  })
  .start({ port: 8080 })
```

Notice that the time updates upon each request. Now we add cookies to add optional persistence:

```js
import { Application } from 'https://deno.land/x/abc@v1.3.3/mod.ts'

const app = new Application()

app
  .get('/time', (server) => {
    const time = server.cookies.time ?? new Date().toISOString()
    return server.json({ time })
  })
  .post('/cookie', (server) => {
    server.setCookie({
      name: 'time',
      value: new Date().toISOString()
    })
  })
  .start({ port: 8080 })
```

We can now use cookies to "freeze" the time that's returned by the `/time` endpoint.

Next, clear the cookies using Application → Storage tab of the Chrome Developer Tools. Notice that the time "unfreezes". Next add an expiry to the `setCookie` call, and demonstrate how the time freezing effect becomes temporary (lasting until the cookie's expiration).

Finally, in the Deno REPL, use the [`uuid` package](https://deno.land/std@0.106.0/uuid/README.md) to generate a UUID. Discuss how a UUID could be used to associate a user with a session (i.e. the UUID stored as a cookie is used to validate a user's session, stored in the database).

### Group Task

Research each of the cookie attributes below. Write a short summary of what the attribute does.

- `Domain`
- `Path`
- `Expires`
- `Max-Age`
- `HttpOnly`
- `SameSite`
- `Secure`
