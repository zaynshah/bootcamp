import { Application } from 'https://deno.land/x/abc@v1.3.1/mod.ts'
import {
  intervalToDuration,
  formatDuration,
  format
} from 'https://deno.land/x/date_fns@v2.15.0/index.js'

const app = new Application()
const PORT = 8080
const christmas = new Date(`December 25, ${new Date().getFullYear()}`)
const currentDate = new Date()
function timeUntilChristmas() {}
let timeDiff = intervalToDuration({
  start: new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    currentDate.getHours(),
    currentDate.getMinutes(),
    currentDate.getSeconds()
  ),
  end: new Date(
    christmas.getFullYear(),
    christmas.getMonth(),
    christmas.getDate(),
    christmas.getHours(),
    christmas.getMinutes(),
    christmas.getSeconds()
  )
})
app
  .get('/', (server) => {
    server.html(
      `<h1>It's ${timeDiff.months} months ${timeDiff.days} days ${timeDiff.hours} hours ${timeDiff.minutes} minutes and ${timeDiff.seconds} seconds until Christmas</h1>`
    )
  })
  .get('/bye', (server) => {
    server.html(`<h1>{Goodbye World}</h1>`)
  })
  .start({ port: PORT })
console.log(`Server running on http://localhost:${PORT}`)
