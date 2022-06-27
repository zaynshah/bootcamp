# Week 8 - Mastery quiz (answers)

<hr>

Question 1.

**Answer**: The missing keywords are `FROM`, `WHERE` and `AND`.

**If you got this wrong**: Review the week's introductory material on `SELECT` statements.

<hr>

Question 2.

**Answer & explanation**: Because `LIMIT` has to come after our `WHERE` clause, like so:

```sql
SELECT name FROM pokemon WHERE height < 100 LIMIT 5;
```

**If you got this wrong**: Review the recap for Challenge 2, and revisit the mnemonic exercise if needed:

- [:link: - Challenge 2 Recap](https://github.com/Sigma-Labs-XYZ/curriculum/tree/main/week6#recap)

<hr>

Question 3.

**Answer & explanation**: The third example is the correct syntax:

```sql
INSERT INTO drinks (name, price, size_ml, caffeinated) VALUES ('Espresso', 200, 60, true), ('Latte', 300, 250, true);
```

**If you got this wrong**: Review the material below:

- [:link: - SQLite INSERT with Examples - SQLite Tutorial](https://www.sqlitetutorial.net/sqlite-insert/)

<hr>

Question 4.

**Answer & explanation**: The syntax for our `JOIN` clause is wrong. We must provide the name of the table we're joining onto after the `JOIN` keyword, and then provide the `JOIN` condition after the `ON` keyword, like so:

```sql
SELECT name, type FROM pokemon JOIN types ON types.pokemon_id = pokemon.id;
```

**If you got this wrong**: Review the section on `JOIN`s in the week's materials, and the article below:

- [:link: - SQLite INNER JOIN with Examples - SQLite Tutorial](https://www.sqlitetutorial.net/sqlite-inner-join/)

<hr>

Question 5.

**Answer & explanation**: The code is vulnerable to SQL injection. If I were to submit a story with a title like `'); DROP TABLE stories;`, I could destroy the entire `stories` table! To remedy this, I should employ safe interpolation using `?` substitution:

```js
.post('/stories', async (server) => {
  const { title, url } = await server.body

  db.query(`INSERT INTO stories (title, url, created_at, updated_at) VALUES (?, ?, datetime('now'), datetime('now'))`, [title, url])
})
```

**If you got this wrong**: Review the below material on SQL injection:

- [:link: - Preventing SQL Injections](https://www.youtube.com/watch?v=-jHxXRJ073k)
- [:link: - Protecting against SQL injection](https://www.hacksplaining.com/prevention/sql-injection)

<hr>

Question 6.

**Answer & explanation**: The query is valid, it contains all the constituent parts of a "classic" `SELECT` statement (columns to return, table to query, `WHERE` clause) in the correct order. The only thing unusual about our query is that our keywords (`SELECT`, `FROM`, `WHERE`) are not capitalised. Although this is a best practice (in order to make our queries more readable) it doesn't impact the operation of our query.

<hr>

Question 7.

**Answer & explanation**: The code is not vulnerable to SQL injection, even though we're using `${}` string interpolation in an SQL query, the only two possible values that are interpolated are the two branches of the ternary operator (i.e. `'score - 1'` or `'score - 1'`). For `id`, we use safe interpolation so are protected. However, I'd **still advise against this approach** - avoid string interpolation into SQL strings whenever possible (even if in an ostensibly "safe" example like this), and prefer a longer, more explicit alternative like:

```js
.post('/stories/:id/votes', async (server) => {
  const { id } = server.params
  const { direction } = await server.body

  if(direction === 'down') {
    db.query('UPDATE stories SET score = score - 1 WHERE id = ?', [id])
  } else {
    db.query('UPDATE stories SET score = score + 1 WHERE id = ?', [id])
  }
})
```

**If you got this wrong**: Review the below material on SQL injection:

- [:link: - Preventing SQL Injections](https://www.youtube.com/watch?v=-jHxXRJ073k)
- [:link: - Protecting against SQL injection](https://www.hacksplaining.com/prevention/sql-injection)

<hr>

Question 8.

**Answer & explanation**: `db.query` always returns an array (even for, say, a `SELECT COUNT(*)` query). We'd need to opt for something more involved, like:

```js
const [storyCount] = [...db.query('SELECT COUNT(*) FROM stories;').asObjects()]

if (storyCount['COUNT(*)'] > 100) {
  console.log('You have published more than 100 stories 🎉!')
}
```

**If you got this wrong**: Review the SQLite for Deno documentation:

- [:link: - SQLite for Deno](https://deno.land/x/sqlite@v2.4.2)

<hr>

Question 9.

**Answer & explanation**: This is a tricky one. In this case, no publishers are named "Macmillan" so our `ON` clause will always be true. In other words, in practice the query is effectively saying:

```sql
SELECT * FROM books JOIN publishers ON TRUE;
```

(This is valid SQL). What we're saying here is to `JOIN` **every row in our `books` table with every row in our `publishers` table**, therefore we'll get 20 rows returned by the query (5 × 4).

**If you got this wrong**: Review the section on `JOIN`s in the week's materials, and the article below:

- [:link: - SQLite INNER JOIN with Examples - SQLite Tutorial](https://www.sqlitetutorial.net/sqlite-inner-join/)

<hr>

Question 10.

**Answer & explanation**: Running the query yields: `Error: ambiguous column name: pokemon_id`. In this case, both my `types` and `descriptions` tables have a `pokemon_id` column, it's not clear which I'm referencing in my `ON` clauses. The solution here is to use fully-qualified column names:

```sql
SELECT * FROM pokemon JOIN types ON pokemon.id = types.pokemon_id JOIN descriptions ON pokemon.id = descriptions.pokemon_id
```

(Using `pokemon.id` instead of `id` is optional, but I think further improves readability).

**If you got this wrong**: Review the article below:

- [:link: - Best Practices: Properly referencing columns](https://www.sentryone.com/blog/aaronbertrand/best-practices-referencing-columns)
