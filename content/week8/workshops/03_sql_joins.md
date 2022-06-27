# SQL `JOIN`s

## Learning Objectives

- Describe situations when you would want to combine tables
- Using a `JOIN` to join two tables query depending on a shared field
- Use an `LEFT JOIN` to join two tables retaining all of the rows in the left table
- Use an `RIGHT JOIN` to join two tables retaining all of the rows in the right table
- Describe what the `OUTER` keyword does in an SQL `JOIN`
- Accurately predict the outcome of `LEFT` and `RIGHT` `JOIN` queries

## Pre-work

### Set Up

If it hasn't been created already, create a thread in #workshops with the title: 'Week 8: SQL Joins Pre Work'.

### Watch

[SQL Joins: Difference Between Inner/Left/Right/Outer Joins](https://www.youtube.com/watch?v=zGSv0VaOtR0)

### Research

Research SQL `JOIN`s, then:

- Write a definition of what a 'join' is when referring to databases.
- Think of three situations in which you might what to combine tables.

Share your answers in the thread.

Extra reading: [Relational Algebra and Databases](https://www.javatpoint.com/dbms-relational-algebra)

## Workshop

### Lecture

Load the following code into an [SQLFiddle](http://sqlfiddle.com)

<details>

```sql
CREATE TABLE drinks (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
 	name varchar(100) NOT NULL,
	price INTEGER NOT NULL,
    size_ml INTEGER,
    caffeinated BOOLEAN NOT NULL
);

INSERT INTO drinks (name, price, size, caffeinated)
VALUES ('Frappe', 200, 200, true);

INSERT INTO drinks (name, price, size, caffeinated)
VALUES ('Frappe', 300, 300, true);

INSERT INTO drinks (name, price, size, caffeinated)
VALUES ('Latte', 200, 200, true);

INSERT INTO drinks (name, price, size, caffeinated)
VALUES ('Latte', 260, 300, true);

INSERT INTO drinks (name, price, size, caffeinated)
VALUES ('Latte', 280, 400, true);
```

</details>
<br />

Explain how this has a problem - if we wanted to change then size of the small drinks we'd need to update it in multiple places.

Re-write the code so that it resembles the SQL queries in the next section.

### Live Code - `JOIN`

Copy the below code into an [SQLFiddle](http://sqlfiddle.com)

<details>

```sql
CREATE TABLE drinks (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
 	name varchar(100) NOT NULL,
	price INTEGER NOT NULL,
    size varchar(100),
    caffeinated BOOLEAN NOT NULL
);

CREATE TABLE sizes (
name varchar(100) NOT NULL UNIQUE,
size_ml INTEGER NOT NULL
);

INSERT INTO sizes (name, size_ml)
VALUES ('Small', 200);

INSERT INTO sizes (name, size_ml)
VALUES ('Medium', 300);

INSERT INTO sizes (name, size_ml)
VALUES ('Large', 400);

INSERT INTO sizes (name, size_ml)
VALUES ('Extra Large', 500);

INSERT INTO drinks (name, price, size, caffeinated)
VALUES ('Frappe', 200, "Small", true);

INSERT INTO drinks (name, price, size, caffeinated)
VALUES ('Frappe', 300, "Medium", true);

INSERT INTO drinks (name, price, size, caffeinated)
VALUES ('Latte', 200, "Small", true);

INSERT INTO drinks (name, price, size, caffeinated)
VALUES ('Latte', 260, "Medium", true);

INSERT INTO drinks (name, price, size, caffeinated)
VALUES ('Latte', 280, "Large", true);
```

</details>
<br />

First, ask the students to write a `JOIN` that will combine the two tables and return the combines tables including the `size_ml` of each drink.

Then work through the above example explaining each part of the query.

### Live Code - `LEFT JOIN`

Run through the same example but using the `LEFT JOIN` query. Notice how the response does not change.

### Live Code - `RIGHT JOIN`

Next, change `LEFT` to `RIGHT`. Ask the students to predict what would happen.

### Live Code - `OUTER JOINS`

Explain that `OUTER` is to support an old version of SQL. This is no longer required apart from for backwards compatibility.

### Exercise

For the rest of the session, complete the following exercises in pairs

https://pgexercises.com/questions/joins/

```sql

CREATE TABLE students (
	studentID INTEGER(4) PRIMARY KEY,
 	name varchar(100) NOT NULL,
	age INTEGER NOT NULL,
    yearGroup VARCHAR(50)
);

CREATE TABLE staff (
  staffID INTEGER NOT NULL UNIQUE PRIMARY KEY,
  role VARCHAR(50) NOT NULL,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE studentClasses (
  studentID INTEGER NOT NULL UNIQUE PRIMARY KEY,
  classID INTEGER NOT NULL,
  grade INTEGER NOT NULL
);

CREATE TABLE classes (
  classID INTEGER NOT NULL UNIQUE PRIMARY KEY,
  className VARCHAR(50) NOT NULL,
  staffID INTEGER NOT NULL,
  yearGroup INTEGER NOT NULL
 );


INSERT INTO students (studentID, name, age, yearGroup)
VALUES (1001, 'Joe Bloggs', 14, 8);

INSERT INTO students (studentID, name, age, yearGroup)
VALUES (1002, 'Jane Doe', 13, 8);

INSERT INTO students (studentID, name, age, yearGroup)
VALUES (1003, 'Jill Smith', 12, 7);

INSERT INTO staff (staffID, role, name)
VALUES (10001, 'Head of Education', 'Chris Owen');

INSERT INTO staff (staffID, role, name)
VALUES (10002, 'Coding Coach', 'Sonali Singh');

INSERT INTO classes (classID, className, staffID, yearGroup)
VALUES (101, 'SQL', 10001, 8);

INSERT INTO classes (classID, className, staffID, yearGroup)
VALUES (102, 'Intro to Coding', 10002, 7);

INSERT INTO studentClasses (studentID, classID, grade)
VALUES (1001, 101, 85);

INSERT INTO studentClasses (studentID, classID, grade)
VALUES (1002, 101, 65);

INSERT INTO studentClasses (studentID, classID, grade)
VALUES (1003, 102, 90);

```

Student IDs: 4 digits, staff IDs are 5 digits long and class IDs are 3 digits long

Find all of the students that Chris teaches under the age of 14. Use the different types of `JOINS` (`JOIN`, `LEFT JOIN`, `RIGHT JOIN`) to achieve the same results.
