# Week 5 - Mastery Quiz - Answers

<br>

Question 1.

**Answer & explanation**:

- `GET`
- `POST`
- `PUT`
- `DELETE`
- `PATCH`
- `HEAD`

HTTP Methods are used to differentiate between different tasks that an API might do - for example - `GET` a list of my favourite food or `POST` a new food that I tried.

Technically, you can use any HTTP Method you like when talking to a server - is it only convention that means that certain requests will be rejected if you don't use the right Method Header.

**If you got this wrong**: Go through the associated resources below

- [:link: - HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [:link: - 7 HTTP methods every web developer should know and how to test them](https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them)

<hr>

Question 2.

**Answer & explanation**:

A 200 response code means "Success".

When dealing with servers if the server returns a 200 code it means that the request has successfully been applied.

**If you got this wrong**: Go through the associated resources below

- [:link: - HTTP Response Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [:link: - What are HTTP status codes?](https://umbraco.com/knowledge-base/http-status-codes/)

<hr>

Question 3.

**Answer & explanation**:

A 404 response code means "Not Found".

When dealing with servers if the server returns a 404 code it means that whatever resources you were trying to request has not been found. For example, if you are trying to view a blog post that has been deleted.

**If you got this wrong**: Go through the associated resources below

- [:link: - HTTP Response Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [:link: - What are HTTP status codes?](https://umbraco.com/knowledge-base/http-status-codes/)

<hr>

Question 4.

**Answer & explanation**:

The `body` of a request contains data to do with the request we're sending to the server or the response that we're getting from it.

For example, when requesting the content of Google.com we might get the HTML, any images and the JavaScript in the body of the response.

**If you got this wrong**: Go through the associated resources below

- [:link: - HTTP Messages](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)
- [:link: - The Http and the Web | Http Explained | Request-Response Cycle](https://www.youtube.com/watch?v=eesqK59rhGA)

<hr>

Question 5.

**Answer & explanation**:

A `GET` request is conventionally used to retrieve data from an API or website. For example, to `GET` a list of cities.

A `POST` request is conventionally used to submit new data to an API or website. For example, to add a new friend on a social media platform.

**If you got this wrong**: Go through the associated resources below

- [:link: - What is the difference between POST and GET?](https://stackoverflow.com/questions/3477333/what-is-the-difference-between-post-and-get)

<hr>

Question 6.

**Answer & explanation**:

HTTP Headers tell the server or client how they should process a request or response. For example:

- The **Keep-Alive** general header allows the sender to hint about how the connection may be used to set a timeout and a maximum amount of requests.
- The **Expires** header contains the date/time after which the response is considered stale.
- The **Last-Modified** response HTTP header contains the date and time at which the origin server believes the resource was last modified. It is used as a validator to determine if a resource received or stored is the same.
- The **Content-Length** header indicates the size of the message body, in bytes, sent to the recipient.

**If you got this wrong**: Go through the associated resources below

- [:link: - HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

<hr>

Question 7.

**Answer & explanation**:

The `async` keyword is missing from the function. If we were to run this code, we would get an error informing us to add the `async` keyword.

**If you got this wrong**: Go through the associated resources below

- [:link: - Javascript.info - Async/Await](https://javascript.info/async-await)

<hr>

Question 8.

**Answer & explanation**:

The function execution "pauses" at the line await promise and resumes when the promise settles, with the resolve value of the promise being assigned to result. So, the code above shows "done!" after one second.

Let’s emphasize: `await` makes the current function pause until the promise settles, and then goes on with the result. This doesn’t cost any CPU resources, because the engine can do other jobs in the meantime: execute other scripts, handle events etc.

`await` is mostly just a more elegant way to get the promise result than promise.then. `await` is easier to read and write, especially when multiple Promises need to be waited for, which would otherwise require somewhat-unwieldy `.then` chains.

**If you got this wrong**: Go through the associated resources below

- [:link: - Making asynchronous programming easier with async and await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)

<hr>

Question 9.

**Answer & explanation**:

It's pretty close, but we're not setting the State the correct way. We should always use `setState()` to set state.

**If you got this wrong**: Go through the associated resources below

- [:link: - Fetching Data and Updating State in a React Class](https://www.pluralsight.com/guides/fetching-data-updating-state-react-class)

<hr>

Question 10.

**Answer & explanation**:

Promises can be in one of three states

1. Pending
2. Resolved
3. Rejected

**If you got this wrong**: Go through the associated resources below

- [:link: - JavaScript Promises Explained](https://www.freecodecamp.org/news/javascript-promises-explained)

<hr>

Question 11.

**Answer & explanation**:

> C. print "SUCCESS!"

This is known as Promise Chaining and means that you can pass data through different `.then()` blocks.

**If you got this wrong**: Go through the associated resources below

- [:link: - Promise Chaining](https://javascript.info/promise-chaining)

<hr>
