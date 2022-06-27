export default function shuffle(array, seed = 1) {
  let currentIndex = array.length
  let temporaryValue, randomIndex

  let random = () => {
    var x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }

  while (0 !== currentIndex) {
    randomIndex = Math.floor(random() * currentIndex)
    currentIndex -= 1
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }
  return array
}
