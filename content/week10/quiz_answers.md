# Week 10 - Mastery quiz (answers)

<hr>

Question 1.

**Answer & explanation**:

1. `credentials` should be set to `'include'`, not `true`.
2. `body` needs to be a string, so I should encode the object as JSON:

```js
body: JSON.stringify({
  email: this.state.email,
  password: this.state.password
})
```

3. To let the backend know we're sending JSON, we should `Content-Type` to `application/json` (not just `json`).

**If you got this wrong**: Review the MDN docs on how to use `fetch()`:

- [:link: - Using Fetch (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

<hr>

Question 2.

**Answer**:

We've forgotten to provide a `key` to each component we're returning from `map()`, e.g.

```jsx
{
  ;['up', 'down'].map((direction) => {
    return (
      <button key={direction} onClick={() => this.voteStory(direction)}>
        {direction}vote
      </button>
    )
  })
}
```

**If you got this wrong**: Review the section of React docs linked below:

- [:link: - React docs - Lists and keys](https://reactjs.org/docs/lists-and-keys.html)

<hr>

Question 3.

**Answer & explanation**:

This statement is false. Although CORS is related to security, it's about preventing malicious sites being able to use the browser to read or write data ("impersonating" the user) on other sites which it shouldn't have access to. CORS is enforced on the _client-side_. On the other hand, SQL injection attacks exploit _server-side_ vulnerabilities (when we interpolate user input directly into an SQL query).

**If you got this wrong**: Review the materials below:

- [:link: - Protecting against SQL injection](https://www.hacksplaining.com/prevention/sql-injection)
- [:link: - What is CORS?](https://www.youtube.com/watch?v=UjozQOaGt1k)
- [:link: - CORS (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

<hr>

Question 4.

**Answer & explanation**:

We're using PostgreSQL in the code shown, however, we're trying to initialize the connection with a filename (`social_news.db`). SQLite uses flat-files to store its databases but Postgres does not. We'd instead need to pass a connection URL like so:

```js
const client = new Client(
  'postgres://coaching@localhost:5432/social_news_development'
)
```

**If you got this wrong**: Review the materials below:

- [:link: - SQLite vs PostgreSQL - Which database to use and why?](https://tableplus.com/blog/2018/08/sqlite-vs-postgresql-which-database-to-use-and-why.html)
- [:link: - Deno postgres library docs](https://deno.land/x/postgres@v0.11.3)

<hr>

Question 5.

**Answer & explanation**:

We'd probably put the port into an environment variable, as this is highly likely to vary between development & production. Our email config would also be reasonable to put into an environment variable (as we might want to, say, disable the sending of emails in our development environment).

However, it would be unusual to vary the number of stories per page between our different environments. Indeed, doing so could open us up to bugs in production which we won't be able to spot in development.

**If you got this wrong**: Review this week's materials on environment variables.

<hr>

Question 6.

**Answer & explanation**:

We use `class` instead of `className` throughout. `class` is a reserved word in JS, so we need to use `className` when we want to set the HTML `class` property.

**If you got this wrong**: Review the section of React docs linked below:

- [:link: - React docs - Styling and CSS](https://reactjs.org/docs/faq-styling.html)

<hr>

Question 7.

**Answer & explanation**:

A possible issue is that the content of our response is a bit paltry. A bigger issue though it that we're not _validating our user input_, in particular the `direction` parameter (`story_id` will be "validated" by our foreign key constraint so is less of a concern). We should check that `direction` conforms to our expected values, using a check like:

```js
if (!['up', 'down'].includes(direction)) throw new Error('Unknown direction')
```

**If you got this wrong**: Review the article below:

- [:link: - Input Validation Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)

<hr>

Question 8.

**Answer & explanation**:

The statement is true. Cookies live on the client (in the browser), and generally the browsers sets/updates/deletes these cookies in response to instructions from the server, via the `Set-Cookie` header. Clients provide their own cookies to the server when making request. The server doesn't have a concept of "its own" cookies.

**If you got this wrong**: Review the materials on cookies below:

- [:link: - Using HTTP cookies (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [:link: - What Are Cookies? And How They Work | Explained for Beginners!](https://www.youtube.com/watch?v=rdVPflECed8)

<hr>

Question 9.

**Answer & explanation**:

Our completed query is:

```sql
SELECT users.id, email
  FROM users
  LEFT OUTER JOIN votes
    ON users.id = votes.user_id
  WHERE votes.id IS NULL
```

We need to perform a `LEFT OUTER JOIN` so that we don't discard users who we can't associate with a row in the `votes` table (in fact these are the users we care about!). Our `WHERE` clause looks for instances nothing has been `JOIN`ed, and thus `votes.id` is `NULL`.

**If you got this wrong**: Review the article below:

- [:link: - How to Master Anti Joins and Apply Them to Business Problems](https://mode.com/blog/anti-join-examples/)

<hr>

Question 10.

**Answer & explanation**:

The first time I upload a profile picture, I should probably be making a `POST` request since I'm creating/adding something to my site. Uploading an updated profile picture should likely be done with a `PUT` or `PATCH` request.

A `GET` or `DELETE` request wouldn't be very semantic in this case.

**If you got this wrong**: Review the below materials on HTTP method conventions:

- [:link: - REST Best Practices: Choosing HTTP Methods](https://blog.4psa.com/rest-best-practices-choosing-http-methods/)
- [:link: - REST API Tutorial / HTTP Methods](https://restfulapi.net/http-methods/)
