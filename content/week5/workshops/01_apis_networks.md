# APIs & Networking Workshop

## Learning Objectives

- Understand the relationship between a client and a server
- Define what an API is and list reasons that they are useful
- Use the Network Tab to inspect a network call in Chrome
- List the common HTTP response codes and recall what they mean
- List the common HTTP methods and describe an example of when they would be used

## Pre-work

### Setup

Create a thread in the #workshops channel if it hasn’t already been created, named ‘APIs and Networking: Diagrams’ and ‘APIs and Networking: Answers’

### Exercise

**Draw** a diagram showing what happens in the backend when you type in an address into a search engine, press enter and receive a visual display. Share your diagrams into the ‘Diagrams’ thread.

**Research**

- What is an API?
- What does it mean for an API to be RESTful?
- What are the key parts of a HTTP request & response?

**Share** all of your answers into the ‘Answers’ thread.

## Workshop

### Metaphor

Imagine a world were anyone could access any information. A world were any developer could access the information held by any company in the world.

What would be the issues with this world?

<details>
<summary>Click here for answer (do not open)</summary>

What a terrible idea!

- We don't want all our information to be accessible!
  - We only want to let certain people have access
- I could overload company's servers by requesting too much data

Even if this was a good idea...

- Handling different data formats would be hard
- Working out _how_ to request the data would be hard (every company is different)

</details>

<br>

This is why APIs were invented - to be able to limit who can access data, how much data they can access, formalise how data is retrieved and make it easy for developers to request data when they're allowed to.

### Live Example

Let's take a look at this API that retrieves information about the TV Show, Breaking Bad.

https://breakingbadapi.com/documentation

Spend some time requesting different attributes from this API using:

1. Chrome with the JSON Viewer add-on to pretty print the JSON response
2. curl with `curl -v` to view the headers

_(Optional)_ Consider also using `curl` to request a website (google.com) to show how the request is the same but it will return the `html` of the page.

You should take care to call out the follow parameters - we'll be discussing them next.

1. HTTP Headers
2. Response Code

### Live Example

Let imagine we're designing an API for Cake Shop. What API endpoints might we need to simulate everything that a Cake Shop does?

Take the students through a simple API that walks them through an imaginary cake shop API.

Take time to ask them to predict the outcome of the

- `/cakes` - A `GET` endpoint to retrieve all cakes.
- `/cakes/{name}` - A `GET` endpoint to retrieve a specific cake
- `/cakes/{name}` - A `POST` endpoint to let everyone know about a new cake we've got for sale
- `/cakes/{name}/ingredients` - An `PATCH` endpoint to update the ingredients list for a given caken
- ...

An important point to drive home here is that all of this is standardised - not compulsory.

### Group Task

For each HTTP method, URL and response code you should provide a reasonable guess at the _semantic meaning_ of the request and response from the server. You should write out this meaning in plain english. Remember everything is built on convention, so there's no reason why:

> `POST www.example.com/cakes 201`

Couldn't return a picture of a cat, or launch a rocket. However, by convention `POST` creates a resource, and 201 indicates a resource was successfully created. So we can infer:

> "We're trying to add a new cake to example.com. The cake seems to have been successfully added."

Similarly, for:

> `GET www.example.com/students 404`

> "We're trying to get a list of students from example.com, but the resource that we're looking for could not be found. This could be because it's been deleted or because we're trying to request something that doesn't exist."

Try now with the ones below

1. `POST www.example.com/students 400`
2. `GET www.example.com/students 200`
3. `GET www.example.com/students/alice 401`
4. `GET www.example.com/students 500`
5. `PUT www.example.com/students/alice 408`
6. `DELETE www.example.com/students/alice 429`
7. `GET www.example.com/learners 301`
8. `GET www.example.com/coaches 503`
9. `POST www.example.com/coaches 413`
10. `POST www.example.com/lessons 418`

<details>
<summary>Click here for answer (do not open)</summary>

1. We're trying to create a student, on example.com, however something went wrong in the request we sent. It's possible that the data that we're sending is incorrectly formatted so Google will return an error.
2. We're trying to retrieve a list of students and it worked successfully.
3. We're trying to retrieve a specific student (Alice) but we're not authorised to do. This could be because we've not sent the right password or are logged in as the right user.
4. We're trying to retrieve a list of students but something went wrong on example.com's servers. This could be because an engineer configured something wrong or because of a bug.
5. We're trying to update a student's (Alice's) record but our request timed out. This could be because our internet is too slow or we have bad reception.
6. We're trying to delete a student (Alice) but we've sent too many requests recently so they've stopped us from sending more. This could because of a bug on our side or because our users have requested too much data too quickly.
7. We're trying to retrieve a list of learners but the resources that we're looking for has been moved to another URL.
8. We're trying to retrieve a list of coaches but the API or endpoint (URL) we're trying to speak to is currently down.
9. We're trying to create a coach on example.com, but the data we're sending is too large. This could be because a user is trying to upload a file that is too large.
10. We're trying to create a lesson but we're a teapot. So we can't.

</details>
