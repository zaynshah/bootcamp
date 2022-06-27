import { Application } from 'https://deno.land/x/abc/mod.ts'
import { DB } from 'https://deno.land/x/sqlite@v2.5.0/mod.ts'

const db = new DB('pokemon.sqlite')
const app = new Application()
const PORT = 8080

app
  .get('/pokemon', getAllPokemon)
  .get('/pokemon/:id', getPokemonById)
  .post('/pokemon', postPokemon)
  .patch('/pokemon/:id', updatePokemonById)
  .delete('/pokemon/:id', deletePokemonById)
  .start({ port: PORT })

async function getAllPokemon(server) {
  // 1. Endpoint should return all pokemon
  // 2. Endpoint should order by a field depending on query param (height or weight)
  // 3. Endpoint should limit depending on a query param
}

async function getPokemonById(server) {
  // 1. Endpoint should return pokemon based on ID path param
}

async function postPokemon(server) {
  // 1. Endpoint should accept a new pokemon
}

async function updatePokemonById(server) {
  // 1. Endpoint should update a pokemon information based on the ID path param
}

async function deletePokemonById(server) {
  // 1. Endpoint should delete a pokemon based on the ID path param
}

console.log(`Server running on http://localhost:${PORT}`)
