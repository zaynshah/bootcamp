# Event Listeners

> **We've taught this before!**
>
> See a previous version of this class [here](https://sigmalabs.rewatch.com/video/8260/events-listeners-javascript-coding-workshop-may-12-2021/)

## Learning Objectives

By the end of this session, an attendee should be able to

- Attach an event listener to a given element for a particular event type
- Use event metadata (such as `target`) to create more sophisticated behaviour
- Understand event bubbling and how to prevent it if desired
- Override the default behaviour of elements with `preventDefault`

## Prework

### 1. Watch

https://www.youtube.com/watch?v=YiOlaiscqDY

Make a note of any questions you have! We can answer them in the session.

### 2. Collaborate

Get into groups of 3/4 and explore the following websites: [MCU Who's Who Interactive Data Map](https://graphics.straitstimes.com/STI/STIMEDIA/Interactives/2018/04/marvel-cinematic-universe-whos-who-interactive/index.html) and [Species in Pieces](http://species-in-pieces.com/#)

1. Make a list of all of the different ways you can interact with them
2. Adding the above list, note down what happens when these interactions happen

### 3. Create

Using CodePen, take a simple example of an interaction from the list that you created in a group. Try to recreate it.
Don't focus so much on how your example looks - focus more on the behaviour.

Share your example in a thread in the Slack workspace - have a look at what other examples people have created.


## Workshop
In our workshop we'll be covering:
- Event bubbling
- Event capturing
- stopPropagation()
- preventDefault()

### Live Code
The live code will be coding a form, and on pressing the submit button we will display the submitted form information on our page.

<img width="240" alt="Screenshot 2021-09-08 at 09 38 31" src="https://user-images.githubusercontent.com/86953663/132476031-a344cda7-650e-4130-a8a7-f0b7a70d5d4e.png">

### Pair Programming
Using this [framework](https://codepen.io/SonaliSL/pen/ZEyOEOj), work in pairs to complete the following:

Using the event listeners create a div next to your email field. When you hover over it, the div will display the following requirements if the following conditions aren't met:

It must have a ‘@’ character
It can be no longer than 40 characters
It must contain .com or .co.uk

An example of this is shown below:

<img width="276" alt="event listeners screenshot" src="https://user-images.githubusercontent.com/86953663/132476484-227bf64a-d95b-4c94-8d8f-7a54ae5b0e27.png">
![event listeners screenshot 2](https://user-images.githubusercontent.com/86953663/132476872-07157ec8-38a5-43d7-8a90-b55edd5883f2.png)


