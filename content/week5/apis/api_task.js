;(async function main() {
  async function fetchURL(url) {
    const task = await fetch(url)
    const json = await task.json()
    console.log(json)
    return json
  }

  function displayJson(response) {
    document.getElementById('json').innerHTML = JSON.stringify(
      response,
      null,
      2
    )
  }

  function renderData(data) {
    const app = document.getElementById('app')
    const unorderLI = document.createElement('UL')
    app.appendChild(unorderLI)
    console.log(app)

    for (let i of data['cards']) {
      const cardList = document.createElement('LI')
      app.appendChild(cardList)
      const cardText = document.createElement('SPAN')
      cardText.innerHTML = `Your Random card RANK is ${i['value']} and your RANDOM card SUIT is ${i['suit']}:............`
      cardList.appendChild(cardText)

      const apiImage = document.createElement('IMG')
      apiImage.setAttribute('src', i['image'])
      cardList.appendChild(apiImage)
      console.log(i['image'])
    }
    const refreshButton = document.createElement('BUTTON')
    const f = document.createElement('FORM')
    app.appendChild(f)
    refreshButton.innerHTML = 'refresh for two more random cards'
    refreshButton.type = 'submit'
    refreshButton.value = 9

    console.log(refreshButton)
    f.appendChild(refreshButton)

    //Render your chosen API below using DOM Manipulation
  }

  // Enter your API URL below to render the data. Refresh the page to see the data.
  const data = await fetchURL(
    'https://deckofcardsapi.com/api/deck/new/draw/?count=2'
  )
  displayJson(data)
  renderData(data)
})()
