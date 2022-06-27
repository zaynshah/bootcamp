/*
If you run this code, you'll see 'Promise { <pending> }' printed three times to the console.
Add the `await` and `async` keywords to the code to make it run asynchronously.
*/

async function getData() {
  return fetch('http://www.sigmalabs.xyz')
}

async function getMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I'm going to wait three seconds and then run")
    }, 3000)
  })
}

async function calculateCalculation(a, b) {
  return a * b
}

//We have to use a special function to run our code asynchronously
const start = async function () {
  console.log(await getData())
  console.log(await getMessage())
  // For this task, rewrite this code so that the same result is calculated (547638) but without using .then()
  let result = await calculateCalculation(221, 413)
  result = await calculateCalculation(result, 2)
  result = await calculateCalculation(result, 3)

  console.log(result)
}

start()
