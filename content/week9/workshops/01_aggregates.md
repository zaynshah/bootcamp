# Aggregate & Sub-queries & Views Queries

## Learning Objectives

- Use aggregate SQL queries (SUM, AVG, MIN, MAX...) to summarise information about a group of rules
- Combine aggregate SQL queries with the `WHERE` keyword to calculate result based on sub-sets of data
- Use sub-queries to create complex SQL queries with multiple `SELECTs`
- Create views using the `CREATE VIEW` SQL keyword
- Write an SQL query that targets a View

## Pre-work

### Setup

If it hasn't been created, create a thread in the #workshops channel called 'Week 9: Aggregrates Pre-work'

### Research

Research Views and SQL aggregation and answer the following questions.

1. What is a view? Define one in < 50 words.
2. Define what SQL aggregation is in < 50 words.
3. When would you need to use a view?
4. What are the benefits of using views?

Breakdown the following problem, where there are four tables with the following structure:

Table 1: Teachers
| Teacher |
|----------------|
| TeacherID |
| FirstName |
| LastName |
| ClassesTaught |

---

Table 2: Classes
| Class |
|----------------|
| ClassID |
| SubjectID |
| TeacherID |
| ClassroomID |

---

Table 3: Students
| Student |
|-------------|
| StudentID |
| FirstName |
| LastName |
| YearGroup |
| DateOfBirth |

---

Table 4: The classes that students take
| Student_Classes |
|-----------------|
| StudentID |
| ClassID |
| Grade |

---

- I only want to select academic staff who teach Subjects X and Subjects Y
- I also want to calculate the average grade for the classes that they teach

Using your current SQL knowledge, spend 5 minutes writing a query to solve this.

- Did you find any limitations?
- Is there anything that would have helped?

Share your answers in the above thread.

### Exercise

If you haven't already complete these three SQLBolt examples

- https://sqlbolt.com/lesson/select_queries_with_aggregates
- https://sqlbolt.com/lesson/select_queries_with_aggregates_pt_2
- https://sqlbolt.com/topic/subqueries

## Workshop

### Setup

Load the Pokemon dataset into a database and make sure it works

### Live Coding

Run through aggregate queries writing ones that get the

- `SUM` of all of the height of pokemon
- `AVG` of all of the weights of pokemon
- `MIN` to find the smallest pokemon
- `MAX` to find the largest pokemon

Then write a more complex query finds the

- Find the tallest pokemon with the weight of over 10000
- Smallest pokemon of the type "fire" (you'll need to use a `JOIN`)

Get more questions from the class for what to discover.

### Live Coding

Next, show how you can use a sub-query to find

- All of the pokemon whose weight is over the average weight
- The average height of the top ten tallest pokemon

Get more questions from the class for what to discover.

### Live Coding

Finally, explore how you can use `VIEW`s to keep SQL queries for later use. For example, show how we could have used `CREATE VIEW` in our previous examples.
