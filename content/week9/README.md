# Backends III: Advanced SQL & Security <!-- omit in toc -->

This week we'll build out the final features of the backend for our social news site: an improved voting system, comments and tags. We'll look at the difference between authentication and authorization, understand how cookies and tokens work. Finally we'll discuss content types and create a machine-accessible version of our site (an API). This will become an important asset for next week when we look at single page apps and React.

## Contents <!-- omit in toc -->

- [Learning Objectives](#learning-objectives)
- [Previous Sessions](#previous-sessions)
- [Challenge 1: Working with one-to-many relationships](#challenge-1-working-with-one-to-many-relationships)
  - [Task](#task)
    - [Column `votes` Approach](#column-votes-approach)
    - [Table `votes` Approach](#table-votes-approach)
  - [Indexes and foreign key constraints](#indexes-and-foreign-key-constraints)
  - [Aggregate functions](#aggregate-functions)
    - [Task](#task-1)
  - [Overcoming the N+1 query problem](#overcoming-the-n1-query-problem)
    - [Task](#task-2)
- [Challenge 2: Authentication and authorization](#challenge-2-authentication-and-authorization)
  - [Creating an insecure user system](#creating-an-insecure-user-system)
  - [Introducing hashing and salting](#introducing-hashing-and-salting)
  - [Introducing cookies and sessions](#introducing-cookies-and-sessions)
  - [Cookies on the Front End](#cookies-on-the-front-end)
  - [User authorization](#user-authorization)
- [Above & beyond](#above--beyond)
- [Deployment](#deployment)

## Timetable <!-- omit in toc -->

| Time                | Focus                                                                                                                                                                                                                                                                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Monday morning      | Begin [Challenge 1](#challenge-1-working-with-one-to-many-relationships), learn about one-to-many relationships, foreign key constraints                                                                                                                                                                                                |
| Monday afternoon    | Continue [Challenge 1](#challenge-1-working-with-one-to-many-relationships), learn about indexes, aggregate functions, answer Pokémon questions                                                                                                                                                                                         |
| Tuesday morning     | Complete [Challenge 1](#challenge-1-working-with-one-to-many-relationships), learn about N+1 query problem, `CASE` statements, answer questions on social news site                                                                                                                                                                     |
| Tuesday afternoon   | Begin [Challenge 2](#challenge-2-authentication-and-authorization), create insecure login system with plaintext passwords                                                                                                                                                                                                               |
| Wednesday morning   | Continue [Challenge 2](#challenge-2-authentication-and-authorization), set up secure hashing and salting with `bcrypt`                                                                                                                                                                                                                  |
| Wednesday afternoon | Continue [Challenge 2](#challenge-2-authentication-and-authorization), add persistent sessions and cookie support                                                                                                                                                                                                                       |
| Thursday morning    | Finish [Challenge 2](#challenge-2-authentication-and-authorization), learn about and implement user authorization                                                                                                                                                                                                                       |
| Thursday afternoon  | Take the [Week 9 Mastery Quiz](./quiz.md).                                                                                                                                                                                                                                                                                              |
| Friday              | **If you scored more 9 or more in the Mastery Quiz** - Congratulations 🎉! You've mastered the concepts for this week. You can move on to the Above & beyond challenges.                                                                                                                                                                |
|                     | **If you scored less than 9 in the Mastery Quiz** - Take the time you need to review the concepts you're unsure about (the guidance in the Quiz answers will point you to the materials to review). Once you're comfortable with all the concepts in the quiz, you can move on to the Above & beyond challenges for any remaining time. |

## Learning Objectives

By the end of this week a learner will be able to

- Define the different type of relationships in SQL tables; one-to-one, one-to-many and many-to-many
- Define what a foreign key is and why it’s useful
- Write an SQL query to set a foreign key for a table
- Write an SQL query to group results by an column
- Use aggregate queries to retrieve novel insights from a table
- Use bcrypt to encrypt a password for safe storage
- Use bcrypt to generate a salt
- Use bcrypt to compare a provided with an encrypted password to implement authentication

## Previous Sessions

You can find the previous recorded sessions of this week here on Rewatch

- [Cohort 1 Workshops](https://sigmalabs.rewatch.com/collection/788/week-7-backends-iii) (Note: This week has changed a little from the lesson you'll be learning)

## Challenge 1: Working with one-to-many relationships

As you probably remember, on our social news site, currently we track score as a simple integer column on our stories table. Let's call this approach the "`votes` column approach" We remarked that this was a potential not the optimal approach, and that we could instead store each vote as a row in a separate `votes`, with a [One-to-many association]() between `stories` and `votes`. Let's call this the "`votes` table approach"

![](https://image.slidesharecdn.com/introductiontotradeoffs-131003002746-phpapp02/95/introduction-to-tradeoffs-7-638.jpg?cb=1444957614)

A very important skill in software development is evaluating the tradeoffs inherent to different approaches to solving a problem, and figuring out which approach is best.

### Task

List out the advantages and disadvantages of the two approaches.

#### Column `votes` Approach

<details>

<summary>Click here to reveal answer</summary>

_Advantages:_

- Very simple to implement
- Simple to understand
- Requires little storage space/memory
- Votes are anonymous/aggregated (could be an advantage for privacy sensitive users)

_Disadvantages_

- Ambiguous. For example a story with score = 0 may have had no votes, or an equal number of upvotes and downvotes
- Don't know how many votes were cast
- Don't know when votes were cast
- Votes can't be associated with users. User can vote multiple times, for example

</details>

#### Table `votes` Approach

<details>

<summary>Click here to reveal answer</summary>

_Advantages:_

- Unambiguous/data is more granular
- Know exactly how many votes were counted and by who
- Allows us to limit votes (e.g. one vote per user per story)
- Can see when votes were cast

_Disadvantages_

- Requires slightly more disk space
- More complex to implement

</details>

---

So which approach is better? There's no one-size fits all answer. Rather, we have to pick the _right tool for the job_, and consider how the advantages/disadvantages of each approach correspond with our business needs. For example, imagine we wanted our social news site to run on a Tamagotchi! We'd be working with very limited hardware with a tiny amount of disk space - so it would probably make sense to adopt the less resource intensive "`votes` column approach".

However, it's clear that for a web application, not being able to tell which users voted for which stories is simply too limiting. So let's migrate from the "`votes` column approach" to the "`votes` table approach". Remove the `score` column from the `stories` table, then add a `votes` table to database by modifying `schema.js`. Once you're done, expand the model answer below and check that your solution is comparable.

<details>
  <summary>Expand for the answer</summary>

```sql
CREATE TABLE votes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  direction TEXT NOT NULL DEFAULT 'up',
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  story_id INTEGER
)
```

</details>

> **💡 Top tip:** Considering tradeoffs in a structured way is a great weight to make important decisions when designing software. In real-world tradeoff analysis we might compare two solutions across a dozen or more dimensions (see the example grid below) before deciding which to move forward with:

![](https://miro.medium.com/max/1384/1*Kb1dvbLvmPEonBkfnq8cJg.jpeg)

### Indexes and foreign key constraints

Let's make a quick aside to talk about keys and indexes. For our `votes` table as with our stories table, the first column we create is `id` with the following line:

```sql
id INTEGER PRIMARY KEY AUTOINCREMENT
```

As previously explained `INTEGER` and `AUTOINCREMENT` ensure that the values of this column will correspond with the sequence: 1, 2, 3 etc. So what's the purpose of `PRIMARY KEY`? A primary key is a _unique identifier_ for each row in a table, and every table _must_ have a primary key. Very often primary keys aren't designed to be comprehensible or easy to remember; they might simply be numbers or alphanumeric sequences.

We encounter primary keys in the real-world all the time. For example, if you attended university it's highly likely your student ID will have included a _Student ID_: your university's version of a primary key. If you had a common name and attended a large university, there's a good chance there were other students that shared your name. Your Student ID therefore provides a way of _uniquely identifying_ you and not one of the students who shared your name.

<img src="https://user-images.githubusercontent.com/636814/99792351-44079a80-2b27-11eb-8ccd-7dd11cc87e35.png" width=600>

Primary keys have another important property which is that they are **indexed**. That means you can very retrieve find a row using it's primary key. Imagine I had you a phone book and ask you to find the number associated with the name "KEMP, JAMES". You'd likely find it very quickly. Now imagine you had to find the name associated associated with the number 02920815201. It would probably take you hours! Here _name_ is analogous to an indexed column, whereas _number_ is analogous to an unindexed column. Watch the video below to learn more about indexes:

<img src="https://img.youtube.com/vi/fsG1XaZEa78/0.jpg" height="200">

- [:link: - Indexes in SQL](https://www.youtube.com/watch?v=fsG1XaZEa78) (10 min watch)

To recap, the `PRIMARY KEY` part of our column definition means that the values in the `id` column will be unique and indexed. `AUTOINCREMENT` is convenient (it means we never have to worry about manually ensuring the values of `id`) but not obligatory.

There's a second type of key that's very important when building databases: foreign keys. This is where a column references the _primary key of another table_. If we let the database know that the column is a foreign key, it: 1) adds an index (for fast lookups) and 2) can ensure **data integrity**. Let's illustrate with an example: imagine again a database for a university. We have a table for students and accommodation. We can see that Alice is staying in room 239 in Nightingale Hall:

<img src="https://user-images.githubusercontent.com/636814/99793368-e2483000-2b28-11eb-89aa-3afbae85e966.png" width=600>

Let's imagine Alice is expelled. The administrator deletes Alice's row from the `students` table. However, they don't delete the row for room 239 in the `accommodations` table:

<img src="https://user-images.githubusercontent.com/636814/99793410-f2600f80-2b28-11eb-9fd9-f1a493a10144.png" width=600>

We thus have a record for a "phantom" student in room 239 (see the "bad" row highlighted in red). This is a classic example of a mistake which leads to a problem with **data integrity**.

If the designer of the database had correctly set up a foreign key constraint, this wouldn't have happened. Specifically, the administrator would have been forced to delete the row in `accommodations` _before_ deleting the row in `students`.

Since our `votes` table references our `stories` table, first we need a column in our `votes` table that references the relationship between a story and a vote

```sql
CREATE TABLE votes (
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     story_id INTEGER
     ...
  )
```

Next, we should add a foreign key constraint to our `story_id` column. We can do so with the following syntax:

```sql
FOREIGN KEY(story_id) REFERENCES stories(id)
```

Add this foreign key constraint to your `schema.js`.

### Aggregate functions

For our next step, run `seeds1.sql`. This will populate your database with some `stories` and `votes` (if you get an error running the file, check that your table definition `schema.js` matches the example in the section above).

We no longer have the `score` column on stories; instead we'll need to calculate it ourselves by counting rows in the `votes` column. For this we'll introduce a new kind of tool in SQL: **aggregate functions**. To play with aggregate functions, let's reopen our Pokémon database from last week:

```
sqlite3 week8/pokemon.sqlite
```

Aggregate functions are so named because they give us a result about a group of rows (aggregate here being a fancy word for group). The simplest question to ask about a group of rows, is how many rows are there? For this we use the `COUNT()` function which is usually invoked with the syntax `COUNT(*)` (we'll revisit the significance of the `*` shortly). For example, we can ask how many Pokémon there are in our database:

```
sqlite> SELECT COUNT(*) from pokemon;
COUNT(*)
----------
649
```

We can combine a `COUNT()` query with a `WHERE` clause. For example, we can find the number of Pokémon who measure more than a metre:

```
sqlite> SELECT COUNT(*) from pokemon WHERE height > 100;
COUNT(*)
----------
290
```

`COUNT()` is one of many aggregate functions. Some other useful aggregate functions include `AVG`, `MIN`, `MAX`. For these functions, we need to specify the column we're interested in. For example, if we'd like to know the weight of the heaviest Pokémon that's smaller than 50cm, we'd write:

```
sqlite> SELECT MAX(weight) from pokemon WHERE height < 50;
MAX(weight)
-----------
60000
```

When invoking `COUNT()` we'll usually just use `*` between the parentheses (indicating that we're counting any/all columns). For other aggregate functions, we'll usually specify a column name. Practice aggregate functions on our Pokemon DB with the questions below:

---

> **💡 Exercise:**
>
> - What's the average weight of the original Pokémon (numbers 1 - 151)?
> - What's the weight of the lightest Pokémon?
> - What's the weight of the lightest Pokémon which is over a metre tall?
> - If we stacked all Pokémon on top of each other, how high would we reach. (I.e. what's the total height of all Pokémon)?

---

We can also combine aggregate functions in interesting ways. For example, let's calculate the "BMI" of all Pokemon as their total weight, divided by their total height:

```
sqlite> SELECT SUM(weight) / SUM(height) from pokemon;
SUM(weight) / SUM(height)
-------------------------
500
```

Notice that SQLite automatically names the resulting column `SUM(weight) / SUM(height)`. This would be unwieldy to work with in our template say. (We wouldn't want to write `{{ pokemon['SUM(weight) / SUM(height)'] }}` in Nunjucks for example). We can give the result a better name by using the `AS` keyword:

```
sqlite> SELECT SUM(weight) / SUM(height) AS average_bmi from pokemon;
average_bmi
-----------
500
```

Switch back to the database for our news site. Try the following exercises:

---

> **💡 Exercise:**
>
> - How many votes have been cast in total?
> - How many upvotes did story ID 1 receive?
> - How many downvotes?

---

We'd like to write a single expression that would give us the score for a single story (given its ID), where the score = upvotes - downvotes, with a minimum score of 0. This is possible to do thanks to the power of SQL, although it will require a bit of thought. We'll need to use `SUM`, `MAX` and a new function: `CASE` which will help us turn the `direction` column (which is a `TEXT` column) into a numerical value. You can read documentation for the `CASE` expression [here](https://www.sqlite.org/lang_expr.html#the_case_expression).

This is not an easy expression to write, but have a try before scrolling down to see the solution:

<details>
  <summary>Expand for the answer</summary>

```sql
SELECT MAX(0, SUM(CASE direction WHEN 'up' THEN 1 ELSE -1 END)) AS score FROM stories;
```

</details>

#### Task

Now we can read score to our application. In your React app, loop through each story and fetch the score for that ID and display it. Lastly, update our upvote/downvote endpoint (`.post('/stories/:id/votes'`) so that we `CREATE` a record in `votes` and ensure that score updates as it should.

Lastly, try and order stories by their score. Is this easy? Why or why not?

### Overcoming the N+1 query problem

Although everything works as it should (except perhaps ordering), we've introduced a performance problem in our application. To understand this, start by considering the question: how many SQL queries are we making to the database when we load the index page? Write down your answer then expand the section below:

<details>
  <summary>Expand for the answer</summary>

Assuming you haven't added any additional stories from those provided in `seeds1.sql`, the app is making 6 queries. That is, one initial query (`SELECT * FROM stories`) plus one for of the 5 stories we're displaying.

More generally for N stories we'll make N+1 queries. This is a problem because we double the number of stories we display, our application will become twice as slow! This problem is known as the N+1 query problem.

</details>

To solve this, we'll need to add another tool to our SQL arsenal: the `GROUP BY` clause. Let's introduce it step by step. Again we'll start by playing with our Pokémon database. Let's first get all Pokémon (their names and weights) and their associated types:

```sql
sqlite> SELECT name, weight, type FROM pokemon JOIN types ON types.pokemon_id = pokemon.id;
name        weight      type
----------  ----------  ----------
Bulbasaur   6900        Grass
Bulbasaur   6900        Poison
Ivysaur     13000       Grass
Ivysaur     13000       Poison
Venusaur    100000      Grass
Venusaur    100000      Poison
Charmander  8500        Fire
Charmeleon  19000       Fire
Charizard   90500       Fire
Charizard   90500       Flying
Squirtle    9000        Water
Wartortle   22500       Water
Blastoise   85500       Water
...
```

Notice that most Pokémon appear twice, since they have multiple types. (If you're confused about this or anything else here, review the [One-to-many relationships section](week8/README.md#one-to-many-relationships) of w 8). Let's say we'd like to know the average weight of each Pokémon type. We could go through each type manually, and do the calculation:

```
sqlite> SELECT AVG(weight) FROM pokemon JOIN types ON types.pokemon_id = pokemon.id WHERE type = 'Water';
AVG(weight)
----------------
54398.1651376147
```

But instead we can use a `GROUP BY type` clause, which will instruct SQL to calculate the average weight for each group of rows with the same value for `type`. `GROUP BY` comes at the end of our `SELECT` query:

```sql
SELECT DISTINCT column, AGG_FUNC(column_or_expression), ...
FROM mytable
	JOIN another_table
		ON mytable.column = another_table.column
	WHERE constraint_expression
	GROUP BY column
	HAVING constraint_expression
	ORDER BY column ASC/DESC
	LIMIT num_limit OFFSET num_offset;
```

---

```
sqlite> SELECT type, AVG(weight) FROM pokemon JOIN types ON types.pokemon_id = pokemon.id GROUP BY type;
type        AVG(weight)
----------  ----------------
Bug         30279.3650793651
Dark        44700.0
Dragon      156127.586206897
Electric    44212.8205128205
Fighting    65712.5
Fire        64968.75
Flying      42752.4390243902
Ghost       68325.9259259259
Grass       35042.6666666667
Ground      102325.862068966
Ice         97103.4482758621
Normal      42132.9896907216
Poison      30042.1052631579
Psychic     52236.7647058823
Rock        104619.14893617
Steel       145729.72972973
Water       54398.1651376147
```

Now we can have the tools to consolidate everything into a query which will fetch:

- All stories (and all columns on the stories table)
- The score for each story

Again, try to write the query on your own then scroll down for the solution.

<details>
  <summary>Expand for the answer</summary>

```sql
SELECT stories.*,
  MAX(0, SUM(CASE direction WHEN 'up' THEN 1 ELSE -1 END)) AS score
  FROM stories
  JOIN votes ON votes.story_id = stories.id
  GROUP BY stories.id;
```

</details>

#### Task

Update your Social News website to fix this N+1 issue

## Challenge 2: Authentication and authorization

We now have a fairly robust implementation of an anonymous social news site. However, it would be useful to be able to:

- Show who submitted a story
- Track who voted on a story (thereby preventing people from voting twice)
- Allow commenting on stories (whereby comments from different people can be clearly distinguished)

All of the features require us to implement an **identity system**, whereby users can register, login (and logout) to our site - a very common features of modern websites. Last week, we discussed the risks associated with SQL injection attacks. This week, in implementing our user system, we'll have to be even more aware of **security considerations**. Creating an insecure identity systems could not only compromise our site, it could potentially expose the accounts of our users on other major sites!

As a new developer, you wouldn't be expected to create an identity system from scratch, in large part because they can be dangerous if implemented wrongly. Indeed, many companies prefer to use an "out of the box" solution like [Auth0](https://auth0.com/) to avoid the pitfalls of rolling their own solution. However, it's useful to know how these systems works and this challenge will introduce us to key concepts like authentication, authorization, cookies and hashing.

### Creating an insecure user system

We'll start of by implementing a user system **insecurely**. Specifically, we'll store the passwords of our users in our database as-is, something we should never do in practice. We'll remedy that shortly. For now, revise `schema.js` to add a user table. We'll only store email and password in additional to our "regular" fields (ID, and created and update at timestamps). Write your implementation then expand the spoiler below:

<details>
  <summary>Expand for the answer</summary>

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
)
```

</details>

---

> **ℹ️ Note:** We add a `UNIQUE` constraint to our `email` column to ensure we don't have multiple users sharing the same email address. We could also potentially make `email` a primary key, although this would make it difficult for users to modify their email address in the future, for example.

---

Next, create a registration page in your React app from last week. At a minimum you can keep it spartan like this:

<img src='https://user-images.githubusercontent.com/636814/100214755-8c9cca80-2f10-11eb-813b-bc9a1512fec7.png' width=600>

although you're free to spice it up with some CSS.

Next, create a handler for a `POST` request at `/users` to handle a registration. In this handler you should check that:

- A user with that email doesn't already exist (hint: you should use a `SELECT` statement)
- The password and password confirmation match
- The password is at least 8 characters (and any other validations you'd like)

Finally you should create a login page in your React app from last week and a handler for `POST /sessions`. In the latter, we'll check whether the credentials a visitor provides match with what's stored (insecurely, in plaintext) in our database. This is what we refer to as **user authentication**. We'll need to learn about cookies before we can properly log a user in. For now, let's send some simple JSON from the server

```js
app.post("/sessions", server => {
  const { email, password } = await server.body
  const authenticated = // login for checking user authentication here

  if(authenticated) {
    server.json({success: true})
  } else {
    server.json({success: false})
  }
});
```

Check your login system works as expected (try logging in with a correct password, wrong password, a non-existent user, using another user's password etc.).

### Introducing hashing and salting

We mentioned above that we should never store passwords in plaintext. Two questions arise immediately:

- Why shouldn't we store passwords as-is (in plaintext)?
- What's the alternative?

Begin by watching the video below:

<img src="https://img.youtube.com/vi/8ZtInClXe1Q/0.jpg" height="200">

- [:link: - How NOT to Store Passwords! - Computerphile](https://www.youtube.com/watch?v=8ZtInClXe1Q) (10 min watch)

As the video explains, hashing (and salting), are the best way to "store" passwords, without actually keeping any information that can be exploited by attackers

At it's core a hashing algorithm turns a string of text (like `password123` or Chapter 1 of _Pride and Prejudice_) into another seemingly random string of text of a fixed length like `59f3815589e55e45a8dc4af048f10a0c` (this second string is what we call the "hash"). This algorithm has a few properties:

- Repeatable: if `password123` produces `59f3815589e55e45a8dc4af048f10a0c` the first time time I run the algorithm, it should produce the same hash every other time I run it with the same input
- Irreversible: Given the hash (the output) I shouldn't be able to guess the original text (the input)
- Leaks no info: examining the hash I shouldn't be able to answer questions about the input, like "How long is the input?", "Does the input include the letter 'x'?"
  - As a consequence of this, two similar inputs generally _should not_ produce similar hashes. If `password123` hashes to `59f3815589e55e45a8dc4af048f10a0c`, then `password124` might hash to `d77a9252f6674b77e5f5795a75f06108`
- Avoids collisions: another input producing the hash `59f3815589e55e45a8dc4af048f10a0c` should be extremely rare. There should be no way (beyond an incredible fluke) for me to find such an input.

We'll use an algorithm called bcrypt, generally considered the state of the art for generating password hashes. To recap, as explained in the video, our approach will follow the following steps:

![](https://cyberhoot.com/wp-content/uploads/2020/05/Hash-plus-Salt-1.png)

Revise your `schema.js`: we'll rename `password` to `password_encrypted` and add a `salt` column. Our encryption approach will look like this:

```js
import * as bcrypt from 'https://deno.land/x/bcrypt/mod.ts'

// ...
const salt = await bcrypt.genSalt(8)
const passwordEncrypted = await bcrypt.hash(password, salt)
```

Ensure that `password_encrypted` and `salt` are written to our DB during the `INSERT` phase. Next, modify our `/sessions` handler - which now needs to compare perform the same salting + hashing procedure on the submitted password, then compare it against what's in the DB. (Hint: you should extract the hashing procedure into a function, which can be called in both handlers).

Ensure logging in still works has expected. Congratulations, you've plugged the security holes in our implementation - we're now implementing user authentication without storing plaintext passwords 🎉.

### Introducing cookies and sessions

Finally, we need to actually log a user in when they provide a correct password. To implement this we'll create a simple new table: `sessions`. This table will be a bit different from others we've created so far:

```js
CREATE TABLE sessions (
  uuid TEXT PRIMARY KEY,
  created_at DATETIME NOT NULL,
  user_id INTEGER,
)
```

We'll use a textual UUID (something like: `9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d`) rather than a number for our primary key. This makes our session IDs effectively unguessable. Furthermore, sessions will be immutable (they won't ever be modified) so we won't bother adding an `updated_at` column.

When a user logs in successfully, we'll:

1. Create a session in our database
2. Put the session ID for the newly created session into a cookie

You've almost certainly heard of cookies, if only because of the endless permission popups you see when browsing the web. For a more technical overview, see below:

- [:link: - Using HTTP cookies (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies) (15 min read)

<img src="https://img.youtube.com/vi/rdVPflECed8/0.jpg" height="200">

- [:link: - What Are Cookies? And How They Work | Explained for Beginners!](https://www.youtube.com/watch?v=rdVPflECed8) (5 min watch)

Here's a sketch of what we'll need to do in the "success" path of our login handler:

```js
import { v4 } from 'https://deno.land/std/uuid/mod.ts'

// in /sessions handler
const sessionId = v4.generate()
await db.query(
  "INSERT INTO sessions (uuid, user_id, created_at) VALUES (?, ?, datetime('now'))",
  [sessionId, user.id]
)
server.setCookie({
  name: 'sessionId',
  value: sessionId
})
```

On all subsequent requests to resources that require authentication, we can pull the session ID, check whether it corresponds to a session in our database. If so, we know which user the visitor is logged in as.

To finish up our implementation:

- Write a function `getCurrentUser` which takes a session ID and returns the corresponding user object (e.g. `const [user] = ...db.query('SELECT * FROM users WHERE <...>').asObjects()`).
  - To stop a user being logged in forever (a potential security concern), only `SELECT` sessions less than a week old.
- Call the function in the relevant `POST` handlers (`/votes/`).
- Modify `votes` and `stories` so they include a `user_id` column, and ensure that. Unauthenticated requests should redirect to `/login`.
- Write logic to ensure that a user can only vote once per story.

### Cookies on the Front End

To be able to retrieve cookies with every request we'll have to make a small change to how we're fetching data in our React app.

Here is an example fetch request with the required parameter.

```js
await fetch('http://localhost:8080/sessions', {
  method: 'POST',
  credentials: 'include', // to send and receive cookies with request
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ ... })
})
```

Make sure you include `credentials: 'include'` in your fetch requests to retrieve cookies set by the server.

### User authorization

Let's add one last feature, and explore a final concept for this week: **user authorization**. We'll take the Eurovision approach and say that _you're not allowed to vote for yourself_ - that is, you can't upvote (or downvote stories) you posted. This is an example of user authorization:

<img src='https://res.cloudinary.com/practicaldev/image/fetch/s--VYXihGsl--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/ras8no1uj4ih1ogzy89h.png' width='700'>

Common instances where you should think about user authorization include editing and deleting. Often users are allowed to edit or delete things that they have posted, but not things others have posted. Often, authorization means comparing `user_id`s of resources with the ID of the user who's currently logged in.

## Above & beyond

We've covered a lot this week, but with any remaining time, you can extend your social news site in any way that you like. Some ideas:

1. Add the ability to add comments to stories
2. Add the ability to delete or modify stories
   - but only those you've posted, see _User authorization_ above
3. Add a logout button, which clears the session cookie
4. Add tags to stories.
   - _Hint_: if a story can have multiple tags, and tags are associated with multiple stories, this is a many-to-many relationship, for which you'll need a join table.
5. Add "forgot your password" functionality
6. Add customizable user settings
   - e.g. allow users to specify which city they're from, or upload a profile picture

Continue to add functionality as you see fit

## Deployment

You are also welcome to look into deploying yourself so that it is hosted online. You can find how to do this in the Deployment docs [here](./../week10/DEPLOYMENT.md).
