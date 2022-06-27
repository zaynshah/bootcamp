import { DB } from 'https://deno.land/x/sqlite@v2.5.0/mod.ts'

// DB is from here https://www.kaggle.com/kaggle/sf-salaries
const db = new DB('salaries.sqlite')

console.log('1. Get the first 1000 rows of the table using LIMIT')

console.log('2. Get all of the rows for people called Christopher')

console.log('3. Get all of the rows for people with the last name "Ali"')

console.log('4. Get all of the rows for people who work for the police')

console.log('5. Get all the rows from the year 2011')

console.log('6. Get all the rows from the year 2011 or 2012')

console.log('7. Get all the rows where the base pay was greater than $100,000')

console.log(
  '8. Get all the rows where the "overtime pay" was more than the "other pay"'
)

console.log(
  '9. Get all the rows where the total of other pay and overtime pay was greater than the base pay'
)

console.log('10. Get all of the names of people who are physicians')

console.log(
  '11. Get all of the names of people who are attorneys or physicians earning more than $100,000'
)

console.log(
  '12. Find the person who has the largest total pay using ORDER_BY and LIMIT'
)

console.log(
  '13. Find the name and salary of the person who is the highest paid FIREFIGHTER'
)

console.log(
  '14. Find the pay increase that Kevin Lee the Personnel Analyst got between 2012 and 2014 (you cant do this in one command)'
)

console.log('What other interesting SQL queries can you find?')
