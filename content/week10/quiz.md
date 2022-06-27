# Week 10 - Mastery quiz

<hr>

1. I'm making the following `fetch()` call from my login page:

```js
fetch('http://backend.url/sessions', {
  method: 'POST',
  headers: {
    'Content-Type': 'json'
  },
  credentials: true,
  body: {
    email: this.state.email,
    password: this.state.password
  }
})
```

What is wrong with the way I've constructed this `fetch()` call? (There are at least 3 errors).

<hr>

2. What's the problem with the following code, which renders an "upvote" and "downvote" button?:

```jsx
{
  ;['up', 'down'].map((direction) => {
    return (
      <button onClick={() => this.voteStory(direction)}>{direction}vote</button>
    )
  })
}
```

<hr>

3. Is the following statement true?

> CORS provides good protection against SQL injection attacks

Why or why not?

<hr>

4. What's the problem with the following code?

```js
import { Client } from 'https://deno.land/x/postgres@v0.11.3/mod.ts'

const client = new Client('social_news.db')
await client.connect()
```

<hr>

5. Which of these should probably _not_ go into an environment variable:

- The port your server is running from
- The number of stories to display per page (assuming your stories are paginated)
- The integration details for your email provider (to send "forgotten password" emails)

<hr>

6. What's problem with the following code?

```jsx
render() {
  const { title } = this.state

  return <form className='SubmitStory' onSubmit={(e) => this.handleSubmit(e)}>
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

7. What's problem with the following code?

```js
.post('/stories/:id/votes', async (server) => {
  const { direction } = await server.body

  (await client.queryObject(`
    INSERT INTO votes (direction, story_id, created_at, updated_at) VALUES ($1, $2, NOW(), NOW())`,
    direction, server.params.id)).rows

  await server.json({ voted: true })
})
```

<hr>

8. Is the following statement true?

> The server can set cookies on the client, but the client can't set cookies on the server.

Why or why not?

<hr>

9. I'm trying to identify users who have never cast a vote on my site. Fill in the blanks in the query below:

```sql
SELECT users.id, email
  FROM users
  <XXX> votes
    ON <YYY> = votes.user_id
  WHERE <ZZZ>
```

<hr>

10. I want to add the ability for users to upload a profile picture. Which HTTP method should I use for the endpoint which handles this?
