# Week 4 - Mastery quiz (answers)

Question 1.

**Answer & explanation**: The first and third point are true, however it's generally _not_ cheaper to run code on the backend as we'll be paying for the servers - whereas we of course aren't paying for the computing power of our users' browsers.

**If you got this wrong**: Go through the How the backend works video and the articles below:

<img src="https://img.youtube.com/vi/4r6WdaY3SOA/0.jpg" height="200">

- [:link: - How The Backend Works](https://www.youtube.com/watch?v=4r6WdaY3SOA)
- [:link: - Backend Data Validations and Why You Need Them](https://betterprogramming.pub/back-end-data-validations-73ea9004c6d7)
- [:link: - Frontend vs. backend: what's the difference?](https://www.pluralsight.com/blog/software-development/front-end-vs-back-end)

<hr>

Question 2.

**Answer**: Create, Read, Update, Delete.

**If you got this wrong**: Review the below refresher on CRUD:

- [:link: - What is CRUD? (Codecademy)](https://www.codecademy.com/articles/what-is-crud)

<hr>

Question 3.

**Answer & explanation**: You'd most likely use a `POST` request, since you're _creating_ a new resource (an account). You could perhaps make an argument for a `PUT`/`PATCH` (perhaps you conceptualise the opening of a new account as _modifying_ a users' list of open accounts). However `GET` would be a poor choice, since we're modifying the state of our system (`GET` requests should ideally be side effect free), as would `DELETE`.

**If you got this wrong**: Review the below materials on HTTP:

- [:link: - An introduction to HTTP: everything you need to know (freecodecamp)](https://www.freecodecamp.org/news/http-and-everything-you-need-to-know-about-it/)

<hr>

Question 4.

**Answer & explanation**: Our code won't throw any errors, since the mapping between HTTP methods and CRUD operations is _only a convention_. Most frameworks will let me do want I want in my handlers, if I want a `GET` request to my homepage (`/`) to delete all the data in my database, so be it! However, sticking to HTTP method conventions makes our applications much easier to work with.

**If you got this wrong**: Review the below materials on HTTP method conventions:

- [:link: - REST Best Practices: Choosing HTTP Methods](https://blog.4psa.com/rest-best-practices-choosing-http-methods/)
- [:link: - REST API Tutorial / HTTP Methods](https://restfulapi.net/http-methods/)

<hr>

Question 5.

**Answer & explanation**:

- _A key-value store is conceptually similar to an object in JavaScript_: True, each key is associated with a value, in the same way that each property name is associated with a value in a JS object.
- _Key-value stores are never used in production_: False, plenty of production grade KV stores like RocksDB exist.
- _Key-value stores are much more powerful and flexible than SQL databases_: False, the advantages of KV stores over SQL databases are generally speed and simplicity, rather than power and flexibility.
- _We can leverage serialization (e.g. to JSON) to store more complex values in a KV store_: True, values are typically strings, but thanks to languages like JSON or YAML we can use strings to capture complex data.
- _The user can read all of the values in a key-value store from their browser_: False, as with a normal database we mediate access to the KV store via the backend.

**If you got this wrong**: Review the below materials on key-value stores:

- [:link: - What is a key-value store?](https://hazelcast.com/glossary/key-value-store/)
- [:link: - Key–value database (Wikipedia)](https://en.wikipedia.org/wiki/Key%E2%80%93value_database)

<hr>

Question 6.

**Answer & explanation**: Firstly, we use `GET` everywhere, even though we are changing the state of our system in every handler (which goes against best practices). Secondly, we reinitialise the `store` in each handler, which is inefficient at best and could cause unexpected behaviour at worst. We should instead initialise our `store` once before writing our handlers.

**If you got this wrong**: Review the below materials on HTTP method conventions:

- [:link: - REST Best Practices: Choosing HTTP Methods](https://blog.4psa.com/rest-best-practices-choosing-http-methods/)
- [:link: - REST API Tutorial / HTTP Methods](https://restfulapi.net/http-methods/)

<hr>

Question 7.

**Answer & explanation**:

An endpoint with these requirements might look like this

```js
  .get('/cities', (server) => {
      server.json(["Niamey", "Cairo", "Paris"])
  })
```

**If you got this wrong**: Review the the below materials

- [:link: - ABC Getting Started Docs](https://deno.land/x/abc@v1.3.3/docs/getting_started.md)
- [:link: - 5 Ways to Build a HTTP Server With Deno](https://tomanagle.medium.com/5-ways-to-build-a-http-server-with-deno-3169389118aa) (Note: Open in private browser to avoid paywall)

<hr>

Question 8.

**Answer & explanation**:

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any other origins (domain, scheme, or port) than its own from which a browser should permit loading of resources.

CORS also relies on a mechanism by which browsers make a “preflight” request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

**If you got this wrong**: Review the the below materials

- [:link: - Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

<hr>
