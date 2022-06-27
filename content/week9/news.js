import { Application } from 'https://deno.land/x/abc@v1.0.2/mod.ts'
import { DB } from 'https://deno.land/x/sqlite/mod.ts'

const db = new DB('stories.db')
const app = new Application()
const PORT = 8080

app
  .get('/stories', async (server) => {})
  .post('/stories/:id/votes', (server) => {})
  .get('/submit', async (server) => {})
  .post('/stories', async () => {})
  .get('/login', async () => {})
  .post('/sessions', async () => {})
  .delete('/sessions', async () => {})
  .get('/signup', async () => {})
  .post('/users', async () => {})
  .start({ port: PORT })

console.log(`Server running on http://localhost:${PORT}`)
