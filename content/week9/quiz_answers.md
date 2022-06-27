# Week 9 - Mastery quiz (answers)

====

<hr>

Question 1.

**Answer & explanation**: The likely arity would be _one-to-many_. An employee could probably have more that one identity document on file (e.g. a passport and driver's licence). However, a single piece of ID can't really be shared by multiple people.

**If you got this wrong**: Review the week's (and Week 6's) material on relationship types, or consult the articles below:

- [:link: - learnhowtoprogram - Database Schema and Relationship Types](https://www.learnhowtoprogram.com/ruby-and-rails/ruby-database-basics/database-schema-and-relationship-types)
- [:link: - Identifying Database Table Relationships](https://condor.depaul.edu/gandrus/240IT/accesspages/relationships.htm)

<hr>

Question 2.

**Answer & explanation**: The likely arities would be _one-to-many_ for both `stories` → `comments` and `users` → `comments`. A story can have multiple comments, and a user can leave multiple comments. However a single comment will (likely) be written by a single user, in relation to a particular story.

**If you got this wrong**: Review the week's (and Week 6's) material on relationship types, or consult the articles below:

- [:link: - learnhowtoprogram - Database Schema and Relationship Types](https://www.learnhowtoprogram.com/ruby-and-rails/ruby-database-basics/database-schema-and-relationship-types)
- [:link: - Identifying Database Table Relationships](https://condor.depaul.edu/gandrus/240IT/accesspages/relationships.htm)

<hr>

Question 3.

**Answer & explanation**: We need to do a `LEFT OUTER JOIN`, otherwise we'll exclude stories without matching comments (rather than showing their comment count as 0, as desired). We need to `JOIN` our `users` table in order to check when the users signed up. Finally, we want to calculate the comment count _per-story_ so we should `GROUP BY stories.id`:

```sql
SELECT stories.*, COUNT(comments.id) AS comment_count
  FROM stories
  LEFT OUTER JOIN comments ON stories.id = comments.story_id
  INNER JOIN users ON comments.user_id = users.id AND users.created_at < date('now', '-1 day')
  GROUP BY stories.id;
```

**If you got this wrong**: Review the week's material on aggregate functions, or the articles below on `GROUP BY` and `JOIN` in SQLite:

- [:link: - SQLite Left Join - SQLite Tutorial](https://www.sqlitetutorial.net/sqlite-left-join/)
- [:link: - SQLite Group By - SQLite Tutorial](https://www.sqlitetutorial.net/sqlite-group-by/)

<hr>

Question 4.

**Answer & explanation**: The likely arity would be _many-to-many_. A tweet can have many hashtags attached to it, and a hashtag will correspond to many (sometimes million of) tweets.

**If you got this wrong**: Review the week's (and Week 6's) material on relationship types, or consult the articles below:

- [:link: - learnhowtoprogram - Database Schema and Relationship Types](https://www.learnhowtoprogram.com/ruby-and-rails/ruby-database-basics/database-schema-and-relationship-types)
- [:link: - Identifying Database Table Relationships](https://condor.depaul.edu/gandrus/240IT/accesspages/relationships.htm)

<hr>

Question 5.

**Answer & explanation**: This is a classic example of an N+1 query problem, I'm performing a `SELECT` query for each user in my database. To avoid this, I should instead us a `JOIN` and `GROUP BY`.

```js
// Backticks are just used for multiline strings, for nicer formatting of our long query
const users = [
  ...db
    .query(
      `
  SELECT users.*, COUNT(stories.id) AS story_count
  LEFT OUTER JOIN stories ON users.id = stories.user_id
  GROUP BY users.id;
`
    )
    .asObjects()
]

await server.render('users.html', { users })
```

**If you got this wrong**: Review the week's materials on the N+1 query problem, or review the article below:

- [:link: - What is the “N+1 selects problem” (StackOverflow)](https://stackoverflow.com/questions/97197/what-is-the-n1-selects-problem-in-orm-object-relational-mapping)
- [:link: - SQLite Left Join - SQLite Tutorial](https://www.sqlitetutorial.net/sqlite-left-join/)
- [:link: - SQLite Group By - SQLite Tutorial](https://www.sqlitetutorial.net/sqlite-group-by/)

<hr>

Question 6.

**Answer & explanation**: In this case we would use `MAX(stories.created_at)` to get the largest (e.g. latest) `created_at` timestamp for one of the user's stories.

**If you got this wrong**: Review SQLite's docs on built-in aggregate functions:

- [:link: - SQLite Built-in Aggregate Functions](https://www.sqlite.org/lang_aggfunc.html)

<hr>

Question 7.

**Answer & explanation**: This hash function wouldn't be appropriate to use in a password system, because the output space is too small: the function can only produce 10,000 possible values. In other words, if we have more than 10,000 users, we can guarantee that two users would be able to log in to each others accounts using their own (different) passwords! Similarly, to "crack" a users account, I'd on average only need to make 10,000 attempts before finding a random value which would hash to the correct value.

More formally, we have a high likelihood of _collisions_ in our hash function. In comparison, for secure hash functions (SHA-256, bcrypt) collisions have never been observed.

**If you got this wrong**: Review the week's materials on hash functions, and the articles below:

- [:link: - Hash collision (Wikipedia)](https://en.wikipedia.org/wiki/Hash_collision)
- [:link: - Hash Collisions Explained](https://freemanlaw.com/hash-collisions-explained/)
- [:link: - Collision attack (Wikipedia)](https://en.wikipedia.org/wiki/Collision_attack)

<hr>

Question 8.

**Answer**: Among other reasons, because:

- Users may reuse passwords across sites, so a leak of our users table would compromise their accounts elsewhere
- Users may include sensitive, personal or embarassing information in passwords
- It makes it much easier for usable passwords to be leaked within my organization

(Give yourself a point if you answered with any of these reasons).

**If you got this wrong**: Review the week's materials on password encryption, and the articles below:

- [:link: - How not to store passwords as a developer?](https://medium.com/@secureica/how-not-to-store-password-developer-perspective-3d6f5799f3f8)
- [:link: - How to Protect Your Passwords: The Dangers of Plain Text Storage](https://medium.com/practicum-by-yandex/how-to-protect-your-passwords-the-dangers-of-plain-text-storage-b8d63f40c211)

<hr>

Question 9.

**Answer & explanation**: All we can conclude about Mary's password is that it is not `letmein`. Crucially, the fact that her password hashes to a value similar to the hash for `letmein` _does not_ imply that her password is in any way similar to `letmein`. Remember a hash should leak no information about the input which produced it.

**If you got this wrong**: Review the week's materials on hash functions, and the articles below:

- [:link: - What are cryptographic hash functions?](https://www.synopsys.com/blogs/software-security/cryptographic-hash-functions/)
- [:link: - Cryptographic hash function (Wikipedia)](https://en.wikipedia.org/wiki/Cryptographic_hash_function)

<hr>

Question 10.

**Answer & explanation**: We call `v4.generate()` twice, which means we'll be generating two different UUIDs! Therefore our cookie and DB row won't have a corresponding value, and won't be able to matched together. We simply generate the value once, and reference it both our `INSERT` statement and `setCookie` call:

```js
import { v4 } from 'https://deno.land/std/uuid/mod.ts'

const uuid = v4.generate()

await db.query(
  "INSERT INTO sessions (uuid, user_id, created_at) VALUES (?, ?, datetime('now'))",
  [uuid, user.id]
)
server.setCookie({
  name: 'sessionId',
  value: uuid
})
```
