import { Application } from 'https://deno.land/x/abc@v1.3.1/mod.ts'
import { abcCors } from 'https://deno.land/x/cors/mod.ts'
import { Store } from './store/store.ts'

const app = new Application()
const PORT = 8080
const store = new Store('shortenings')

function randomShortCode() {
  return Math.random().toString(36).substring(2, 6)
}

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
  .get('/', (server) => {
    server.json({}, 200)
  })
  .get('l/:shortcode', async (server) => {
    const { shortcode } = server.params
    const fullLink = await store.get(shortcode)
    let url = fullLink['url']
    let count = (parseInt(fullLink['count']) + 1).toString()
    await store.set(shortcode, { url, count })
    console.log(typeof count)
    server.redirect(fullLink['url'])
  })
  .post('/shortlinks', async (server) => {
    const body = await server.body
    const url = body.fullUrl
    const key = randomShortCode()
    let count = '0'

    if (!(await checkValidUrl(url))) {
      return server.json({ error: 'Invalid URL' }, 404)
    }
    await store.set(key, { url, count })
    server.json({ shortcode: key }, 200)
  })
  .get('/urls', async (server) => {
    const data = await store.toObject()
    server.json({ urls: data }, 200)
  })
  .delete('/:shortcode', async (server) => {
    const { shortcode } = server.params
    if (await store.get(shortcode)) {
      await store.delete(shortcode)
      server.json({ success: 'nice' }, 200)
    }
  })

  .start({ port: PORT })

console.log(`Server running on http://localhost:${PORT}`)
