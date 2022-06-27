# Documentation session

## Learning Objectives

By the end of this session learners should be able to

- Use documentation as a resource to impactfully solve their problems when coding
- Read and understand why errors happen
- Read and understand what a function does and how it works
- Write technical documentation in code comments or READMEs
- Use the Browser Compatibility graph to work out if their browser currently supports an API feature

### Exercise 1 (5 mins)

Your client is Penguin Random House.

First give the students this URL

> _[https://reststop.randomhouse.com/resources/authors?lastName=Grisham](https://reststop.randomhouse.com/resources/authors?lastName=Grisham)_

Ask them to get all of the authors with the last name “Rowling”

> _[https://reststop.randomhouse.com/resources/authors?lastName=Rowling](https://reststop.randomhouse.com/resources/authors?lastName=Rowling)_

Ask the students to get all authors with the first name John

> _[https://reststop.randomhouse.com/resources/authors?firstName=John](https://reststop.randomhouse.com/resources/authors?firstName=John)_

Ask the students to get all books that start with the word “Harry”

…

But now they need documentation!

## What is documentation?

It’s supposed to describe how developers interact with every aspect of a software service/library and is how we learn to use the ‘API’ of a software.

### What can you learn from documentation?

- Syntax & functionality
- Further resources for practical examples
- How to start using the software i.e. get started guides
- Updates & changes
- Code examples

### Why do you need to use documentation?

- It is a user manual to frameworks, languages
- It helps you to write better code
- It often helps to answer questions

### When do you need to use documentation?

- Whenever picking up a new language/framework/library it is useful to take a look at docs
  - They often have user guides & getting started docs
- **Note**: Whenever you look at a Stack Overflow question about why your code isn’t working, it’s important to understand why it isn’t working and why solutions on Stack Overflow do work. If you read the documentation, often it helps you to understand a programming language much better where this problem solving becomes easier

### Who is documentation for?

- It should be for everyone (but mainly developers, see below)
- There isn’t really a standard for documentation which means that sometimes it can be difficult to find what you’re looking for
- Sometimes documentation can be written very technically and sometimes it is much easier to follow or has additional resources like videos to help you understand

#### Examples of using docs

- Instead of loops going through arrays using forEach/map as an example?
- Understanding syntax

### Exercise 2 (10 mins)

Write out in a short program the current hour we are in, using the Date Time API:

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

https://mzl.la/3hDsYVp

### What are the other uses of docs?

Docs can also be used to see if APIs are currently supported by your browser

- Migrations
- Library extensions
- New features / breaking changes

Vue 3 migration guide: https://v3.vuejs.org/guide/migration/introduction.html#overview

### Exercise 3 (6 mins)

Take a look at these three Browser APIs, are they supported by your current browser?

Before starting, find out your browser’s version and version number

1. [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
2. [https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
3. [https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)

## When should I write?

- READMEs
  - [https://github.com/nodejs/node](https://github.com/nodejs/node)
  - [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
  - [https://github.com/facebook/react](https://github.com/facebook/react)
- Markdown
- Good coding practices (naming conventions, making your code readable + comments)

### Exercise 4 (10 mins+)

Take a look at these three README’s

- [https://github.com/nodejs/node](https://github.com/nodejs/node)
- [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
- [https://github.com/facebook/react](https://github.com/facebook/react)

It’s really important that your Final Projects have good READMEs so that we can continue to run them in the future and we remember what the projects are.

In your teams, each take a section of a README and add it to your final projects.

## Resources

[https://devdocs.io/](https://devdocs.io/)

[http://cassandrawilcox.me/beginners-guide-developer-documentation/](http://cassandrawilcox.me/beginners-guide-developer-documentation/)

## Notes from the session (14/7/21)

The exercises went pretty smoothly, but exercise 2 was too straightforward and didn’t really require too much involvement using docs. It would be a good idea to try and make this more involved, and maybe do a lengthier exercise that involves navigating the API more in depth for themselves.

Error docs: Having an example to go through of encountering an error message and then finding the error/what it means/ how you would approach fixing the issue would I think also be helpful, especially for introducing a more methodical approach to problem solving using docs.

For READMEs - having a template or basis to give the groups (for example, What is Project X, Instructions for Set Up, Usage, Testing, Dependencies, etc.) when completing the final exercise - also keeping this as a ‘do in your own time’ thing as not all group members were present

Kyle made a good point - that not all documentation is helpful and is technically complex to read on first read, so using third party documentation which is easier to follow works better. Possibly adding in examples where this happens/ breaking down the syntax of these docs might be a nice add?

Keano also asked if there were plugins that are also auto-documented like in Python. I know VSCode has an extension but providing some resources might help.

What went well:

- I think the different examples of documentation worked well and there was definitely enough content with the exercises
- There were a few good questions

What could be better:

- Better engagement, although do think this would be better in person in general
- Not as involved/easy exercises

For next time:

- Ask the students for feedback
- Maybe ask them to bring a current problem, or make a note of something tricky they’ve had to do recently (to try and break it down + use docs to get as much info as they can)
