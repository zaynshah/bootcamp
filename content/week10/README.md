# Projects I: Full Stack Group Project <!-- omit in toc -->

Over the past nine weeks you've been learning how to build servers, create React apps and tie them together by using API requests. It's finally time to build a project that brings together everything you've learnt so far

## Contents <!-- omit in toc -->

- [Learning Objectives](#learning-objectives)
- [Roles](#roles)
- [World Bank Dashboard Project](#world-bank-dashboard-project)
  - [Background](#background)
  - [Data](#data)
  - [User Stories](#user-stories)
  - [Screen Overview](#screen-overview)
    - [Create Account / Login Screen](#create-account--login-screen)
    - [Search Screen](#search-screen)
    - [Results Screen](#results-screen)
    - [Admin Screen](#admin-screen)
    - [History Screen](#history-screen)
  - [Wireframes](#wireframes)
  - [Stretch Goals](#stretch-goals)
  - [Testing & Security](#testing--security)
  - [Out of Scope](#out-of-scope)
  - [Design](#design)
- [Deployment](#deployment)

## Learning Objectives

By the end of this week a learner will be able to

- Work in a team to build a full stack applications
- List the roles and functions of a Project Manager, a QA Tester and Architect & DevOps
- Open a pull request, receive feedback on their code and implement that feedback
- Give useful, actionable feedback on a team members pull request
- Convert user stories into actionable tickets
- Convert actionable tickets into production-ready features
- Compare and contrast different workflows (e.g. waterfall, agile)
- Run and be a member of an Agile team including
  - Understanding the aims of and taking part in a Stand-Up
  - Understanding the aims of and taking part in a Retrospective
  - Understanding the aims of and taking part in a Planning Session

## Timetable <!-- omit in toc -->

| Time                | Focus                                                                                |
| ------------------- | ------------------------------------------------------------------------------------ |
| Monday morning      | Assign Teams, Assign roles, Learn about the Project, Setup project management boards |
| Monday afternoon    | Setup Projects, Assigns initial tasks, start coding                                  |
| Tuesday morning     | Stand-up, planning, coding                                                           |
| Tuesday afternoon   | Coding, Wrap Up                                                                      |
| Wednesday morning   | Stand-up, planning, coding                                                           |
| Wednesday afternoon | Continue coding, Wrap Up                                                             |
| Thursday morning    | Stand-up, planning, coding                                                           |
| Thursday afternoon  | Continue coding, Wrap Up                                                             |
| Friday morning      | Stand-up, stop working on feature and focus on quality and bugs                      |
| Friday afternoon    | Final touches of the project, Retrospective                                          |

## Roles

In this project _everyone_ will be playing the role of an [Engineer](./roles/engineer.md) but you will also have a secondary role as either a

- [Project Manager](./roles/project_manager.md) or
- [QA Tester](./roles/quality_assurance.md) or
- [Architect & Dev Ops](./roles/architect.md)

## World Bank Dashboard Project

### Background

Congratulations! Your company has just landed a massive contract with the World Bank to develop their Analytics Dashboard.

Your Team has been tasked with building a prototype for the World Bank so that it can then be iterated on in the future. You've been given a week to complete as much of the prototype as possible.

At the highest level this project will consist of

1. A login system to allow users access to the website
2. Search functionality to research data points about countries
3. History functionality to view searches that have been made in the past

### Data

The World Bank have given your team access to all of their data here

https://www.kaggle.com/kaggle/world-development-indicators

This database contains 5,656,458 rows of data listing everything the world bank knows about every country in the world.

### User Stories

Below you will find a selection of User Stories as well as a code associated with each story (e.g. B2)

As a user I want to be able to

- **A1**: Create an account so I can get access to the World Bank data
- **A2**: Login with my account after I have created it so I can get access to the World Bank data
- **A3**: Search for a specific Country and see all of the Indicators for that country, presented as graphs, for all the years available
- **A4**: Search for a specific Country and a specific Indicator to view only a single indicator at a time, for all the years available
- **A5**: Search for a specific Country and a specific Indicator and a specific year to find the value of that indicator at that time
- **A6**: Select two countries and a specific Indicator to compare that Indicator over time (presented as a graph)
- **A7**: Select two countries and a specific Indicator, and a specific year to compare that Indicator for that year
- **A8**: Search for any Indicator or Country for the above requirements and have the results be auto-completed in the search box
- **A9**: View all of my previous searches so I can remember what I've searched in the past and find when I made the searches
- **A10**: Click on one of my previous searches to be taken to that search again
- **A11**: Stay logged in after the first time that I login until I logout

As an admin I want to be able to

- **B1**: Login with special credentials (username: admin, password: admin) to access a special area of the app
- **B2**: See all of the recent searches that have been used, when they were made and which users made them
- **B3**: Click on a specific recent search to view the results for that search

As a developer I want to be able to

- **C1**: Run unit tests on the frontend and backend to confirm it is working correctly so I have confidence in the code I am writing
- **C2**: Have my code be deployed automatically when I commit so that I can save my precious time

### Screen Overview

#### Create Account / Login Screen

_User Stories: A1, A2, B1_

This screen will contain a simple create account and login form.

#### Search Screen

_User Stories: A3, A4, A5, A6, A7, A8_

This screen will feature a simple UI that makes it easy to search for Countries, Indicators and Years which will then be used to filter the huge dataset. When the user clicks search they will be taken to the "Results" page to see the results of their search.

#### Results Screen

_User Stories: A3, A4, A5, A6_

This complex screen will show the results from the query made on the screen previously

#### Admin Screen

_User Stories: B2, B3_

This screen should only be accessed by the Admin. It will show all of the searches made on the service

#### History Screen

_User Stories: A9, A10_

This screen will display a list of all of the past searches and allow users to navigate to them.

### Wireframes

These wireframes are included as a guide to the above functionality. You should change and edit them as you wish and as we understand the requirements of the project better

https://excalidraw.com/#json=6014172076703744,tJUV9yWnojcH8mvBMwAZZw

![Wireframes](./assets/wireframes.png)

### Stretch Goals

- **X1**: On the Search Screen, we should be able to see the most recent searches made by any user
- **X2**: In addition to being able to select two countries for A6, I want to be able to view any number of countries
- **X3**: Allow users to enter information free text to search for data e.g. (Foreign direct investment in the Arab World in 1991)
- **X4**: Combine the World Bank data with another API to get other interesting information about the country (e.g. to get a picture of it's flag)

### Testing & Security

The World Bank wants to see that the project is tested but keep in mind that this a prototype - we're not aiming to having every single part of the application and server covered by unit tests. Let's focus on getting the most critical paths covered by unit tests but not much more.

As for security, this is not a high priority for this project. For this reason, we should never manage personal information (e.g. email, names, date of birth) and only ever use anonymous information (e.g. usernames). All of the data we're working with is public so their is no security concern there.

### Out of Scope

The following areas are out of scope for this project. They should **not** be worked on.

- "Forgot My Password" functionality. If a user forgets their password, they are logged out for ever.

### Design

Since we don't have a lot of time for this project, we suggest you use a UI framework for your Frontend.

- [Bootstrap](https://getbootstrap.com)
- [Material-UI](https://next.material-ui.com)

These frameworks take care of a lot of the CSS work that you'll need to do and since this project won't need much bespoke design work this will save us a lot of time.

You are also welcome to use any other UI Framework as you wish.

## Deployment

To round off your project we'll be working out how to deploy it so that it's running on the internet.

You can find full instructions for this step in the [Deployment](./DEPLOYMENT.md) doc.
