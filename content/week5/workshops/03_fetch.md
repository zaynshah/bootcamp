# Fetch

## Learning Objectives

- Describe what `fetch` is and what it does
- Write a simple `fetch` request to an API endpoint and parse the JSON response
- Write a `post` `fetch` request that sends data to an API endpoint
- Add `header`s to a `fetch` request

## Pre-work

### Setup

If it hasn’t been created, create two threads in #workshops with the name 'Fetch: API Links' and 'Fetch: Answers'

### Exercise

**Find** an API that returns a JSON file and post it in the thread named ‘Fetch: API Links’.

**Convert** this CSV into a JSON object with key/value pairs.

```csv
John,Doe,120 jefferson st.,Riverside, NJ, 08075
Jack,McGinnis,220 hobo Av.,Phila, PA,09119
"John ""Da Man""",Repici,120 Jefferson St.,Riverside, NJ,08075
```

Why do we need to fetch?

### Share

Copy your JSON object and post your answer in the thread named ‘Fetch: Answers’.

## Workshop

For this workshop, we're going to write a small program that can send an SMS to any phone number.

We'll be using this API

https://api.thesmsworks.co.uk

### Setup

You can find the key information here:

```json
{
  "customerid": "4471-3c49-f6b8-4186-a8bc-2abf335e9ce9",
  "key": "06e1af73-e252-4ba8-9fd6-45b821e010d6",
  "secret": "c24cd309d0eaeb32c593e35128ca98ae3197a5c1e278299b74cc2c4d14292e0a"
}
```

To generate a token for authorisation copy the JSON above and make an HTTP POST call to the token endpoint - `https://api.thesmsworks.co.uk/v1/auth/token`. Make sure you specify the Content-Type as `application/json`.

This will return you a token.

See `getToken()` in `03_fetch_solution.js` for an example.

### Check Credits

For the first task, write a fetch request that finds out if we still have SMS's on our account

https://api.thesmsworks.co.uk/docs/api-reference.html#operation/credits

_Note:_ You will need to be authenticated to make this request. See `getToken()` and `checkCredits(token)` in `03_fetch_solution.js` for an example.

### Send SMS

With this token, you can send SMS messages to people in the class. You can find the documentation for this here:

https://api.thesmsworks.co.uk/docs/api-reference.html#tag/messages/paths/~1message~1send/post

A rough and ready implementation is available in `03_fetch_solution.js`.

## Live Code

Next, take the code you've just written and make a very simple React app that

1. `fetch`s the amount of credits in a component and shows the result in the component
2. Has a component that accepts a `sender`, `phoneNumber`, `message` and a button to send an SMS.
3. When you send an SMS, it should update the amount of credits remaining
