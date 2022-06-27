# Git Flows and Pull Requests

## Learning Objectives

By the end of this session, students should be able to

- Describe the difference between Git Flow and Github Flow
- List the different types of branches in Gitflow
- Use VSCode to resolve Git conflicts
- Open a pull request from Github
- Merge a pull request from Github
- Comment on a pull request from Github

## Workshop

### Lecture

Spend some time explaining the Github Flow.

Crucially, Github Flow only has two branch types

- Main
- Feature (inc. Bug Fix)

You may choose to use this resources to help you:
https://guides.github.com/introduction/flow/

Draw a diagram or demonstrate how this would work

### Lecture

Spend some time explaining the Git Flow.

Crucially, Git Flow has lots of branch types

- Main (or productions)
- Develop
- Feature
- Bug Fix

Draw a diagram or demonstrate how this would work

### Discussion

In small teams, discuss examples of when you think that Git Flow may be preferable. What about times when Github Flow might be better? What are the benefits of one over the other.

After some time, come back together to discuss the results of the discussion.

Some ideas are

- Git Flow is better when your `main` branch must always be working
  - e.g. you need to release at any time
- Git Flow lets you quickly fix issues on a branch that you know isn't changing

- Github Flow is better when you want to release very quickly
  - e.g. continuous deployment

### Live Code

Demonstrate Github Flow in action with the following steps

1. Making a branch
2. Switching to that branch
3. Making a change
4. Committing a change
5. Pushing a change
6. Opening a Pull Request on Github
7. Leaving a comment on that PR
8. Merging the PR
9. Going back to your local repo, moving to `main` and seeing that the change has happened

### Live Code

Demonstrate Github Flow in action - however simulate a change on the main branch by making a change on Github whilst you are working on another branch.

When you open a Pull Request it will show a conflict on branch blocking you from merging it.

Next, show how you can marge the `main` branch into your own and then resolve any of the conflicts found.

This will then allow you to

### Pop Quiz

1. What are the different types of branches in Git Flow
2. What are the different types of branches in Github Flow
3. When is Github flow preferable to Git Flow
4. Why do conflicts occur?
5. What does it mean to "Accept Incoming Changes"
