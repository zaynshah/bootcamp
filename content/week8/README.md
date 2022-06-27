# Backends II: SQL <!-- omit in toc -->

This week we'll deepen our understanding of backend technology, as well as "leveling up" our data layer from key value stores to full relational databases. This will mean learning a new language: SQL - the language that most relational databases speak.

With relational databases, we'll be able to build much more complex systems. This week we'll embark on some SQL challenges, then stretch ourselves by creating a news site with voting (similar to Reddit or HackerNews).

## Contents <!-- omit in toc -->

- [Learning Objectives](#learning-objectives)
- [Previous Sessions](#previous-sessions)
- [Intro to Relational Databases](#intro-to-relational-databases)
  - [Modifying data](#modifying-data)
  - [Schema changes vs. data changes](#schema-changes-vs-data-changes)
- [Challenge 1: SQLCafé - our first SQLite database](#challenge-1-sqlcafé---our-first-sqlite-database)
- [Challenge 2: Pokémon, gotta `SELECT` 'em all!](#challenge-2-pokémon-gotta-select-em-all)
  - [`JOIN`s and one-to-one relationships](#joins-and-one-to-one-relationships)
  - [One-to-many relationships](#one-to-many-relationships)
  - [Recap](#recap)
- [Challenge 3: Social news site](#challenge-3-social-news-site)
  - [Designing the schema](#designing-the-schema)
  - [Data types, creating the schema and seeding the database](#data-types-creating-the-schema-and-seeding-the-database)
  - [Social News React App](#social-news-react-app)
  - [Loading Stories Dynamically](#loading-stories-dynamically)
  - [Adding an Empty State](#adding-an-empty-state)
  - [Upvotes and Downvotes](#upvotes-and-downvotes)
  - [Enabling Voting Buttons](#enabling-voting-buttons)
  - [Story Submission](#story-submission)
  - [Above & Beyond](#above--beyond)
    - [Easier](#easier)
    - [Harder](#harder)

## Timetable <!-- omit in toc -->

| Time                | Focus                                                                                                                                                                                                                                                                                                                                   |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Monday morning      | Review introductory materials on SQL, install SQLite.                                                                                                                                                                                                                                                                                   |
| Monday afternoon    | Complete [Challenge 1](#challenge-1-sqlcafé---our-first-sqlite-database), learn about basic `SELECT`/`CREATE`/`UPDATE`/`DELETE` statements                                                                                                                                                                                              |
| Tuesday morning     | Start [Challenge 2](#challenge-2-pokémon-gotta-select-em-all), modify data with `CREATE`/`UPDATE`/`DELETE` statements.                                                                                                                                                                                                                  |
| Tuesday afternoon   | Complete [Challenge 2](#challenge-2-pokémon-gotta-select-em-all), learn about `ORDER BY`/`LIMIT`/`OFFSET`                                                                                                                                                                                                                               |
| Wednesday morning   | Start [Challenge 3](#challenge-3-social-news-site), set up backend and connection to DB, create schema, handle empty state.                                                                                                                                                                                                             |
| Wednesday afternoon | Continue [Challenge 3](#challenge-3-social-news-site), add ability to create stories, rendering dynamic data in template.                                                                                                                                                                                                               |
| Thursday morning    | Finish [Challenge 3](#challenge-3-social-news-site), ability to upvote/downvote stories, sorting by vote count, visual improvements.                                                                                                                                                                                                    |
| Thursday afternoon  | Take the [Week 8 Mastery Quiz](./quiz.md).                                                                                                                                                                                                                                                                                              |
| Friday              | **If you scored more 9 or more in the Mastery Quiz** - Congratulations 🎉! You've mastered the concepts for this week. You can move on to the Above & beyond challenges.                                                                                                                                                                |
|                     | **If you scored less than 9 in the Mastery Quiz** - Take the time you need to review the concepts you're unsure about (the guidance in the Quiz answers will point you to the materials to review). Once you're comfortable with all the concepts in the quiz, you can move on to the Above & beyond challenges for any remaining time. |

## Learning Objectives

By the end of this week a learner will be able to

- Define what a relational database is
- Write an SQL query to retrieve all data from a table
- Write an SQL query to retrieve specific columns from a table
- Write an SQL query to retrieve a subset of data from a table
- Write an SQL query to that combines multiple conditions with AND or OR
- Write an SQL query that limits the amount of data retrieved from a table
- Write an SQL query to retrieve ordered data from a table
- Differentiate between schema and data changes in SQL queries
- Write an SQL query to create a table
- Write an SQL query to create a new record in a table
- Write an SQL query to update a record in a table
- Write an SQL query to retrieve data from multiple tables at the same time
- Run an SQL query from a backend and return the data

## Previous Sessions

You can find the previous recorded sessions of this week here on Rewatch

- [Cohort 1 Workshops](https://sigmalabs.rewatch.com/collection/787/week-6-backends-ii) (Note: This week has changed a little from when this recording was taken)

## Intro to Relational Databases

We've looked so far at how to keep data in a simple key-value store, which stores information in pairs (a key and a value). Now we'll turn our attention to relational databases, which stores data in **tables**. These tables, as you'd expect, are made up of **columns** and **rows**. Here's a snippet from a hypothetical relational database:

![](https://user-images.githubusercontent.com/636814/93799668-5d7b8b80-fc37-11ea-9994-5f2f3e6e7c89.png)

---

> **❓ Question:** How many tables are shown above? How many rows? How many columns?

---

Our diagram shows us all the data in our database at once. When working with a relational database in reality though, we have to read data in a more targeted way: we write a query specifying what data we want the database to give. Usually we'll want some (or all) of the rows from a single table, but we can also write more powerful queries that fetch data from multiple tables (as we'll see later).

Let's look at some example queries we might use to fetch data from our database. (We'll show the syntax for each query, but don't worry about understand it exactly yet). One of the simplest read queries is to read an entire table as-is. For example, we might want to see all the books in our database:

```sql
SELECT * FROM books;
```

<img src="https://user-images.githubusercontent.com/636814/93798624-e5f92c80-fc35-11ea-9de0-026e8a637e51.png" width="600">

We might want to change the ordering of rows and the number of results we get back. For example, we could query the books alphabetically by title and only take the first 3 results:

```sql
SELECT * FROM books ORDER BY title LIMIT 3;
```

<img src="https://user-images.githubusercontent.com/636814/93798561-cb26b800-fc35-11ea-8dba-24075be34137.png" width="600">

We might also want to use conditions. For example, we could query for all books by J. K. Rowling:

```sql
SELECT * FROM books WHERE author_name = 'J. K. Rowling';
```

<img src="https://user-images.githubusercontent.com/636814/93798553-c82bc780-fc35-11ea-903f-8f8f3195e653.png" width="600">

As mentioned earlier, we can do more powerful things by writing queries that operate over multiple tables. For example, we could show only books published in London. Notice that we can't figure out the right books by only looking at the `books` table, since the data about where publishers are headquartered is in the `publishers` table:

```sql
SELECT books.* FROM books
  JOIN publishers ON publishers.name = books.publisher_name
  WHERE publishers.location = 'London';
```

<img src="https://user-images.githubusercontent.com/636814/93799593-4472da80-fc37-11ea-84fb-e237cf94b600.png" width="600">

<br>
<hr>

### Modifying data

If you have an example queries above, you can see they all start with the `SELECT` keyword. We use the `SELECT` keyword to read data. This is one of the four key "CRUD" operations we need to build full applications:

- **Create** - adding rows to our tables is performed with the `INSERT` keyword
- **Read** - reading rows from our tables is performed with the `SELECT` keyword
- **Update** - changing rows in our tables is performed with the `UPDATE` keyword
- **Delete** - removing rows from our tables is performed with the `DELETE` keyword

Remember that our 4 key HTTP methods also correspond with the CRUD operations. Here's a table summarizing CRUD operations for SQL and HTTP:

| Operation  | SQL    | HTTP (RESTful) |
| ---------- | ------ | -------------- |
| **C**reate | INSERT | POST           |
| **R**ead   | SELECT | GET            |
| **U**pdate | UPDATE | PUT            |
| **D**elete | DELETE | DELETE         |

Having these key conventions makes our jobs as programmers much easier, we can begin to make educated guesses about systems without even having dive into the code. For example, consider the following question:

---

> **❓ Question:** Our browser makes a `PUT` request to `/books/harry-potter`. What do you think this request will probably do? If the endpoint triggers an SQL query, what kind of query will it be (i.e. what will the starting keyword be)? How do you know this?

---

However, as we'll see, there are cases where the two (SQL operations and HTTP verbs) won't match up exactly. This is because with RESTful HTTP design, it's more important that the design of our URLs match the semantics of our operations - because the URLs might be used by 3rd parties. We have more freedom when writing SQL in contrast (which is hidden in a "black box") - sometimes it will be more convenient to use an `UPDATE` rather than a `CREATE` (or vice versa) due to the design of our schema.

<br>

### Schema changes vs. data changes

When we talk about changing our database, there are two different kinds of modification to be aware of. The first is changes to our data: to the **contents of our database**. In other words, adding, removing or changing rows in one or more tables in our DB. Databases make these kind of modifications very easy - many real-world systems will handle millions or billions of writes (data changes) each day. Modern SQL databases can usually handle reads and writes in parallel - data can constantly be read and written without the database becoming unresponsive.

The second kind of modification is changes to the database schema - to the **structure of our database**. This could include adding or removing columns; adding, removing or renaming tables; changing the data type of columns (e.g. turning a numerical column into a string) etc. These changes should be rare, and often require downtime (i.e. the database has to be taken offline while the changes are made). For this reason, we should design our database carefully from day 1 to minimize the changes that we need to make in the future. This is also important because schema changes can cause other problems beyond downtime. For example, if I add a `page_count` column to my `books` table, I'll need to backfill the page counts for all the existing books in my database.

---

> **❓ Question:** For each of these, think about whether a data change or a schema change would likely be required:
>
> - Adding a new employee to a HR system
> - Add the ability to store blood type on a HR system
> - Replace all 10 digit [ISBNs](https://en.wikipedia.org/wiki/International_Standard_Book_Number) on our `books` table with 13 digit ISBNs
> - Remove all UK publishers from our books database

---

<br>
<br>

## Challenge 1: SQLCafé - our first SQLite database

To begin working with SQL in earnest, we need to install an SQL database system. We'll use SQLite for this week. SQLite is a popular light-weight relational database, which stores it's data in a single file. This makes it very easy to work with. It's also famous for being extremely stable and well-tested.

Let's begin by installing SQLite:

```sh
brew install sqlite
```

Before we create our first database, we'll configure SQLite so it displays query results in a more user-friendly way by running:

```sh
(echo ".header ON" && echo ".mode column" && echo ".nullvalue <NULL>") > ~/.sqliterc
```

![](https://user-images.githubusercontent.com/636814/93913447-0344fe00-fcfd-11ea-89ff-c46983970d6e.png)

We're going to create a simple database for an imaginary café. For this challenge we're going to focus on the "C", "U" and "D" in CRUD - that is, the `INSERT`, `UPDATE` and `DELETE` keywords, which are all quite straightforward. SQL gives us a much richer set of options when reading data with `SELECT` which we'll explore properly in the next challenge.

Let's start by creating the database, which we'll store in a file called `cafe.sqlite`

```sh
sqlite3 cafe.sqlite
```

(At any time you can exit the SQLite prompt by typing `.exit` and continue where you left off by rerunning `sqlite3 cafe.sqlite`)

Right now our database doesn't have any tables, which we can confirm by checking that the command `.tables` returns nothing.

```
sqlite> .tables
sqlite>
```

Let's create our first table, which will keep a record of the drinks our cafe serve. For each drink we'll record the name, price (in pennies), the size of the drink (in millilitres) and whether the drink is caffeinated. We'll also give each drink a unique integer ID - you can think of this a bit like the dish numbers you get on some takeaway menus. It's good practice to give each table an ID column.

```sql
CREATE TABLE drinks (
	id INTEGER PRIMARY KEY,
 	name TEXT NOT NULL UNIQUE,
	price INTEGER NOT NULL,
  size_ml INTEGER,
  caffeinated BOOLEAN NOT NULL
);
```

The syntax for `CREATE TABLE` is quite simple. We give the name of the table, then each the name of each column, it's data type and any special constraints. Notice that most of our columns have the `NOT NULL` constraint, meaning a value for that column must be provided. `PRIMARY KEY`s can't be `NULL` either. Only `size_ml` can be `NULL`, we'll discuss why shortly. Notice that we can't have two drinks with exactly the same name (which is probably for the best!).

An important thing to bear in mind is `CREATE TABLE` is _not_ the C in our CRUD operations - we're creating the "warehouse" where we'll store our data, but we're haven't created any data yet.

Let's add a drink to the `drinks` table, using `INSERT` (used to create some new data):

```sql
INSERT INTO drinks (name, price, size_ml, caffeinated)
  VALUES ('Espresso', 200, 60, true);
```

Notice we don't specify the `id` column explicitly. SQLite will autogenerate IDs for us starting from 1. Let's now read back the data in our drinks table. We're not exploring the `SELECT` statement in detail this challenge; so we'll use the simplest `SELECT` command at our disposal: `SELECT * FROM table_name`, which gives us back all the rows and columns for a single table:

```sql
sqlite> SELECT * FROM drinks;
id          name        price       size_ml     caffeinated
----------  ----------  ----------  ----------  -----------
1           Espresso    200         60          1
```

(Note that `true` is transformed to 1 because SQLite actually stores boolean columns as integers. Unsuprisingly, `false` becomes 0).

Now try adding some more caffeinated and non-caffeinated drinks for the cafe!

Every cafe in the UK needs to offer free tap water by law. Let's add tap water to the menu. Tap water doesn't really have a price or a size - it's free, and customers might ask for any amount. We'll add tap water like so:

```sql
INSERT INTO drinks (name, price, caffeinated)
  VALUES ('Tap water', 0, false);
```

Reading the values in the `drinks` table we see:

```sql
sqlite> SELECT * FROM drinks;
id          name        price       size_ml     caffeinated
----------  ----------  ----------  ----------  -----------
1           Espresso    200         60          1
...
5           Tap water   0           <NULL>      0
```

It's true to say that tap water costs 0 pennies, but it's misleading to say a serving of tap water is 0 ml. Instead we use the special value `NULL`. `NULL`s can indicate that data is missing, unknown or that using a non-empty value doesn't make sense. We should generally use `NULL` values very sparingly.

Let's update some data now. A single espresso is actually 30ml, so we'll correct our mistake. We'll also drop the price to £1.50. The most common `UPDATE` statement has the form:

```sql
UPDATE table_name
SET column_1 = new_value_1,
  column_2 = new_value_2
WHERE
  id = target_row_id;
```

(We'll explore the full possibilities of the `WHERE` clause in the next challenge).

Try correcting the mistake, and expand below to see the answer.

<details>
  <summary>Expand for the answer</summary>

```sql
UPDATE drinks
SET price = 150, size_ml = 30
WHERE id = 1;
```

</details>

We could also have `UPDATE`d the mistake using the drink's name, i.e. `WHERE name = 'Espresso'`.

Lastly, let's learn to `DELETE` rows. The syntax is similar to (but simpler than) `UPDATE`:

```sql
DELETE FROM table_name
  WHERE id = target_row_id;
```

Try deleting `Espresso`, and readding it with the name `'Single espresso'`. Expand the answer below if you get stuck.

Finally, create a new `cakes` table. Include any columns you think are relevant. Add, update and delete some cakes. Congratulations, you've mastered the basics of ¾ of SQL's CRUD operations 🍰!

<details>
  <summary>Expand for the answer</summary>

```sql
DELETE FROM drinks
WHERE id = 1;
```

</details>

<br>
<hr>
<br>

## Challenge 2: Pokémon, gotta `SELECT` 'em all!

![](https://user-images.githubusercontent.com/636814/93920350-faf1c080-fd06-11ea-9140-879c2ad038e2.png)

This challenge we'll get to grips with tools SQL offers for reading (querying) data. We'll use a premade database listing some basic information about Pokémon. Navigate to the `week8/pokemon` directory and run `sqlite3 pokemon.sqlite`.

Check everything's worked OK by running `.tables`. You should see:

```
sqlite> .tables
descriptions  pokemon       types
sqlite>
```

You can think of a table in SQL as similar to a class in OOP, and each row in that table as a specific instance of that class. This means that the columns would then represent the properties that instances of that class have. We can look at all the columns and rows of a table using the syntax we've seen already: `SELECT * FROM table_name;`. Let's look at our `pokemon` table:

```sql
SELECT * FROM pokemon;
```

```
id          name        height      weight
----------  ----------  ----------  ----------
1           Bulbasaur   70          6900
2           Ivysaur     100         13000
3           Venusaur    200         100000
4           Charmander  60          8500
5           Charmeleon  110         19000
6           Charizard   170         90500
...
648         Meloetta    60          6500
649         Genesect    150         82500
```

(As you might have already noticed, we need to end our SQL statements with `;` for the SQLite prompt to run them).

Instead of `*`, we can provide a list of columns. The result of this query will be a set of rows and columns, effectively a copy of the table, but only with the columns that we requested.

```sql
SELECT name, height FROM pokemon;
```

```
name        height
----------  ----------
Bulbasaur   70
Ivysaur     100
Venusaur    200
Charmander  60
Charmeleon  110
Charizard   170
Meloetta    60
Genesect    150
```

Use `SELECT *` to inspect the `types` and `descriptions` tables.

Our data seems to already be nicely sorted, most data in real databases are added in no particular order. As a result, it can be difficult to read through and understand the results of a query as the size of a table increases to thousands or even millions rows.

To help with this, SQL provides a way to sort your results by a given column in ascending or descending order using the `ORDER BY` clause:

```sql
SELECT column, another_column, …
  FROM table_name
  ORDER BY column ASC/DESC;
```

---

> **💡 Exercise:** Try sorting by `height`. Who is the shortest Pokémon? Who is the tallest?

---

Another clause which is commonly used with the ORDER BY clause is the LIMIT clause which will reduce the number of rows to return:

```sql
SELECT column, another_column, …
  FROM table_name
  ORDER BY column ASC/DESC
  LIMIT num_limit;
```

---

> **💡 Exercise:** The "original" Pokémon are those with numbers (`id`s) 1-151. Write a query to show only the original 151 Pokémon.

---

We can also add an optional `OFFSET` with `LIMIT` will specify where to begin counting the number of rows from. This can be useful if we're paginated results - if we were to built an interface which showed `Pokémon` with 10 per page, and we were on page 4, we'd write (`LIMIT 10 OFFSET 30`).

```sql
SELECT column, another_column, …
  FROM table_name
  ORDER BY column ASC/DESC
  LIMIT num_limit
  OFFSET starting_row;
```

---

> **💡 Exercise:** The "Johto" Pokémon are those with numbers (`id`s) 152-251. Write a query to show only the 100 Johto Pokémon, using `LIMIT` and `OFFSET`.

---

`LIMIT` is useful when we want to restrict the rows returned by quantity, but very often we want to restrict the rows that are returned based on a condition. In this case, we need to use a `WHERE` clause in the query (which we saw briefly in the previous challenge). The clause is applied to each row of data by checking specific column values to determine whether it should be included in the results or not:

```sql
SELECT column, another_column, …
  FROM table_name
  WHERE condition
    AND/OR another_condition
    AND/OR …;
  ORDER BY column ASC/DESC
  LIMIT num_limit
  OFFSET starting_row;
```

More complex clauses can be constructed by joining numerous AND or OR logical keywords (ie. `height >= 100 AND weight <= 10000`). Let's start by looking at our numerical columns: `height` and `weight`. Some useful operations for filtering based on the values in numerical columns are shown below:

| Operator              | Condition                                            |
| --------------------- | ---------------------------------------------------- |
| `=, !=, < <=, >, >=`  | Standard comparison operators                        |
| `BETWEEN … AND …`     | Number is within range of two values (inclusive)     |
| `NOT BETWEEN … AND …` | Number is not within range of two values (inclusive) |
| `IN (…)`              | Number exists in a list                              |
| `NOT IN (…)`          | Number does not exist in a list                      |

---

> **💡 Exercise:** (`height` is specified in centimetres and `weight` in grams). Find Pokémon who are taller than a metre (100cm) but lighter than 10kg (10000g) - hint: there should be 6. Find Pokémon who are exactly one or two metres tall. Find Pokémon who weigh between 10 and 500 grams.

---

When writing `WHERE` clauses with columns containing text data, such as `name`, SQL supports a number of useful operators to do things like case-insensitive string comparison and wildcard pattern matching. We show a few common text operators below:

| Operator     | Condition                                                                                             |
| ------------ | ----------------------------------------------------------------------------------------------------- |
| `=`          | Case sensitive exact string comparison (notice the single equals)                                     |
| `!= or <>`   | Case sensitive exact string inequality comparison                                                     |
| `LIKE`       | Case insensitive exact string comparison                                                              |
| `NOT LIKE`   | Case insensitive exact string inequality comparison                                                   |
| `%`          | Used anywhere in a string to match a sequence of zero or more characters (only with LIKE or NOT LIKE) |
| `_`          | Used anywhere in a string to match a single character (only with LIKE or NOT LIKE)                    |
| `IN (…)`     | String exists in a list                                                                               |
| `NOT IN (…)` | String does not exist in a list                                                                       |

---

> **💡 Exercise:** Return the `height`s of the Pokémon named `'Machop'`, `'Machoke'` and `'Machamp`. Find all Pokémon whose name begins with "Cha". Find all Pokémon whose name ends with "saur".

---

### `JOIN`s and one-to-one relationships

In all of the examples given so far, we've been operating on a single table at a time. However, often we want to write queries that read from more than one table at once. For this we need to leverage SQL's powerful `JOIN` clause.

First, let's look at a table (other than `pokemon`) where we might want to use a `JOIN` operation: the `descriptions` table:

```sql
SELECT * FROM descriptions LIMIT 10;
```

```
pokemon_id  description
----------  -----------------------------------------------------------------------------------------
1           For some time after its birth, it grows by gaining nourishment from the seed on its back.
2           When the bud on its back starts swelling, a sweet aroma wafts to indicate the flower’s co
3           After a rainy day, the flower on its back smells stronger. The scent attracts other Pokém
4           The fire on the tip of its tail is a measure of its life. If healthy, its tail burns inte
5           In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars
6           It is said that Charizard’s fire burns hotter if it has experienced harsh battles.
7           It shelters itself in its shell then strikes back with spouts of water at every opportuni
8           It is said to live 10,000 years. Its furry tail is popular as a symbol of longevity.
9           The jets of water it spouts from the rocket cannons on its shell can punch through thick
10          It releases a stench from its red antenna to repel enemies. It grows by molting repeatedl
```

(Note that the SQL repl automatically truncates the descriptions for easier display).

We can see the table provides a description for each Pokémon. The Pokémon being described is identified by its unique ID. Note that every Pokémon has exactly one description. In database design we call this a one-to-one relationship. A good analogy in the real-world would be the relationship between a person and a passport:

<img src="https://storage.googleapis.com/ltkcms.appspot.com/fs/yd/images/cover/one-to-one-relationship.base.webp?v=1595974816" width="500">

Just like in this example, it's usually the case that 0 or 1 are both allowable states: a person can have no passport, or 1 passport, but not 2 passports. Similarly, a Pokémon should have 1 description (or no description) but not multiple descriptions.

---

> **❓ Question:** What reasons could there be for putting descriptions in their own table, rather than having them as a column on the `pokemon` table? Write down some reasons, then read the discussion below.

---

There are a few reasons we might put descriptions in their own table. First, in the same way we want to decompose large programs into smaller functions, we also want to break down our database schema into small parts. There's potentially a lot of information about Pokémon we'd like to capture over time (description, abilities, moves, evolutions...) and if we cram everything into a single table, things will become inefficient, slow and confusing.

Secondly, we can more easily avoid cluttering our table with `NULL`s. If a Pokémon doesn't have a description, it just has no corresponding row in the `descriptions` table.

Thirdly, it's easier to extend our data schema when we split out tables. For example, imagine if we wanted to allow descriptions in other languages. With a separate descriptions table, we could easily add an `language` column:

```
pokemon_id  language  description
----------  -----------------------------------------------------------------------------------------
1           en        For some time after its birth, it grows by gaining nourishment from the seed on its back.
1           fr        Pendant un certain temps après la naissance, il grandit en se nourrissant de la graine sur son dos.
2           en        When the bud on its back starts swelling, a sweet aroma wafts to indicate the flower’s co
2           fr        Lorsque le bourgeon sur son dos commence à gonfler, un doux arôme se répand pour indiquer la flo
```

It would be difficult to adapt to this feature if `description` were simply a column on the `pokemon` table.

The syntax to combine (`JOIN`) two tables is:

```sql
JOIN other_table ON other_table.column_name_a = table_name.column_name_b
```

The `JOIN` clause comes after the `FROM` clause:

```sql
SELECT column, another_column, …
  FROM table_name
  JOIN other_table ON other_table.column_name_a = table_name.column_name_b
  WHERE condition
    AND/OR another_condition
    AND/OR …;
  ORDER BY column ASC/DESC
  LIMIT num_limit
  OFFSET starting_row;
```

For example, if we wanted to display the names and descriptions of all Pokémon, we would write:

```sql
SELECT name, description FROM pokemon JOIN descriptions ON descriptions.pokemon_id = pokemon.id;
```

```
name        description
----------  -----------------------------------------------------------------------------------------
Bulbasaur   For some time after its birth, it grows by gaining nourishment from the seed on its back.
Ivysaur     When the bud on its back starts swelling, a sweet aroma wafts to indicate the flower’s co
Venusaur    After a rainy day, the flower on its back smells stronger. The scent attracts other Pokém
Charmander  The fire on the tip of its tail is a measure of its life. If healthy, its tail burns inte
Charmeleon  In the rocky mountains where Charmeleon live, their fiery tails shine at night like stars
```

We can of course combine `JOIN`s with all the tools we've encountered so far:

---

> **💡 Exercise:** Return the names and descriptions of all Pokémon whose descriptions include the word "asleep". Who is the heaviest Pokémon whose description _does not_ contain the "asleep" (hint: it's not Groudon).

---

### One-to-many relationships

There are different kinds of real-world relationships that we might want to model when building databases. A very useful kind is "one-to-many relationships". This time think about people and smartphones. A person might have zero, one or multiple smartphones (for example a personal and work phone). However, a phone is not (or almost never) shared between multiple people.

Pokémon have different types: Pikachu is an Electric type, while Charmander is Fire type. But in the same way that some people have more than one phone, some Pokémon have more than one type. For example Bulbasaur is a Grass/Poison type. We can see this information is all captured in the `types` table (the IDs for Bulbasaur, Charmander and Pikachu are 1, 4 and 25):

```
SELECT * FROM types WHERE pokemon_id IN (1, 4, 25);
```

```
pokemon_id  type        slot
----------  ----------  ----------
1           Grass       1
1           Poison      2
4           Fire        1
25          Electric    1
```

(Note: a type can be primary or secondary as indicated by the `slot` attribute)

Let's `JOIN` the `types` table onto our `pokemon` table, and `SELECT` the columns `name`, `type`, `slot` and `weight`:

```sql
SELECT name, type, slot, weight FROM pokemon JOIN types ON types.pokemon_id = pokemon.id WHERE pokemon_id IN (1, 4, 25);
```

```
name        type        slot        weight
----------  ----------  ----------  ----------
Bulbasaur   Grass       1           6900
Bulbasaur   Poison      2           6900
Charmander  Fire        1           8500
Pikachu     Electric    1           6000
```

As expected, we see two rows for Bulbasaur: one for it's primary and secondary type. If we'd like we can show only primary types using our `WHERE` clause:

```sql
SELECT name, type, slot, weight FROM pokemon JOIN types ON types.pokemon_id = pokemon.id WHERE pokemon_id IN (1, 4, 25) AND slot = 1;
```

```
name        type        slot        weight
----------  ----------  ----------  ----------
Bulbasaur   Grass       1           6900
Charmander  Fire        1           8500
Pikachu     Electric    1           6000
```

---

> **💡 Exercise:** List all the Fire type Pokémon (primary or secondary type). List all Pokémon whose primary type is Grass. Which is the heaviest Ghost type Pokémon? What's the primary type of the heaviest Pokémon? Find all Pokémon whose secondary type is Fighting and whose description contains the word "punch".

---

### Recap

We've now learnt the key elements which make up a `SELECT` statement. There are a few more advanced clauses, which we'll encounter next week, but for now we have the following structure:

```sql
SELECT column, another_column, …
  FROM table_name
  JOIN other_table ON other_table.column_name_a = table_name.column_name_b
  WHERE condition
    AND/OR another_condition
    AND/OR …;
  ORDER BY column ASC/DESC
  LIMIT num_limit
  OFFSET starting_row;
```

Remember that the ordering of our clauses. We can put `LIMIT` after `OFFSET` for example.

---

> **💡 Exercise:** Create a pneumonic to remember the order of the clauses we've learnt so far: `SELECT`, `FROM`, `JOIN`, `ON` , `WHERE`, `ORDER BY`, `LIMIT`, `OFFSET` - S. F. J. On. W. Or. L. Of.
>
> I went with: "Succulent Fresh Jam On Wholegrain Organic Loaf". But try inventing your own: the process of creating something personal will help you better retain it.

---

## Challenge 3: Social news site

Now we have a grounding in the basics of SQL, we'll finish the week by building a simple social news site, similar to sites like Reddit or HackerNews. The site will enable users to post stories, to delete them, and upvote the ones they like. Here's a preview of what we'll be building:

![](https://user-images.githubusercontent.com/636814/98655103-64717100-233f-11eb-8197-a9d2c31c0663.png)

### Designing the schema

We discussed earlier the difference between our schema and our data. The first step in creating our database-backed app is to decide on our schema. What tables and columns do we need? Discuss your ideas in pairs, then scroll down to see some suggestions.

<br><br><br><br><br><br><br><br>
...
<br><br><br><br><br><br><br><br>

A good starting point when tackling this question is to look at the pieces of our proposed UI. Each individual element which represents data (rather than, say, an action - e.g. a button) will likely need to be its own column. Grouping these pieces of data logically will give us our tables:

![](https://user-images.githubusercontent.com/636814/98656814-650b0700-2341-11eb-879e-f4aac9918c3a.png)

At a minimum, we'll want columns for `title`, `url` and `score`. These all correspond to the same "thing": a story on our site. `stories` is probably a good name for our table.

There are also a few additional columns that we should add to almost any table we create. The first is an ID column. This ensures that even if we have two stories with the same title, URL and score, that we can uniquely identify them.

Secondly, it's very useful to keep track of when records in a table are created or updated. We can draw inspiration from our operating system's file system, which also does this:

<img src="https://user-images.githubusercontent.com/636814/98657400-2033a000-2342-11eb-8c77-01ef86c0fcaf.png" width="400">

We'll add a `created_at` and `updated_at` column to almost every table we create. When we `INSERT` a row, we'll set both columns to the current time. When we `UPDATE` a row, we'll set `updated_at` to the current timestamp.

### Data types, creating the schema and seeding the database

As we already know, relational database use different _data types_ to represent data. For example "first name" would be stored in a `TEXT` column whereas "number of children" would be stored in an `INTEGER` column.

Here are some useful types in SQLite, these are all you'll need to cover most use cases:

- `INTEGER` - A whole number
- `TEXT` - Textual data
- `BOOLEAN` - True/false values
- `DATE` - A calendar day
- `DATETIME` - A calendar day + time (hours, minutes, seconds)
- `FLOAT` - A number with a decimal place (not guaranteed to be precise when doing arithmetic)

(You can find a longer list of types & an explanation of SQLite's type system on the [SQLite docs](https://www.sqlite.org/datatype3.html))

Now we're ready to actually create our database & schema!

Open up `socialnews/schema.js`. The script will destroy our database if it exists, and recreate it based on the schema that we specify. Be careful running this script later on, as it will drop any data in our database. We create our stories table with the line:

```js
await db.query(
  `CREATE TABLE stories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
  )` // add more columns
)
```

Let's break down the line above into it's component parts

| CREATE TABLE                                                                                                            | stories                               | (   |                                     id                                      |                                                        INTEGER                                                         |                                                       PRIMARY KEY                                                        |                                                                                   AUTOINCREMENT                                                                                    | )   |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | --- | :-------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | --- |
| The SQL statement to [create a new table](https://www.tutorialspoint.com/mysql/mysql-create-tables.htm) in our database | The name of the table in our database |     | This field states the name of the column that will be added with each story | This field states the [data type](https://www.tutorialspoint.com/mysql/mysql-data-types.htm) that the column will have | This field states whether the column will be used as the [Primary Key](https://www.mysqltutorial.org/mysql-primary-key/) | This field tells the table to increase the field by one for every new entry in the table i.e. to [automatically increment](https://www.w3schools.com/sql/sql_autoincrement.asp) it |     |

Right now we're creating a `stories` table with only an `id` column, not very useful! Add the necessary columns, using the syntax:

`column_name TYPE [NOT NULL] [DEFAULT x]`

For example `number_of_feet INTEGER NOT NULL DEFAULT 2`. Have a go on your own, then check your work by expanding the answer below.

<details>
  <summary>Expand for the answer</summary>

```sql
CREATE TABLE stories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL,
  score INTEGER NOT NULL DEFAULT 0
)
```

</details>

Once you have your `schema.js` filled in, go ahead and run it. Since we'll be modifying our filesystem, don't forget the `--allow-write` permission:

```
deno run --allow-read --allow-write schema.js
```

Before we start building our application, it will be useful to populate our table with some example data; this is often called **seed data**. Seed data is also commonly used when building automated tests.

Take a look inside `/socialnews/seed.sql`, which is comprised of `INSERT` statements to add the example stories visible in the screenshot above:

```sql
INSERT INTO stories(title, url, created_at, updated_at) VALUES ('Voters Overwhelmingly Back Community Broadband in Chicago and Denver', 'https://www.vice.com/en/article/xgzxvz/voters-overwhelmingly-back-community-broadband-in-chicago-and-denver', datetime('now'), datetime('now'));
INSERT INTO stories(title, url, created_at, updated_at) VALUES ('eBird: A crowdsourced bird sighting database', 'https://ebird.org/home', datetime('now'), datetime('now'));
INSERT INTO stories(title, url, created_at, updated_at) VALUES ('Karen Gillan teams up with Lena Headey, Michelle Yeoh, Angela Bassett and Carla Gugino in assassin thriller Gunpowder Milkshake', 'https://www.empireonline.com/movies/news/gunpowder-milk-shake-lena-headey-karen-gillan-exclusive/', datetime('now'), datetime('now'));
INSERT INTO stories(title, url, created_at, updated_at) VALUES ('Pfizers coronavirus vaccine is more than 90 percent effective in first analysis, company reports', 'https://www.cnbc.com/2020/11/09/covid-vaccine-pfizer-drug-is-more-than-90percent-effective-in-preventing-infection.html', datetime('now'), datetime('now'));
```

Notice that we set the `created_at` and `updated_at` columns to the current time using `datetime('now')`. We could run each line manually in our `sqlite3` REPL, but we can also execute all the statements in the file by running:

```sql
sqlite3 stories.db < seed.sql
```

### Social News React App

In `/socialnews/app` you will find a simple React App that will fetch your stories from the server you are building.

To get started, make sure you run `yarn install` following by `yarn start`.

### Loading Stories Dynamically

Now we have a populated database, we want to return our data as JSON from our API endpoint. Take a look at the starter code in `socialnews/server.js`:

```js
app.get('/stories', async (server) => {
  // const stories = [...db.query('<FILL ME IN>').asObjects()]
  await server.json(stories)
})
```

When this is working, your React app should be loading in stories successfully.

### Adding an Empty State

One small but crucial step we've skipped is adding an **empty state**. Currently if there are 0 rows in our `stories` table, users will just see a confusing blank page. Add in an empty state like the screenshot below:

<img src="https://user-images.githubusercontent.com/636814/98842458-ec43a200-2449-11eb-96a1-fee6baee7996.png" width=500>

> **💡 Key Idea:** When designing applications it's good practice to deliberately to think about unusual scenarios or **edge cases**, such as when our tables are empty. Likewise, we should always test edge cases when employing automated tests

### Upvotes and Downvotes

Right now we have a list of stories, but to flesh out our social news site, users should be able to vote stories up or down. In order to cast a vote, we'll need to create an endpoint (URL) to handle upvoting/downvoting. What URL do you think would be appropriate? What HTTP verb (from the table below) should we use? Why? Think about your answer, then scroll down.

| Operation  | HTTP (RESTful) |
| ---------- | -------------- |
| **C**reate | POST           |
| **R**ead   | GET            |
| **U**pdate | PUT            |
| **D**elete | DELETE         |

<br><br><br><br><br><br><br><br>
...
<br><br><br><br><br><br><br><br>

It's tempting to think we're doing an update operation - modifying the `score` of a story - and so should make a `PUT` operation to `/stories/:id`. However, if we vote for Joe Biden in the presidential election, we're not really "modifying" Mr. Biden! Rather we're adding (creating) a vote to collection of ballots. Therefore, a better design is to make a `POST` request to `/stories/:id/votes`.

However, we'll still make the necessary changes to our DB using an `UPDATE` statement. This is actually a [**code smell**](https://en.wikipedia.org/wiki/Code_smell): a clue that this may not be the optimal design. In fact, that's the case, something we'll discuss and fix next week. For now, fill out the handler below:

```js
.post('/stories/:id/votes', async (server) => {
  const { id } = server.params
  const { direction } = await server.body

  if(direction === 'down') {
    // lower score for story by 1 point
  } else {
    // raise score for story by 1 point
  }
})
```

Have a go to scroll down to see the solution, and why you may have just introduced a serious security vulnerability into your app :danger:!

<br><br><br><br><br><br><br><br>
...
<br><br><br><br><br><br><br><br>

And naive solution to fill out our handler would be:

```js
.post('/stories/:id/votes', async (server) => {
  const { id } = server.params
  const { direction } = await server.body

  if(direction === 'down') {
    db.query(`UPDATE stories SET score = score - 1 WHERE id = ${ id }`)
  } else {
    db.query(`UPDATE stories SET score = score + 1 WHERE id = ${ id }`)
  }
})
```

However, we've just committed the cardinal sin of working with SQL: never interpolate directly into an SQL query. To understand why, watch the video below on SQL injection:

<img src="https://img.youtube.com/vi/-jHxXRJ073k/0.jpg" height="200">

- [:link: - Preventing SQL Injections](https://www.youtube.com/watch?v=-jHxXRJ073k) (5 min watch)

In this case the safe way to write our queries is to use the placeholder syntax provided by the `sqlite` package:

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

### Enabling Voting Buttons

We've almost finished with the initial version of our social news site 🎉. We'll lastly enable our voting buttons and add the ability for users to submit new stories.

We want our voting buttons to send a POST request to `/stories/:id/votes` which should include the direction of the vote. You'll need to update both your server and the React app to get this working.

### Story Submission

Now complete the challenge by adding the ability for users to submit stories.

On the server side, you'll need two a new handler to accept the form input. The handler should issue an `INSERT` statement. Be careful to avoid SQL injection by using the placeholder syntax!

On the React side, you'll want to add an two input boxes that allow the user to input

1. A title for the story
2. A url for the story

When the user hits submit it should send a `POST` request to your server with the required fields.

### Above & Beyond

In software development, we often talk about the Pareto Principle or 80-20 principle. Applied to software development, this captures the notion that 20% of development time is spent building 80% of the app - whereas 80% of dev time is spent on the final 20% (the polish).

We've built a minimal working version of our app relatively quickly but could spend many more hours refining it.

Below are some suggestions of how we can improve our app, but feel free to tackle your own ideas too:

#### Easier

1. Sort stories by score, so the highest scoring stories appear at the top. (Hint: you'll need an `ORDER BY` clause).
2. Currently, a story's score can become negative. Add logic to ensure a story's score can't fall below 0.
3. Right now, for a story with a score = 1 we display "1 points". Add proper pluralization, so we show "1 point" instead, and "x points" in all other cases.
4. Improve the design of the site using CSS :art:.
5. Add validations to story submission (if not already added).

#### Harder

1. Right now, we'll display an unlimited number of stories - which doesn't scale very well :see_no_evil:. Add pagination to our application.
2. Add CSS styling so that stories with a score of 0 are faded out (i.e. `opacity: 0.5`).
3. Improve the sorting algorithm so that the recency of a post is taking into account. For example, you could divide a stories score by its age in days for ordering purposes - so a story that is 3 days old with a raw score of 15 will have an effective score of 5 for ordering purposes.
4. When a user submits a story, they have got to enter a title themselves. However, if a user leaves the field empty it would be good if we could automatically generate a title by retrieving the `<title>` of the website they are submitting.
   - To achieve this you'll need to parse the HTML of the website being added on your backend to avoid a CORS error
5. In addition to the title, websites also include lots of other metadata about the page. You can use this to populate more information about the link that's been submitted.
   - You'll want to read about ["Open Graph" metadata](https://ogp.me/) to learn which metadata is available.
   - You should start with `og:image` to get an image for a page, store the URL of is in your database and then return it to your frontend
