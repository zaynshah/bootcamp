# DOM Manipulation

> **We've taught this before!**
>
> See a previous version of this class [here](https://sigmalabs.rewatch.com/video/8275/manipulating-the-dom-with-javascript-optional-coding-workshop-may-12-2021/)

## Learning Objectives

By the end of this session, an attendee should be able to

- Append elements to the DOM
- Remove elements from the DOM
- Clean up event listeners from removed elements
- Handle events for dynamically added elements using [event delegation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation)
- Add and remove CSS classes with the [`classList` API](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

## Prework

### Research

**Setup:** If nobody has done so already, create a thread on Slack titled "DOM Research". You'll be sharing your work in here.

Write 50-100 words describing what the DOM is and how the browser uses it to render HTML and CSS to the browser window. You should share your work in the above thread when you have written them.

### Watch

https://www.youtube.com/watch?v=eaLKqoB9Fu0&list=PLWKjhJtqVAbllLK6r2dnGjUVWB_cFNcuO

### Create

Create a disco button in CodePen/JSFiddle that changes the colour of the button every time you click it.

![WEEK 3 PRE WORK 4 GIF](https://user-images.githubusercontent.com/86953663/131123682-7a0bf5a6-9ae4-466c-98ff-5b140a18392c.gif)

Once you've completed that - change the title colour as well as the button colour, making sure that they are the same. This should look something like:

![week 3 pre work 2](https://user-images.githubusercontent.com/86953663/131124454-29c99b84-7986-43eb-827a-8c1b07b365f7.gif)

💡 Here's a random colour generator to use.

`` function generateRandomColor() { return `#${Math.floor(Math.random()*16777215).toString(16)}`; } // example output: '#FF7F50' ``

CSS accepts different color values, such as hexadecimal, RGB/RGBA, HSL/HSLA as well as [built in colour values](https://www.w3schools.com/cssref/css_colors.asp). The above generator creates a random numeric value and then converts it to a string using a base 16 format (0-9 and A-F) to create the combination of hexadecimal values.

The formats for other color options would be:

- Hexadecimal: `#FF7F50`
- Hexadecimal with alpha values: ` #0080FF80`, where alpha represents the transparency
- RGB: `rgb(0,0,0)` RGB is short for red, green, blue
- RGBA: `rgba(0,0,0,0)` where alpha is the fourth value
- HSL: `hsl(0, 100%, 100%)` HSL is short for hue, saturation, lightness
- HSLA: `hsla(0, 100%, 100%, 1)` where alpha is the fourth value

## Workshop

### Live Code

Using a tool like [Excalidraw](https://excalidraw.com/), graph out a simple DOM Tree like [this example](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/cssom-tree.png).

Spend some time explaining how the DOM works in detail.

### Live Code

Inside `04_dom_manipulation.js` you will find an example of a really long array with lots of data in it. Extract the data from the array and display it in the browser using DOM manipulation.

Be sure to cover all of the learning objectives with plenty of time for questions.
