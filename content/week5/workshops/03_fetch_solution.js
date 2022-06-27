;(async () => {
  const token = await getToken()
  //await checkCredits(token)
  //await sendSMS(token, 'Chris', '07453504432', 'Hello Class!')
})()

async function getToken() {
  const rawResponse = await fetch(
    'https://api.thesmsworks.co.uk/v1/auth/token',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        customerid: '4471-3c49-f6b8-4186-a8bc-2abf335e9ce9',
        key: '06e1af73-e252-4ba8-9fd6-45b821e010d6',
        secret:
          'c24cd309d0eaeb32c593e35128ca98ae3197a5c1e278299b74cc2c4d14292e0a'
      })
    }
  )
  const content = await rawResponse.json()
  return content.token
}

async function sendSMS(token, sender, number, message) {
  const response = await fetch(
    'https://api.thesmsworks.co.uk/v1/message/send',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({
        sender: sender,
        destination: number,
        content: message
      })
    }
  )

  const smsContent = await response.json()

  console.log(smsContent)
}

async function checkCredits(token) {
  const response = await fetch(
    'https://api.thesmsworks.co.uk/v1/credits/balance',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: token
      }
    }
  )

  const smsContent = await response.json()

  console.log("We've got " + smsContent.credits + ' credits remaining')
}
