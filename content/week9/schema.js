import { DB } from 'https://deno.land/x/sqlite/mod.ts'

try {
  await Deno.remove('stories.db')
} catch {
  // nothing to remove
}

const db = new DB('./stories.db')

await db.query(
  `CREATE TABLE stories (
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL
  )`
)

// await db.query(
//   `CREATE TABLE votes (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     ...
//   )`
// )
