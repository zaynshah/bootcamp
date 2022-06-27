# Intro to Backends

## Learning Objectives

By the end of this session a student should be able to

- Parse a `post` request from an `abc` backend
- List the common HTTP Header Methods
- List the common HTTP Response Codes
- Use Postman to debug endpoints

## Pre-work

### Setup

Download,install and open Postman, we'll be using it in today's workshop

https://www.postman.com/

If it hasn't been created, create a thread in #workshops called 'Intro to Backends II: Pre Work'.

### Watch

**Sending Form Data via POST:** https://www.youtube.com/watch?v=c3qWHnJJbSY

### Research

- Write a definition for what an "endpoint" is in an API.
- Write a max 50 word definition of what a HTTP status code is.
- Think of as many HTTP status codes as you can.

Post all of your answers into the ‘Answers’ thread

## Workshop

### Pop Quiz

1. When is the HTTP `GET` method used?
2. When is the HTTP `POST` method used?
3. When is the HTTP `PATCH` method used?
4. When is the HTTP `PUT` method used?
5. When is the HTTP `DELETE` method used?
6. What does the 404 response code mean?
7. What does the 200 response code mean?
8. What does the 400 response code mean?

### Live Code

Following on from yesterday, extend our Company Server to accept a `post` request

You can find the company data in `01_company_data.js`

The end point should add a company when `post`ing to the `/companies` endpoint. These are the required fields:

- id
- name
- domain
- country
- email
- stock

They should all be sent in the `body` of the request. The server should return a response code and an error message if it does not.

### Live Example

Use Postman to demonstrate how you can test an `post` request without having to writing any JavaScript code.

### Pair Programming Exercise

Using the `routing` Documentation:

https://deno.land/x/abc@v1.3.3/docs/getting_started.md#routing
Write an endpoint that will let the user search for a cat by name. i.e.

> `localhost:3000/companies/212`

should delete the company with the id equal to `212`
