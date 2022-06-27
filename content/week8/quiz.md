# Week 8 - Mastery quiz

<hr>

1. Fill in the missing keywords for the below query to fetch all Pokemon with a `weight` between 1000 and 5000:

```sql
SELECT * <XXXX> pokemon <YYYY> weight >= 1000 <ZZZZ> weight <= 5000;
```

<hr>

2. Why is the below SQL query not valid?:

```sql
SELECT name FROM pokemon LIMIT 5 WHERE height < 100;
```

<hr>

3. Which of the syntaxes is the correct approach for inserting multiple rows at once?

```
INSERT INTO drinks (name, price, size_ml, caffeinated) VALUES ('Espresso', 200, 60, true, 'Latte', 300, 250, true);
INSERT INTO drinks (name, price, size_ml, caffeinated) VALUES [('Espresso', 200, 60, true), 'Latte', 300, 250, true)];
INSERT INTO drinks (name, price, size_ml, caffeinated) VALUES ('Espresso', 200, 60, true), ('Latte', 300, 250, true);
INSERT INTO drinks (name, price, size_ml, caffeinated) VALUES ('Espresso', 200, 60, true), (name, price, size_ml, caffeinated) VALUES ('Latte', 300, 250, true);
```

<hr>

4. Why is the below SQL query not valid?:

```sql
SELECT name, type FROM pokemon JOIN types.pokemon_id = pokemon.id;
```

<hr>

5. Is the below code vulnerable to an SQL injection attack? If so, how could it be exploited?:

```js
.post('/stories', async (server) => {
  const { title, url } = await server.body

  db.query(`INSERT INTO stories (title, url, created_at, updated_at) VALUES ('${ title }', '${ url }', datetime('now'), datetime('now'))`)
})
```

<hr>

6. Is the below SQL query valid? Why or why not?:

```sql
select * from pokemon where weight > 100;
```

<hr>

7. Is the below code vulnerable to an SQL injection attack? If so, how could it be exploited?:

```js
.post('/stories/:id/votes', async (server) => {
  const { id } = server.params
  const { direction } = await server.body

  db.query(`UPDATE stories SET score = ${ direction === 'down' ? 'score - 1' : 'score + 1' } WHERE id = ?`, [id])
})
```

<hr>

8. What's the problem with the code below?:

```js
if (db.query('SELECT COUNT(*) FROM stories;') > 100) {
  console.log('You have published more than 100 stories 🎉!')
}
```

<hr>

9. Consider the database below:

![](https://user-images.githubusercontent.com/636814/93799668-5d7b8b80-fc37-11ea-9994-5f2f3e6e7c89.png)

My `books` table has 5 rows, my `publishers` table has 4 rows. I run the following query:

```sql
SELECT * FROM books JOIN publishers ON publishers.name != 'Macmillan';
```

How many results will be returned?

<hr>

10. What's the problem with this SQL query, and how would I remedy it?:

```sql
SELECT * FROM pokemon JOIN types ON id = pokemon_id JOIN descriptions ON id = pokemon_id;
```
