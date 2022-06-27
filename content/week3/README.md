# Frontends I: HTML, CSS and JavaScript in the browser <!-- omit in toc -->

## Contents <!-- omit in toc -->

- [Learning Objectives](#learning-objectives)
- [Previous Sessions](#previous-sessions)
- [Project 1: CV site](#project-1-cv-site)
  - [Project Outline](#project-outline)
  - [Challenge 1: Content](#challenge-1-content)
    - [Hello world](#hello-world)
    - [Adding textual content](#adding-textual-content)
    - [Adding a picture, dividers, additional pages and hyperlinks](#adding-a-picture-dividers-additional-pages-and-hyperlinks)
  - [Challenge 2: Styling](#challenge-2-styling)
    - [Learning CSS](#learning-css)
    - [Setup](#setup)
    - [Layout](#layout)
    - [Typography](#typography)
    - [Last touches](#last-touches)
    - [Separation of concerns](#separation-of-concerns)
- [Project 2 (Challenge 3): Recreating Deliveroo with HTML and CSS](#project-2-challenge-3-recreating-deliveroo-with-html-and-css)
- [Project 3: Blackjack in the Browser](#project-3-blackjack-in-the-browser)
  - [Challenge 4: Hello Blackjack](#challenge-4-hello-blackjack)
    - [Adding a button](#adding-a-button)
    - [Modifying our page](#modifying-our-page)
    - [Separation of concerns - again](#separation-of-concerns---again)
  - [Challenge 5: Full blackjack implementation](#challenge-5-full-blackjack-implementation)
    - [Tips](#tips)
    - [Above and beyond](#above-and-beyond)
- [Glossary](#glossary)

## Timetable <!-- omit in toc -->

Below is an example pace at which you might work through the materials:

| Time                | Focus                                                                                                                                                                                                                                                                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Monday morning      | Start creating digital CV ([Challenge 1](#challenge-1-content)), create HTML structure, add textual content. Learn to use Chrome Dev tools                                                                                                                                                                                                                   |
| Monday afternoon    | Add visual content, additional pages and hyperlinks to digital CV.                                                                                                                                                                                                                                                                                           |
| Tuesday morning     | Style your digital CV ([Challenge 2](#challenge-2-styling)).                                                                                                                                                                                                                                                                                                 |
| Tuesday afternoon   | Complete all levels of Flexbox Froggy. Recreate Deliveroo's interface with HTML/CSS ([Challenge 3](#week-3-project-2-challenge-3-recreating-deliveroo-with-html-and-css)).                                                                                                                                                                                   |
| Wednesday morning   | Learn about events and the DOM. Create starting point for blackjack in the browser ([Challenge 4](#challenge-4-hello-blackjack)).                                                                                                                                                                                                                            |
| Wednesday afternoon | Start full implementation of blackjack in the browser ([Challenge 5](#challenge-5-full-blackjack-implementation)).                                                                                                                                                                                                                                           |
| Thursday morning    | Complete blackjack in the browser.                                                                                                                                                                                                                                                                                                                           |
| Thursday afternoon  | Take the [Week 3 Mastery Quiz](./quiz.md).                                                                                                                                                                                                                                                                                                                   |
| Friday              | **If you scored more 9 or more in the Mastery Quiz** - Congratulations 🎉! You've mastered the concepts for this week. You can move on to the [Above & beyond challenges](#above-and-beyond).                                                                                                                                                                |
|                     | **If you scored less than 9 in the Mastery Quiz** - Take the time you need to review the concepts you're unsure about (the guidance in the Quiz answers will point you to the materials to review). Once you're comfortable with all the concepts in the quiz, you can move on to the [Above & beyond challenges](#above-and-beyond) for any remaining time. |

## Learning Objectives

By the end of this week a learner will be able to

- Contrast the roles of HTML, CSS and JS
- Describe what the DOM is and why it is useful
- Re-create a website using common HTML elements (h1, h2, ul, li, div...)
- Style an element using CSS
- Predict the outcome of CSS based on the rules of CSS specificity
- Use flexbox to change the layout of a HTML element
- Use semantic HTML elements to better structure a website
- Create and add an HTML element to the DOM using JavaScript
- Implement margin, padding and border to style the layout of elements
- Remove an element from the DOM using JavaScript
- Re-create a website’s style and layout using HTML and CSS
- Set a class for an element using Javascript
- Create an event listener to respond to user input on the DOM
- Attach a CSS file to a HTML file using `<link>`
- Attach a JS file to a HTML file using `<script>`

## Previous Sessions

You can find the previous recorded sessions of this week here on Rewatch

- [Cohort 1 Workshops](https://sigmalabs.rewatch.com/collection/784/week-3-html-css-and-javascript-in-the-browser)

## Project 1: CV site

### Project Outline

To get to grips with basic HTML and CSS, we'll build ourselves a simple digital CV. We'll start by focusing on only the HTML (HyperText Markup Language) which defines the content of the page, with little attention paid to its aesthetics, look and feel. Once we're happy with our content, we'll use CSS (Cascading Style Sheets) to give our CV a more pleasant look. It's important to emphasise that these two languages, HTML and CSS, play complimentary but entirely different roles: HTML is about structure & content, whereas CSS is about presentation.

<p align="center"><img width='400' src='https://melaloo.files.wordpress.com/2015/07/02fig01.jpg'></p>

<br>
<hr>
<br>

### Challenge 1: Content

We're going to begin by adding the content we might expect on a CV: contact details, education, work experience, and a photo. Here's an example of what we'll end up with at the end of the challenge:

<p align="center"><img width='600' src='https://user-images.githubusercontent.com/636814/89437208-2dd3fb00-d73f-11ea-8387-ebb7c9f42225.png'></p>

Before diving in, it's worth getting a grounding in the basics of HTML:

- [:link: - HTML basics (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics) (15 min read)

Your best friend when working with HTML & CSS is the Chrome DevTools, which can be launched from Chrome with `Cmd` + `Option` + `I` or by right-clicking anywhere and choosing "Inspect". The DevTools are an extremely powerful and fully-featured tool, but the video below gives a good crash course introduction:

<img src="https://img.youtube.com/vi/25R1Jl5P7Mw/0.jpg" height="200">

- [:link: - HTML & CSS Crash Course Tutorial #7 - Chrome Dev Tools](https://www.youtube.com/watch?v=25R1Jl5P7Mw) (12 min watch)

As you're working through the challenges below, it's good practice to make frequent use of the DevTools to navigate your document and make experimental changes.

#### Hello world

Start by creating a `.html` file, and adding the key elements that form the [Anatomy of an HTML document](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics#Anatomy_of_an_HTML_document). Add some test content and open your new webpage in Chrome, and check that your content appears. (You should be able to launch your document by simply double clicking the file in Finder):

<img src='https://user-images.githubusercontent.com/636814/89441814-a473f700-d745-11ea-96fe-04073a04be74.png' width='400'>

Give your document an appropriate title, and check that its reflected in your browser tab:

<img src='https://user-images.githubusercontent.com/636814/89441728-81494780-d745-11ea-8ac7-f6c914e6a6ea.png'>

#### Adding textual content

Next we'll add the textual content of our CV. You're of course free to invent some or all of this content, but if you're able to create an authentic CV, all the better! Your CV should include:

- A top level heading (e.g. "My CV")
- Sections for contact details, education, experience and hobbies
- Education and experience should include dates and whereabouts
- In the experience section, detail responsibilities with bullet points

Make sure that you use appropriate elements for different kinds of text. For example, headings should use of the HTML [Heading Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements). Bullet points should be an [`<li>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li) (list item). Your CV should be broken down into [`<section>`s](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section). You can find a complete list of the HTML elements you can use here:

- [:link: - HTML elements reference (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)

There are two key reasons it's important to use the right kind of elements. Firstly, it gives them an appropriate (albeit spartan) appearance: headings are big and bold, list items are given bullets next to them etc. Secondly, and more importantly, it helps search engines and screen readers understand our content: misusing elements can hurt our search rankings and make our pages less accessible. You can read more about the importance of this below:

- [:link: - Semantics in HTML (MDN)](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)

#### Adding a picture, dividers, additional pages and hyperlinks

As they say, a picture paints a thousand words, so let's add an image to our page with an [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). Ideally, use a picture of yourself but any image in a [web-compatible format](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types) will do.

Next, add dividers between the sections. Take a look through the [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) on MDN to decide which element is most appropriate.

The Hypertext in HTML refers to the fact that we can link documents together. Rather than including our Hobbies on our main CV page, let's create a secondary page and add a link to it. Create a new `.html` file (e.g. `hobbies.html`) and add details of your hobbies and interests. Then add a link from your main CV to your hobbies page using the [`<a>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a):

<p align="center"><img src='https://user-images.githubusercontent.com/636814/89443320-07ff2400-d748-11ea-9536-47f965f5c5c5.png'></p>

You should also add a link from your Hobbies page back to the main CV page.

We now have a basic HTML CV with all of the key content and document structure properly defined - but it doesn't look terribly nice. Next, we'll introduce CSS to improve the aesthetics of our CV.

<br>
<hr>
<br>

### Challenge 2: Styling

With the content in place, we'll address the presentation of our CV. Here's an example of the sort of end result to aim for:

<p align="center"><img width='600' src='https://user-images.githubusercontent.com/636814/89512575-530e4b00-d7cb-11ea-994c-95987a472bc7.png'></p>

#### Learning CSS

Before we dive in, an excellent place to start will once again be MDN's guide to the basics of CSS:

- [:link: - CSS basics (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics) (15 min read)

You should also complete this game that will teach you a lot of the common CSS selectors

- [:link: - CSS Diner](https://flukeout.github.io/) (~1 hour)

#### Setup

To start with, we'll simply write our styles in a `<style>` tag at the top of our CV HTML file:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>My CV</title>
    <style>
      /* Your styles go here */
    </style>
  </head>
  <!-- ... -->
</html>
```

#### Layout

In our unstyled CV, all of our content is awkwardly left aligned - let's start by fixing that. Let's contain our CV content in a box, which is centred on a coloured background (as in the picture above). Ensure there is sufficient spacing in and around the box. In this section you should:

- Experiment with `margin`, `padding` and `border`
- Set the background color using a named color (like `blue` or `red`). Then try using a HEX color. Lastly, try using and [RGBA color](https://www.w3schools.com/cssref/func_rgba.asp).
- Pick an image you like from [Subtle Patterns](https://www.toptal.com/designers/subtlepatterns/) and use it as a [background image](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image).
- Don't forget to use the Chrome DevTools to help you with your experiments

- [:link: - Hexadecimal Colors Made Simple](https://www.pluralsight.com/blog/tutorials/understanding-hexadecimal-colors-simple) (5 min read)

Next, we'll move the picture of ourselves and our contact details (or any two elements on our CV) to be side by side. There are a few ways of achieving this, have a read through this article:

- [:link: - 3 ways to display two divs side by side (float, flexbox, CSS grid)](https://coder-coder.com/display-divs-side-by-side/) (10 min read)

And have a go at the float, flexbox and grid approaches.

#### Typography

Next, let's improve the rendering of the text content on our CV. First, let's refresh ourselves on the most common ways we can target elements in CSS. Often we might want to target all kinds of a particular element, for example all paragraph (`<p>`) tags. To make the font size in all paragraphs larger (setting the font size to, say, 18 pixels) I'd write:

```css
p {
  font-size: 18px;
}
```

There might be a particular paragraph which we want to style differently, say our opening "statement of purpose" line. One way to style this specific paragraph would be to give it an ID and then use an [ID selector](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors) in our CSS:

```html
<p id="statement-purpose">
  I'm a motivated, junior Software Developer, looking for my next role. I'm
  seeking a challenging position with room for personal growth.
</p>
```

```css
#statement-purpose {
  font-size: 20px;
  font-style: italic;
  color: #777;
}
```

This is where CSS's **cascading** nature comes into play. Our "statement of purpose" paragraph is both a `<p>` element, and has the id `#statement-purpose`. So will it's font size be `18px` or `20px`. Think about the answer (and why), then expand the next section:

<details>
  <summary>Hints if you're stuck</summary>

It will be `20px`, since the ID selector `#statement-purpose` is more **specific** than the type selector `p`. It's easy to see why the ID selector is more specific here: it targets only one paragraph, whereas the `p {}` selector targets _all_ paragraphs.

</details>

Lastly, we might want a middle ground - wanting to style several elements in the same way, without changing the style of _all_ that type of element on the page. For this we can use a class. For example, to style all of the dates on our CV, we might write:

```html
<h2>Work Experience</h2>

<p><span class="dates">2015-2017</span> - Bartender, Green Golf Club</p>

<!-- ... -->

<p><span class="dates">2011-2013</span> - Shopkeeper, High St Corner Shop</p>
```

Note that some people advocate never using IDs in CSS, and only sticking to classes:

- [:link: - Reasons not to use IDs in CSS](https://dev.to/clairecodes/reasons-not-to-use-ids-in-css-4ni4) (5 min read)

Let's implement the following changes to our CV:

1. Style the first paragraph of the CV differently some how
2. Change the font size and color of normal paragraphs to something more to your liking
3. Add more spacing between our list items (bullet points)
4. Experiment with using bold text and italic text somewhere in the document
5. Change the color of the hyperlinks (`<a>` tags) on the CV

You can use this guide as a references as you're working through the changes:

- [:link: - CSS basics (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics) (15 min read)

Lastly, let try using a fancier font for the headings in our CV - although we have a small range of "web-safe fonts" we can use out of the box, a library like [Google Fonts](https://fonts.google.com/) (https://fonts.google.com/) gives us hundreds more choices. Choose a heading font you like, follow the instructions to load in the Google Font stylesheet and apply it to our headings (`<h1>`, `<h2>`, `<h3>` etc.).

#### Last touches

Let's make a few last changes:

1. Make the image circular. You can do with this just with CSS! (I.e. without changing the image itself)
2. Change the color of the horizontal dividers, and add more spacing around them
3. Try adding a CSS transition to our links, so they change color with a smooth fade. Read through the article below to help you.
   - [:link: - CSS Transitions and Transforms for Beginners](https://thoughtbot.com/blog/transitions-and-transforms) (10 min read)

Lastly, open up `hobbies.html`. It should appear unstyled (as expected), however, we can easily fix this. Extract your CSS from the `<style>` tag in `cv.html` into a separate `.css` file (e.g. `styles.css`). Then connect both `cv.html` and `hobbies.html` to your stylesheet using a [link tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) - now both pages should appear nicely styled (you might need to make some finishing touches to the HTML in `hobbies.html`).

<details>
  <summary>Question: when styling your photo, is it better to use a type selector, ID selector or class selector? Why?</summary>

A type selector is probably best avoided: even though the current version of our CV might only contain a single `<img>`, but if we add subsequent `<img>` tags (e.g. some decorative icons), they'll inherit the styling of our photo - probably not what we want. This is an example of an underspecific selector. An ID selector might be a reasonable choice, but if we anticipate having more than one photo on our page with similar styling, it may be an overspecific selector. In this case, a class selector probably represents the right level of specificity.

</details>

#### Separation of concerns

If we take a look at our CV website's code right now we'll see something slightly confusing - in the top half we'll have a lot of CSS with it's distinctive syntax as well as our HTML below. If a new developer were to come and read our code it may be confusing for them to see the two next to each other.

Additionally, our HTML and CSS have very different jobs on the web. As we learnt earlier

- HTML is used to form the structure of our website
- CSS is used to style our website

It would be great if we could have these two aspect of our website separated to reduce this confusion.

This is a good example of a very common programming principle - [Separation of Concerns](https://softwareengineering.stackexchange.com/questions/32581/how-do-you-explain-separation-of-concerns-to-others). At it's highest level, what this means is that in programming we should have separate functions, classes and files for different aspects of our website. You'll learn where these dividing lines are as you go on but an easy one for now is the split between HTML and CSS.

Fortunately, we can separate our HTML and CSS into separate files. To do this, we'll want to

1. Create a new file called `style.css`
2. Extract our CSS to the css file
3. Link our HTML and CSS files using the [`<link>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)

When you've completed both steps, continue on to Project 2.

<br>
<hr>
<br>

## Project 2 (Challenge 3): Recreating Deliveroo with HTML and CSS

Next we'll take on a more ambitious challenge to test our HTML and CSS skills. Although we've already taken a brief look at flexbox (a relatively recent addition to CSS), we'll want to get more comfortable with it ahead of the next challenge. Let's play through the excellent [Flexbox Froggy](https://flexboxfroggy.com/):

<img width='400' src='https://flexboxfroggy.com/images/screenshot.png'>

- [:link: - Flexbox Froggy - A game for learning CSS flexbox](https://www.youtube.com/watch?v=5AWRivBk0Gw) (30 min)

With knowledge of flexbox in hand, we'll try and recreate a more complex interface: the restaurants directory on Deliveroo. Our goal will be to recreate the appearance (not functionality) of this screenshot as closely as possible:

![Deliveroo](https://user-images.githubusercontent.com/636814/89546910-03e10e00-d7fd-11ea-92a9-e3a63d09514e.png)

You can tackle this challenge however you'd like, but you might find this 3 stage approach useful:

1. Write all the unstyled HTML first (as we did in the CV example). Pick appropriate element to use, like `<section>`, `<article>`, heading elements, `<nav>`, `<main>`, `<img>`, `<span>` etc. You'll also need to use [form input elements](https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls) for the search bar and checkboxes.

2. Try and get the layout right, without worrying about the "polish" (colors, borders, images etc.). Focus on getting a 4 column grid of restaurants, with a top and side nav. Aim to create something like the following by the end of this step.

![wireframe](https://user-images.githubusercontent.com/636814/89549176-dfd2fc00-d7ff-11ea-9576-0e1555946c8d.png)

3. The polishing phase: now we can focus on making everything look nice. Add images (you can use `<img src='http://lorempixel.com/360/200/food/'>` if you don't feel like gathering images manually. Pay attention to box shadows, border radii, colors and other subtle touches. Load in [Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans?selection.family=IBM+Plex+Sans&sidebar.open=true) (the font Deliveroo uses). Feel free to use the Chrome DevTools on deliveroo.co.uk to grab colors, or see how particular styles are achieved.

Note that while deliveroo.co.uk can be a help during phase 3, it's probably best avoided in the first stages. It's HTML structure is very complicated, and it uses highly unreadable selectors (like `.HomeLayout-aa2a4f6ee65cb916 .HomeLayout-5cd5e9a4d3e8b39f`). This is because its content is generated by a framework, something we'll cover later in the course.

<br>
<hr>
<br>

## Project 3: Blackjack in the Browser

Now that we've covered the structural (HTML) and presentational (CSS) parts of a webpage, now let's look at adding behaviour:

Of course we're already familiar with JavaScript from previous weeks, but this time we'll be using JS to create behaviour inside the browser. Our end goal is to create a simple web interface for our blackjack program as shown below:

<p align="center"><img width='600' src='https://user-images.githubusercontent.com/636814/89522450-28c38a00-d7d9-11ea-8517-c9ce9c5c5ae2.png'></p>

<br>
<hr>
<br>

### Challenge 4: Hello Blackjack

To get started, have a look at `blackjack_starter.html` in both your browser and code editor. The starter file contains `<script>` tag, with bare-bones implementations of our `Deck`, `Card` and `Hand` classes, and a simple example of using these classes to drive behaviour in the browser. When you load the page, you should see a dialog appear with a random card:

<img src='https://user-images.githubusercontent.com/636814/89990820-d5d75000-dc7a-11ea-8499-9c597a43e8c1.png' width='300'>

Here we're using the [`alert()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) method, which is a useful way to get quick feedback for debugging purposes. A less disruptive alternative to `alert` is [`console.log`](https://developer.mozilla.org/en-US/docs/Web/API/Console/log). Try changing the `alert()` to `console.log()`, and verify that you can still see the message in Chrome DevTools.

Working inside an inline `<script>` tag is useful, but usually we to keep most of our logic in dedicated `.js` files. Move the `Deck`, `Card` and `Hand` classes into a separate `.js` file (e.g. `blackjack_oop.js`) and load this external file from `blackjack_starter.html` - once again MDN is the most authoritative [source of help](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#Basic_usage). Next, finish the implementation of `Deck`, `Card` and `Hand` based on your work from last week.

> **📝 Note**: We're still writing JavaScript, but we've actually changed **runtime**. Last week we were using [Deno](https://deno.land/), this week we're using our browser's (e.g. Chrome's) built-in runtime. These runtimes aren't exactly the same - things that are possible in one runtime may not be possible in another. For example, try adding an `alert()` call do your CLI blackjack implementation. What happens? Why is this? On the other hand, what do you think the Deno runtime can do which the browser runtime can't? (Hint: think about Deno with [all permissions](https://deno.land/manual/getting_started/permissions#permissions-list) activated).

Lastly, modify our alert message to display the number of points our random card is worth:

<img src='https://user-images.githubusercontent.com/636814/89991968-85f98880-dc7c-11ea-80c5-8000a061bcda.png' width='300'>

#### Adding a button

Next, let's add some interactivity to our page by adding a `<button>`. To make the `<button>` respond to a user, we'll leverage **events** and **event listeners**. Let's get started by watching the video below:

<img src="https://img.youtube.com/vi/ndz6iH6o1ms/0.jpg" height="200">

- [:link: - JavaScript DOM Tutorial - Events](https://www.youtube.com/watch?v=ndz6iH6o1ms) (11 min watch)

Add a `<button>` to the page, and attach an event listener (using [`document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)) for when the button is clicked to show an `alert` or `console.log` a message (`"Hello world"`) is fine. Next, remove the "random card" message when the page is loaded, and attach it the button click event instead (i.e. clicking the button should display a message like "Your random card is QH (10 points)"). Make sure the card changes every time the button is clicked.

> **💡 Key Idea:** This random card button won't be part of our final implementation, so why create it at all? Wouldn't it be better to start by, say, creating our "hit" button? Generally, when programming, we should **only change one thing at a time**, and observe the effect of that change, before moving on to a different part of our program. If we implemented the "hit" button from scratch we would be simultaneously: adding our first event listener, dynamically modifying our HTML for the first time, and adding the logic for the hit move. If our implementation didn't break, it would be hard to debug which of these three parts was the culprit.
>
> Instead, we first focus on getting our event listener working, without worrying about changing the page or thinking about the logic of "Hitting". Next, we'll look at modifying the HTML of our page. Finally, we'll add the logic for "Hitting". By taking "baby steps", we disentangle the things can go wrong and can better respond if something doesn't work.

Once you've succeeded in adding a basic event to your page, you can read about them in more detail here:

- [:link: - JavaScript building blocks > Introduction to events (MDN)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) (20 min read)

#### Modifying our page

Next, instead of limiting our output to `alert`s or `console.log`s, let's start modifying the page. JavaScript is able to change any aspect of the structure and presentation of our HTML page, by for example:

- Changing the contents of elements. For example, changing `<span>Hello</span>` to `<span>Goodbye</span>`
- Modifying attributes. For example, we could change the `"class"` attribute of an element to turn `<span class="fancy">Hello</span>` into`<span class="fancy big">Hello</span>`
- Adding elements to the page
- Removing elements from the page

To modify HTML with JavaScript, we manipulate **Document Object Model (DOM)**, which is a way of representing our HTML page that's convenient to work with in JavaScript. We've already encountered the DOM when we set up event listeners, but let's deepen our understanding with the article or video below (or both!):

<img src="https://img.youtube.com/vi/wiozYyXQEVk/0.jpg" height="200">

- [:link: - Javascript Dom Manipulation | Javascript Tutorial For Beginners](https://www.youtube.com/watch?v=wiozYyXQEVk) (17 min watch)
- [:link: - Introduction to the DOM (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) (15 min read)

Let's get started with making our own manipulations to the DOM! Make an empty `<p>` tag to your page with an ID:

```html
<p id="random-card"></p>
```

Now inside your `<button>`'s event listener, use `document.querySelector` and [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML), to instead display the random card message inside the `<p>` tag. Clicking the button again should overwrite the message.

There are multiple ways to change the contents of an element. Instead of using `.innerHTML`, try using [`.innerText`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText), [`.textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) and [`.outerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML). What are the key differences you observe with the different methods?

Next, let's add elements to the page. Change the `<p>` to a `<ul>` and modify the `<button>`'s `click` listener so that each card drawn appends an `<li>`:

![](https://user-images.githubusercontent.com/636814/89999875-53a15880-dc87-11ea-975e-47f2d223bf3d.gif)

[`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) or [`insertAdjacentHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) will come in handy. You'll also want to use [`createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) to create the `<li>` before appending it.

Next, let's try removing elements (see [`.remove()`](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove), [`.removeChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)). We'll limit our `<ul>` of cards to 5 elements; remove the first card in the "pile" each time we draw, once we have 5 cards:

![](https://user-images.githubusercontent.com/636814/90000457-18ebf000-dc88-11ea-81ab-ea215e65ae1c.gif)

Lastly, let's try an example of manipulating attributes. If we draw an ace, display that `<li>` in red. There are a few ways to accomplish this. Try both:

1. [Setting the inline style](https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style) of the element
2. Using [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) to add a CSS class to the `<li>`. (You should add a corresponding CSS class to your stylesheet too).

#### Separation of concerns - again

As before, we are running into an issue of separation of concerns. Currently, all of our HTML, CSS and JavaScript are located within the same file. This is _fine_ for now but as our website grows this will become hard to read and comprehend.

> Remember: we're only ever going to write our code once but we will read it many times so we should optimise our code so that it's easy to read and edit.

This time we'll want to

1. Create a `style.css` file, extract our CSS to it and link it to our HTML as before
2. Create a `script.js` file, extract our JavaScript to it and include it in our HTML using a [`<script>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

When you've completed this step, your website should work the same as before except now we have an in improved separation of concerns.

<br>
<hr>
<br>

### Challenge 5: Full blackjack implementation

<p align="center"><img width='600' src='https://user-images.githubusercontent.com/636814/89522450-28c38a00-d7d9-11ea-8517-c9ce9c5c5ae2.png'></p>

We now have all the parts in place to complete our in-browser blackjack implementation! Here's what it should include:

- Cards should be displayed as `<img>` elements. You can get a picture of a card dynamically using `https://deckofcardsapi.com/static/img/??.png` where `??` is the uppercased card identifier (e.g. `4H` or `QC`).
- When the page is loaded, players should see two card images representing their initial hands
- Players have the option to hit or stick as normal
- Underneath the hand, display a message showing whose turn it is, and the current point total of the hand.
- If the point total is less than or equal to 21, display it in green. Otherwise, display it in red.
- If the player busts, display a message underneath the Hit/Stick buttons indicating that they lost
- Otherwise, once the player's turn is over, the dealer's hand should appear underneath the Hit/Stick buttons
- Once the dealer's turn is over, display a message announcing the winner
- Cards in a hand should appear side-by-side, but feel free to "wrap" onto two rows for very large hands (e.g. more than 5 cards). Flexbox will help with this.

#### Tips

- As discussed above, take "baby steps". Test the logic of your blackjack OOP implementation with simple `console.log` statements first, before manipulating the DOM
- A human takes time to consider its moves, whereas the computer dealer will decide its moves (hitting or sticking) in milliseconds. This can be a bit disorienting to a user, so try slowing down the dealer's behaviour using [`setTimeout`](https://javascript.info/settimeout-setinterval).

#### Above and beyond

With three challenges this week, you probably will have less time at the end of this week. Use any extra time available to play around more with manipulating the DOM in your blackjack game. Some ideas you could try implementing:

- Add a (face down) deck to the page. When "hitting", implement an animation (using CSS transitions/animations) of the card coming from the deck into your hand.
- Add an "undo" button which undoes the last move a player made.
- Use the [`keydown`](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event) event to enable players to hit or stick using the <kbd>H</kbd> and <kbd>S</kbd> keys instead of pressing the onscreen buttons.
- Prevent the player from making hasty decisions by implementing a cooldown period: immediately after hitting, the hit button is disabled for 5 seconds.
- Use the player's [bust probability](https://www.blackjack.org/wp-content/uploads/2019/01/A-Players-Probability-to-Bust-on-the-Next-Card-Drawn.png) to display on-screen suggestions to the player as to what action they should take.
- If the player wins, add a [Tweet button](https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview) to the page so they can share their victory with the world.

## Glossary

- **Attribute** - An attribute extends an element, changing its behaviour or providing metadata. An attribute has the form `name="value"`. For example in `<img src="apple.png" width="300">` we have two attributes (`src` and `width`, with the values `apple.png` and `300` respectively).
- **Cascading** - The process of combining several style sheets and resolving conflicts between them. Conflicts are primarily resolved by always choosing the most **specific** selector.
- **Chrome DevTools** - Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser. DevTools can help you edit pages on-the-fly and diagnose problems quickly.
- **Class selector** - A CSS class selector `.classname` targets all elements whose `class` attributes include `classname`. For example the rule `.camouflage { color: green }` would make both the elements `<span class='camouflage>` and `<h1 class='title camouflage'>` green.
- **CSS (Cascading Style Sheets)** - CSS is a language used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.
- **CSS rule** - A CSS rule is made up of a selector, followed by one or more pairs of CSS properties and values.
- **CSS property** - A CSS property is a characteristic (like color) whose associated value defines one aspect of how the browser should display the element.
- **CSS selector** - A CSS selector is the part of a CSS rule that describes what elements in a document the rule will match. The matching elements will have the rule's specified style applied to them.
- **CSS value** - The value is what the chosen CSS property will be changed to. For example in `color: #000`, `#000` is the value we assign to the color property.
- **DOM (Document Object Model)** - The DOM is an object-based representation of the source of a HTML document. We manipulate the DOM to change the structure of a HTML page using JavaScript.
- **Element** - An HTML element is an individual component of an HTML document. Most HTML elements are written with a start tag (or opening tag) and an end tag (or closing tag), with content in between.
- **Events** - Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired. Common events in a web context include page loads, clicks, key presses or form submissions.
- **Event listeners** - An event listener is a procedure or function in a computer program that waits for an **event** to occur, and responds accordingly.
- **Flexbox** - Flexbox is a new layout mode in CSS3. Flexbox tries to create the best possible layout for our items, giving bigger items more space and smaller items less space, thus preserving readability of content.
- **HTML (Hypertext Markup Language)** - HTML is the standard markup language for documents designed to be displayed in a web browser.
- **ID selector** - In CSS, an ID selector targets a single element based on its unique `id` attribute.
- **Specificity** - Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.
- **Type selector** - In CSS, a type selector targets all elements of a given type. For example, the rule `p { color: red }` would make all `<p>` elements red by default (this could be overridden by a more specific selector).
- **Web font** - Web fonts are a CSS feature that allows you to specify font files to be downloaded along with your website as it is accessed, allowing you to effectively embed custom fonts in your HTML pages.
- Abstract class - An abstract is a class which cannot be instantiated, meaning you cannot create new instances of an abstract class. The purpose of an abstract class is to be a base for subclasses.
- Class - A class is a blueprint that defines a nature of a future object. Classes define properties and methods for these future objects.
- Constructor - The constructor method is a special method of a class for creating and initializing an object of that class.
- Don't Repeat Yourself (DRY) - A mantra that says we should avoid having the same piece of code copy-pasted in a lot of different places when working on a particular codebase.
- Error/Exception - An error or exception is an event, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions.
- Getter - A method that is called when a property is read.
- Inheritance - Inheritance is a mechanism in which one class (the child class or subclass) acquires the properties and methods of another class (the parent class or superclass).
- Instance - An instance is the concrete occurrence of a class. For example, if the `Card` class is the blueprint for any playing card, then the Ace of Spades is a instance of `Card` (it's a concrete example of a playing card).
- Instantiate - Instantiation is the process of taking a class definition and creating an object that you can use in a program.
- Methods - A method is a programmed procedure that is defined as part of a class and included in any object of that class.
- Object-oriented programming (OOP) - Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data, in the form of properties, and code, in the form of methods.
- Polymorphism - Polymorphism describes a pattern in object oriented programming in which classes have different functionality while sharing a common interface.
- Properties - A property is a characteristic of an object, often describing attributes associated with what it's modelling in the real world.
- Refactoring - The process of changing code in such a way that it does not alter the external behaviour of the code yet improves its internal structure.
- Setter - A method that is called when a property is written.
- Subclass - The class that inherits from another class.
- Superclass - The class being inherited from.
- Test driven development (TDD) - an evolutionary approach to software development which combines test-first development where you write a test before you write just enough production code to fulfil that test and refactoring.
- Validation - Validation is an automatic computer check to ensure that the data entered is sensible and reasonable.
- Array - An ordered collection/list of items.
- Command line interface (CLI) - A text-based interface that is used to operate software.
- Loop - A loop is a sequence of instructions that is continually repeated until a certain condition is reached.
- JavaScript - JavaScript is a programming language commonly used in web development.
- Pseudo-randomness - Behaviour that, although produced by a completely deterministic and repeatable process, is seemingly unpredictable and appears have no pattern.
- Runtime - A runtime system that provides an environment in which programs run. Runtime systems are the bridge between the code you write and your machine's operating system.
- Seed - A special number used to reproduce the data given by a pseudorandom number generator.
- Switch statement - A switch statement checks the value of a variable and compares it with multiple cases. Once the case match is found, a block of statements associated with that particular case is executed.
- Testing - Checking by means of actual execution whether a program behaves in the desired manner.
- Array - An ordered collection/list of items.
- Command line/Command line interface (CLI) - A text-based interface that is used to operate software.
- Conditional - A conditional statement tells a program to execute different actions depending on whether a condition is true or false. For example: "if the account balance is less than 0, freeze the account" is an example of a conditional statement.
- Floating point number/float - A number with a decimal point.
- Function - A named section of a program that performs a specific task.
- Git - The most popular version control system.
- Github - A popular platform for hosting Git repositories.
- Integer - A whole number.
- JavaScript - JavaScript is a programming language commonly used in web development.
- Object - JavaScript's Object data type associates names (or keys) with values. For example, the object `{ 'Johnson': '+440773141214', 'Lewis': '+4141915901' }` associates surnames and telephone numbers.
- Pipes - A pipe is a technique for passing information from one program process to another. For example the command `ls -1 | wc -l` passes the result of `ls` program to the `wc` program to count the number of files in the current directory.
- Program/script - A program is a set of instructions that a computer follows in order to perform a particular task. For a language like JavaScript, Python, and Ruby which can execute programs from just the source code, a "script" is the same as a "program".
- Repository/repo - A (Git) repository tracks all the files and changes for a single project.
- Unix - The operating system that forms the basis of Linux and macOS (but not Windows). Most web servers run on Unix environments, so Unix environments are usually preferred to Windows by web developers.
- Version control - Version control is a system that records changes to a file or set of files over time. By carefully recording changes, version control systems let you undo mistakes, compare versions of a program, and work on a codebase in a team without your changes overriding those of your colleagues.
