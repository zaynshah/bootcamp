import { Application } from 'https://deno.land/x/abc/mod.ts'
import { DB } from 'https://deno.land/x/sqlite@v2.5.0/mod.ts'
import { abcCors } from 'https://deno.land/x/cors/mod.ts'

const db = new DB('stories.db')
const app = new Application()
const PORT = 8080

async function checkValidUrl(url) {
  try {
    await fetch(url)
  } catch (error) {
    return false
  }
  return true
}

app
  .use(abcCors())
  .get('/stories', async (server) => {
    const stories = [
      ...db.query('SELECT * FROM stories ORDER BY score DESC').asObjects()
    ]

    await server.json(stories, 200)
  })
  .get('/storie', async (server) => {
    const { page } = server.queryParams
    const numOfStory = 5
    if (page) {
      const stories = [
        ...db
          .query('SELECT * FROM stories ORDER BY score DESC limit ? OFFSET ?', [
            numOfStory,
            page * 5 - 5
          ])
          .asObjects()
      ]

      await server.json(stories, 200)
    } else await server.json(stor, 200)
  })

  .post('/stories/:id/votes', async (server) => {
    const { id } = server.params
    const { direction } = await server.body

    if (direction == 'down') {
      db.query('UPDATE stories SET score  = score - 1 WHERE id = ? ', [id])
    } else {
      db.query('UPDATE stories SET score = score + 1 WHERE id = ?', [id])
    }
    const stories = [
      ...db.query('SELECT * FROM stories ORDER BY score DESC').asObjects()
    ]
    return server.json(stories, 200)
  })

  .post('/stories', async (server) => {
    const { title, url } = await server.body

    if (!(await checkValidUrl(url))) {
      return server.json({ error: 'Invalid URL' }, 404)
    }

    db.query(
      `INSERT INTO stories (title, url, created_at, updated_at) VALUES (?,?, datetime('now'), datetime('now'))`,
      [title, url]
    )
    const stories = [
      ...db.query('SELECT * FROM stories ORDER BY score DESC').asObjects()
    ]
    server.json(stories, 200)
  })
  .start({ port: PORT })
console.log(`Server running on http://localhost:${PORT}`)
