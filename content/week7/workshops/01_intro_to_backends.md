# Intro to Backends

## Learning Objectives

By the end of this session a student should be able to

- Define the differences between a backend and a frontend
- List the benefits of the frontend and the backend
- Write a simple endpoint that accepts a `get` request using `abc` and `deno`

## Pre-work

### Setup

If it hasn't been created, create a thread in #workshops titled 'Intro To Backends: Pre Work'.

### Research

- Define a front end in less than 50 words.
- Define a backend in less than 50 words.

Take this website as an example: https://www.nandos.co.uk/

- What is happening in the frontend and what is happening in the backend? **Define** as many of these processes as possible.

- What different technologies would you use for either frontend or backend development?

**Share** all of your answers in the above thread.

## Workshop

### Discussion

Speak through the

- Differences between frontend and backend programs
- The positive and negative points of running programs on the frontend and backend

### Live Code

Write a simple Company Server that imports an array of companies and exposes a series of endpoints to manipulate the array.

You can find the company data in `01_company_data.js`

Live code the below example explaining

```js
import { Application } from 'https://deno.land/x/abc@v1.3.3/mod.ts'
import companyData from './01_company_data.js'

const app = new Application()

app
  .get('/companies', (c) => {
    return server.json(companyData)
  })
  .start({ port: 8080 })
```

Next add an endpoint that will return the company based on the `id` given. e.g.

> `localhost:3000/companies/1`

should return the company with the `id` equal to 1

### Pair Programming Exercise

Using the `param`s Documentation:

https://deno.land/x/abc@v1.3.3/docs/getting_started.md#path-parameters

Write an endpoint that will let the user search for a cat by name. i.e.

> `localhost:3000/search?s=eayo`

should return

```js
  {
    id: 1,
    name: 'Eayo',
    domain: 'imgur.com',
    country: 'Czech Republic',
    email: 'jwaterdrinker0@ibm.com',
    stock: 'Interstate Power and Light Company'
  }
```
