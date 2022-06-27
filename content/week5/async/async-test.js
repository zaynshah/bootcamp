async function flipCoin() {
  const randomNum = Math.floor(Math.random() * 2)

  if (randomNum == 0) {
    return 'Heads'
  } else {
    throw 'plese update api'
  }
}

try {
  const result = await flipCoin()
  console.log(result)
} catch (e) {
  console.log(e)
}
