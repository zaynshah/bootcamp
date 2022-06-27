# Week 9 - Mastery quiz

<hr>

1. I'm creating a database system to track employees. Alongisde an `employees` table, I have an `identity_documents` table (which keeps details about my employees' passports, drivers licenses etc.). What would the likely arity of the relationship between `employees` and `identity_documents` be: one-to-one, one-to-many or many-to-many?

<hr>

2. I've added `comments` to my social news site. What would the likely arity of the relationship between `stories` and `comments` be: one-to-one, one-to-many or many-to-many? What would the likely arity of the relationship between `users` and `comments` be?

<hr>

3. Having added `comments` to my social news site, I want to display the comment count next to each story. However, I've decided that for the purposes of counting comments, I'll ignore comments from brand new users (who've signed up to my site in the last 24 hours). Stories without any valid comments should display a comment count of 0. Fill in the missing parts of the query:

```sql
SELECT stories.*, COUNT(comments.id) AS comment_count
  FROM stories
  <XXXXX> JOIN comments ON stories.id = comments.story_id
  INNER JOIN <YYYYY> ON comments.user_id = users.id AND users.created_at < date('now', '-1 day')
  GROUP BY <ZZZZZ>;
```

<hr>

4. I'm creating a Twitter clone. What would the likely arity of the relationships between `tweets` and `hashtags` be: one-to-one, one-to-many or many-to-many?

<hr>

5. I create a new page on my social news site to show how many stories each user has submitted. The code below renders the right result, but isn't optimal. What's the problem with the code? How would you refactor it?:

```js
const users = [...db.query('SELECT * FROM users;').asObjects()]
for (const user in users) {
  const [[storyCount]] = [
    ...db.query('SELECT COUNT(*) FROM stories WHERE stories.user_id = ?;', [
      user.id
    ])
  ]
  user.storyCount = storyCount
}

await server.json({ users })
```

<hr>

6. Next, I want to show a list of users, ordered by how recently they submitted a story. Replace `<XXXX>` with the correct aggregate function call:

```sql
SELECT users.*, <XXXX> AS most_recent_story_date
  FROM users
  LEFT OUTER JOIN stories ON users.id = stories.user_id
  GROUP BY users.id;
```

<hr>

7. I have a hash function which will turn a variable input into a 5-digit number. For example, `letmein` might become `62014`. Do you think this hash function is likely to be appropriate to use in a password system? Why or why not?

<hr>

8. What are some reasons that we shouldn't store passwords in plaintext?

<hr>

9. I'm working on a website which uses a cryptographically secure hash function (SHA-256, an alternative - but valid - choice to bcrypt). I know that the password `letmein` hashes to:

```
1c8bfe8f801d79745c4631d09fff36c82aa37fc4cce4fc946683d7b336b63032
```

I notice that Mary's password hashes to a very similar value:

```
1c8bfe8f801d79745c4631d09fff36c82aa37fc4cce4fc946683d7b336b63099
```

What can I conclude about Mary's password?

<hr>

10. What's the problem with the code below? How would you fix it?

```js
import { v4 } from 'https://deno.land/std/uuid/mod.ts'

await db.query(
  "INSERT INTO sessions (uuid, user_id, created_at) VALUES (?, ?, datetime('now'))",
  [v4.generate(), user.id]
)
server.setCookie({
  name: 'sessionId',
  value: v4.generate()
})
```
