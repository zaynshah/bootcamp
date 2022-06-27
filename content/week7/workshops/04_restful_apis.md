# RESTful APIs

## Learning Objectives

By the end of this workshop a student should be able to

- Explain the problem that REST is trying to solve
- Define the five REST API principles
- Design an API that complies with a REST architecture
- Compare REST to other API architectures

## Pre-work

### Exercise

Before the session you should be able to answer the following questions

- What is a REST architecture?
- What are the benefits of using a REST architecture?

In your own words, summarise each of the five principles of a REST API. Try not to write more than one sentence for each.

1. Uniform interface
2. Client–server
3. Stateless
4. Cacheable
5. Layered system

## Workshop

### Lecture

Run through each of the principles of a REST API Principles

1. Uniform interface
   - The URI should inform what the endpoint does
   - The URI should be the same across different resources
     - e.g. `/api/booking/3414/status` and `/api/booking/55252/status` should return the same data for different bookings
2. Client–server
   - The client and the server should be completely independent.
   - One should not rely on the other apart from URIs
3. Stateless
   - Does the server have any state about the user?
4. Cacheable
   - Does the data remain the same and so can be cached?
   - Is the data returned with the correct headers to allow it do be cached?
5. Layered system
   - REST allows you to use a layered system architecture where you deploy the APIs on server A, and store data on server B and authenticate requests in Server C, for example.

Additionally, a good server should

- Use correct HTTP Methods
- Use correct error codes
- Respond with data, always

### Discussion

In `04_bad_api.js` you'll find an example of an API that does not conform to REST API standards.

In pairs, you should

1. Work out how the program works by reading the code
2. Work out how the program works by using Postman
3. Identify all of the ways that the program does not conform to REST standards
   - Make notes with the rule violation, the line numbers it affects
4. Think up ideas about how you would fix the issues

### Live Code

Live code the `04_bad_server` server so that it conforms better to the REST API rules

### Pop Quiz

1. What does REST stand for?
2. When do we use a REST architecture?
3. What are the five principles of REST?
4. What does it mean that a REST API has a Uniform interface?
5. What is the relationship between the Client and the Server in a REST API?
6. How would you make an API stateless?
7. When can data be cached from an API?
8. What does it mean that a REST API has a Layered System?
