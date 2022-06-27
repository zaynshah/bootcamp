# Events in React

## Learning Objectives

- Use `onclick` to pass a function that is called when a button is clicked
- Use `onkeypressed` to pass a function that is called when a key is pressed
- Use state to manage the event handlers for elements
- Pass a function as a prop to a React component to act as a callback
- Conditionally show a React component based on the state of a component

## Pre-work

### Watch

Watch this video
https://www.youtube.com/watch?v=OcM__8q6p4c

### Read

Read the following docs pages:
https://reactjs.org/docs/handling-events.html
https://reactjs.org/docs/conditional-rendering.html

And ask two questions on the Google doc: https://docs.google.com/document/d/1WyAmLQWJ222uAYuQekMQ-go2y_9jyh0dj-V3ihy_g84/edit?usp=sharing

Now answer two questions that have already been asked (not a question written by you!)

### Workshop

Here’s a skeleton app for Twitter: [ReactTwitter-main.zip](https://github.com/Sigma-Labs-XYZ/curriculum/files/7122697/ReactTwitter-main.zip)

Download it and have a look through the components - during the live coding session we’ll be completing three tasks:

- Writing a new tweet and storing it
- Displaying all stored tweets on our UI
- Updating our details through the edit details form to match our profile and tweets

File Structure:

- `/components` contains all of the individual components making up the app (the Profile, edit profile and tweets section)
- `App.js` contains the main structure of the page where the components are rendered
- `defaultUser.js` contains the dummy data to populate the page at first, as well as another helper Object to populate the Edit Profile form.
