# Python basics

> **We've taught this before!**
>
> See a previous version of this class [here](https://sigmalabs.rewatch.com/video/8826/python-basics-optional-coding-workshop-may-25-2021/)

## Learning Objectives

By the end of this session, an attendee should be able to

- Define regular functions and classes in Python
- Use `lambda` to define functions in-line
- Know how to use positional and keyword arguments
- Understand the lazy behavior of methods like `map`, `filter` and `reduce` and how to retrieve the values from these operations
- Create and manipulate dictionaries
- Use the slice syntax to extract list elements

## Pre-work

### 1. Python crash course (30 mins)

**Setup:** If nobody has done so already, create a thread on Slack titled "Python basics Research". You'll be sharing useful links in there.

Go through the start of the tutorial [Learn Python in Y Minutes](https://learnxinyminutes.com/docs/python/). Stop when you get to `6.1 Inheritance`.

## Workshop Details

### Challenge (30 mins)

Launch a Python REPL, ideally using [`ptpython`](https://github.com/prompt-toolkit/ptpython). Jump into some live coding showing some of the basic operations in Python (especially anything students found confusing from the Learn X in Y minutes walkthrough).

You should call out:

- Features that don't exist in JavaScript, such as:
  - List comprehensions
  - Dictionary comprehensions
  - Tuples
  - f-strings
  - The slice syntax
- How to declare functions & classes in Python. (You could reuse the `Dog` example from earlier in the course)
- How inheritance work in Python
- How to handle errors in Python

Be sure to leave time for questions and experimentation.

### Exercise

Here are three short exercises featuring List Comprehensions for the students to predict the outcome of

```python
authors = ["Ernest Hemingway","Langston Hughes","Frank Herbert","Toni Morrison", "Emily Dickson","Stephen King"]

letters = [ name[0] for name in authors if name[1] == "r" ]
print(letters)
```

```python
authors = ["Ernest Hemingway","Langston Hughes","Frank Herbert","Toni Morrison", "Emily Dickson","Stephen King"]

letters = [ name[3:] for name in authors if name[0] > "F" ]
print(letters)
```

```python
authors = ["Ernest Hemingway","Langston Hughes","Frank Herbert","Toni Morrison", "Emily Dickson","Stephen King"]

def func(name):
    return name[0:1].lower() + name[1:]

letters = [ func(name)for name in authors if name[0:2] == "La" ]
print(letters)
```
