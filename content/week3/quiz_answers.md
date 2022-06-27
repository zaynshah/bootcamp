# Week 3 - Mastery quiz (answers)

<hr>

Question 1.

**Answer**: Only the 2nd example is valid.

**Explanation**: CSS declarations follow the format:

```css
selector {
  property-name: property-value;
}
```

In the first example, the selector and property name are swapped, in the third example the property name and value are flipped (and we're missing a colon).

**If you got this wrong**: Go through MDN's CSS basics guide again:

- [:link: - CSS basics (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)

<hr>

Question 2.

**Answer**: No, we have two main problems. First our `<p>` tag is missing a corresponding closing tag `</p>`. Secondly, a `<ul>` (unordered list) should contain several `<li>`s (list items), not the other way around.

**Explanation**: The `get` keyword defines a getter, which allows a method to be accessed as if it were a property (or, equivalently, allows you to define a property whose value is the result of calling a method). If we don't use the `get` keyword, `name` is a normal method.

**If you got this wrong**: Review the below materials on the structure and validity of HTML:

- [:link: - HTML basics (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [:link: - HTML Basics: Elements, Tags, and Document Structure)](https://bethsoderberg.com/blog/html-basics-elements-tags-and-document-structure/)

<hr>

Question 3.

**Answer**: It will be green.

**Explanation**: First we consider whether the `span` rule (red coloring) or `article span` rule (green coloring) will take effect. Since the `article span` selector is more specific, it will take precedence. Our third rule's selector includes a class name and ID which is more specific still than `article span`. However `.title #author` would target an element with the ID `author` inside an element with the class `title`, which doesn't reflect our HTML structure - so the rule won't be applied.

**If you got this wrong**: Review the below materials on specificity and selectors:

- [:link: - Specificity (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [:link: - CSS building blocks > CSS selectors (MDN)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)

<hr>

Question 4.

**Answer & explanation**: `addEventListener` is the method we can call which takes two arguments: an event to watch for and a function which will be fired in response to that event occuring.

With `addEventListener` included, the user will be able to click the button and then the button with disappear.

**If you got this wrong**: Review the below materials on events:

- [:link: - JavaScript building blocks > Introduction to events](https://teachcomputerscience.com/validation/)

<hr>

Question 5.

**Answer**: Here is my implementation:

```html
<article>
  <div class="article-l">
    <h2>
      <a href="/covid-testing-article"
        >People being sent long distances for Covid tests</a
      >
    </h2>
    <p>
      Public health experts warn a lack of tests in some areas could mean new
      outbreaks are missed.
    </p>

    <div class="metadata">
      <img src="clock.svg" />
      <time datetime="2020-11-18T14:54:39.929">2h</time>

      <span class="separator">|</span>

      <a href="/health" class="category">Health</a>
    </div>
  </div>

  <div class="article-r">
    <img
      src="covid-sign.jpg"
      alt='An illuminated sign reading "Covid-19 Testing Clinic"'
    />
  </div>
</article>
```

**Explanation**: I'd say the must-haves (mark this question as wrong if you were missing these):

- Some kind of `<h1>` - `<h6>` element for our header
- A `<ul>` containing `<li>`s, each containing an `<a>` for the bullet-pointed list of related articles
- An `<img>` for the right hand image
- Some element to contain everything, ideally something semantic like `<article>` or `<section>`

Bonuses:

- Remembering to put an `"alt"` tag on your image
- Using a `<time>` tag for the "2h"
- Remembering to include tags for the small visual elements like the separator between 2h and Health, the clock icon
- Spotting that the header should also likely be a link

**If you got this wrong**: Review the below materials from MDN:

- [:link: - HTML elements reference (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [:link: - Semantics in HTML (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)

<hr>

Question 6.

**Answer & explanation**: The key problem is that we'll end up with multiple elements with the same ID (`lucky-number`), but IDs should be unique. Bonus points if you also spotted that our `button` selector is too general and will cause problems if we add additional `button` elements to our page.

**If you got this wrong**: Read more about IDs below:

- [:link: - HTML Global attributes > id](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)

<hr>

Question 7.

**Answer**:

- Add elements to the current page: true
- Read any file from the user's hard drive: false
- Log messages to the DevTools consoles: true
- Continue executing when the user isn't connected to the internet: true
- Read the value entered into a password field on the current page: true
- Read a user's complete browsing history: false

**Answer & explanation**: Generally speaking, JS can manipulate the DOM freely (including sensitive elements like a password field) and interact with the dev tools. JavaScript doesn't have to be connected to the internet to work. However, the sandbox restricts its ability to access anything outside of the current webpage (to, say, read files on your machine or your data from other websites).

**If you got this wrong**: Review the material below on the browser sandbox:

- [:link: - Browser sandbox (web.dev)](https://web.dev/browser-sandbox/)

<hr>

Question 8.

**Answer & explanation**: The first time we click the button, we won't see any message (but behind the scenes we've added an additional click listener, with a handler which will display a message). The second time we click, we'll see the message appear once. The third time we click, we'll see the message appear twice and so on. Each time we click we, we run the existing listeners and add a new one - because we've nested an `addEventListener('click')` inside our `addEventListener('click')`.

**If you got this wrong**: Read the articles on events in JS:

- [:link: - JavaScript building blocks > Introduction to events (MDN)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [:link: - Creating and triggering events (MDN)](https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events)

<hr>

Question 9.

**Answer**: We'll see "Hi!" (and will see an error "Oops" if we open our Developer Tools).

**Explanation**: We don't see "Hi again!" because the thrown `Error` stops the execution of our function. The error is thrown because two arrays aren't equal is JS, even if they have the same contents (as we saw in previous weeks).

**If you got this wrong**: Review the materials on errors and equality:

- [:link: - Comparisons section of YDKJS Get Started, Chapter 2](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch2.md#comparisons)
- [:link: - Throwing Exceptions in JavaScript](https://rollbar.com/guides/javascript-throwing-exceptions/)
- [:link: - throw statement (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

<hr>

Question 10.

**Answer**:

1. `background` or `background-color`
2. `padding`
3. `border-radius`
4. `border`

**If you got this wrong**: Review the below materials on CSS properties:

- [:link: - CSS reference (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [:link: - CSS Visual Rules cheatsheet (Codecademy)](https://www.codecademy.com/learn/learn-css/modules/learn-css-selectors-visual-rules/cheatsheet)

<hr>

Question 11.

**Answer**:

First there will be an alert that says "Inner Hi!" followed immediately by an alert that says "Outer Hi!".

This is because of event propagation - unless we explicitly say otherwise events will "pass through" all of the elements in the DOM hierarchy.

**If you got this wrong**: Review the below materials on event propagation:

- [:link: - A simplified explanation of event propagation in JavaScript.](https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/)

<hr>

Question 12.

**Answer**:

```html
<div id="content">
  <p>Sohail</p>
  <p>Sean</p>
  <p>Nathan</p>
  <div>
    <p>Mo</p>
    <p>Berkan</p>
    <p>Kasia</p>
  </div>
</div>
```

There's quite a lot going on in here but the important points are

- `.pop()` removes the final element from the array and returns it
- `...tags` uses the spread operator to pass in all the elements of the array as individual parameters
- `.map()` converts the names into `<p>` elements
- `document.createElement('div')` creates a `div` that we add all the elements to and add last

**If you got this wrong**: Review the below materials:

- [:link: - Pop, Push, Shift and Unshift Array Methods in JavaScript](https://alligator.io/js/push-pop-shift-unshift-array-methods/)
- [:link: - Spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
