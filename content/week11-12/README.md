# Projects II: Group

## Contents

- [Projects II: Group](#projects-ii-group)
  - [Contents](#contents)
  - [Timetable](#timetable)
  - [Previous Sessions](#previous-sessions)
  - [Development workflow](#development-workflow)
    - [Agile process](#agile-process)
    - [Git](#git)
    - [Kanban](#kanban)
    - [Testing & QA](#testing--qa)

## Timetable

| Time                            | Focus                                                                                                    |
| ------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Monday (week 1) - Tues (week 2) | Implementing the project                                                                                 |
| Wednesday (week 2)              | Feature freeze (this should be the last day you work on adding features)                                 |
| Thurs & Fri morning (week 2)    | Testing and QA, and final polish                                                                         |
| Friday afternoon                | Present your project to the rest of the class, with a short (10 minute) demo followed by an informal Q&A |

## Previous Sessions

You can find the previous recorded sessions of this week here on Rewatch

- [Cohort 1 Workshops](https://sigmalabs.rewatch.com/collection/1148/week-11-12-final-project)

## Intro to Final Projects

For this fortnight, you'll be working on a project of your choice. There are two key goals for this final project:

- To give you experience of building a non-trivial project from start to finish
- To reinforce best practices when working within a team of developers

You'll be working in teams of about 4, your coaches will help you with team formation. You're free to choose any programming project you'd like to attempt: it could be a social network, a game, an online store, a data science exploration. Although the project is deliberately open-ended, use the guidelines below to steer you:

- Try to keep to scope of your project as focused as possible, 2 weeks will go by quicker than you expect! Aim for an **MVP**: a minimum viable product. Rather than having every bell & whistle, your project should have the minimum number of features to demonstrate your idea. Fewer features done well always creates a better end result than many half-baked features.
- So far we've written code in JavaScript and (to a lesser extent) Python. You should stick to these languages if possible - otherwise a large chunk of your time will be spent getting to grips with the new language.
  - On the other hand, feel free to use, for example, a different JavaScript runtime. For example, projects can freely use Node rather than Deno.
- You're welcome to use any libraries you'd like to speed up the development of your project. For example, if you were building a game, you could create it using the [PixiJS engine](https://github.com/pixijs/pixi.js).
- Don't forget that you'll need to be able to split up the work among the team. Since you can code in pairs (pair programming), you'll need to be able to have a minimum of 2 workstreams running in parallel at any time.

## Development workflow

The project isn't just about producing a good end result, it's also about practicing working in a team environment on a real-world project.

### Agile process

We recommend you adhere to an agile/lean process when developing your project. You should focus on **continuous delivery** and **incremental changes**, as opposed to working on large features based on an elaborate upfront plan. For example, imagine I'm working on a football betting site. The upfront development plan to spend the 10 working days of development is:

1. A beautiful landing page, explaining the concept of the site, with animations, embedded videos and testimonials (3 days)
2. Account registration, login, forgot password functionality, profile customization (upload avatars etc.), invite your friends feature (2 days)
3. List and search upcoming football games across the Premier League, the EFL, and European leagues (2 days)
4. Add the ability to place bets, including accumulator bets (3 days) and receive payouts

Imagine, that in reality, each of the first 3 feature takes just 1 day longer than expected. Suddenly, we've run out of time and have been left with a betting site where we can't place bets. Oops! We've sacrificed the most important functionality of our product for some "nice to have" features (a fancy landing page, profile customizations) etc.

A better approach would be to implement the _entire end-to-end user journey_ as quickly as possible (registration, finding a match, placing a bet, getting paid) even in a very simple state. For example, we might on our first pass only focus on Premier League matches for simplicity. We can always add support for other leagues later if we have time.

The other key principle of agile development is active and regular communication within the team. We recommend starting every morning with a **standup meeting**. A standup meeting is so called because traditionally participate stand during the meeting - because it's designed to be a short and sharp meeting! Each team member should relay:

- What did I work on yesterday?
- What will I work on today?
- Am I facing any obstacles or blockers?

It's also worthwhile to hold slightly longer **retrospective** meetings, say, after every 3 days of development. This is a chance to look back at the project's progress, with a focus on 3 key questions:

- What went well?
- What didn't go well?
- What can be improved going forward? (This should ideally be accompanied by specific action points)

### Git

You'll also want to ensure you're using Git properly during the final project, as it will help you consolidate the changes made by individual team members. Make sure that:

- For each feature, you should create a new branch. Avoiding, push commits directly to `master`.
  - "Features" should be kept as small as possible. Aim for 100 lines of code, rather than thousnads.
- You should commit regularly, with clear, descriptive commit messages.
- Ideally, rather than merging right away, create a Pull Request and get a team member to review your code.
- Be careful when dealing with [merge conflicts](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line).

![](https://miro.medium.com/max/1400/1*iB8lNrITmLvKeL8mnp3qAA.png)

### Kanban

![](https://www.integrify.com/site/assets/files/2473/kanban-project-management.png)

At the beginning of the project, you should come up with a list of features you want to implement. This doesn't have to be exhaustive - if you run out of features to work on, you can always add more (in line with the agile approach you're taking). There are many ways to manage your project, but one of the simplest systems is a **Kanban board**.

Often Kanban boards are simply implemented with post-its and a whiteboard. The whiteboard is divided into 3 sections: "To do", "In progress" and "Done". (You can add more columns, if you'd like, such as "In testing"). Whoever is working on a feature moves it between the different stages on the whiteboard. Once a feature is completed, that dev picks another feature to work on.

Rather than using a physical Kanban board, you can use a tool like [Trello](https://trello.com). Kanban systems can be extended in various ways (e.g. by adding prioritization scores, or size estimates for features). However, we'd recommend keeping this simple in the first instance.

### Testing & QA

As mentioned, it's better to deliver a polished project which does less rather than an ambitious one that's plagued by bugs and crashes! With this in mind, testing and **quality assurance** (QA) are very important.

You should write automated tests where possible, using tools like `assert` (if you're using Deno), or libraries like [Jest](https://jestjs.io/) if you're using Node. You should also manually test each feature, and ensure you've thought about edge cases, empty states and data validation.

As well as testing as you're going along, we'd recommend implementing a **feature freeze** at least 48 hours before the end of the fortnight. Rather than using last 2 days to add new features, you should focus on adding polishing and squashing any lingering bugs.
