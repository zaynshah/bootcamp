import React from 'react'
import './App.css'

class App extends React.Component {
  state = { success: undefined, shortLink: null }

  async componentDidMount() {
    const apiResponse = await fetch('http://localhost:8080/urls')
    const data = await apiResponse.json()
    this.setState({ shortLink: data['urls'] })
    console.log(this.state.shortLink)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  async handleSubmit(event) {
    event.preventDefault()

    const url = `https://${this.state.value}`

    try {
      const response = await this.postData('http://localhost:8080/shortlinks', {
        fullUrl: url
      })

      if (response.status >= 400 && response.status < 600) {
        throw new Error('Bad response from server')
      }

      if (response.status === 200) {
        const jsonResponse = await response.json()
        this.setState({
          success: true,
          value: '',
          code: jsonResponse.shortcode
        })
      } else {
        this.setState({ success: false, error: response.error })
      }
    } catch (error) {
      this.setState({ success: false, error: error.toString() })
    }
    setTimeout(() => window.location.reload(), 200)
  }

  async postData(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return response
  }

  async deleteData(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      header: {
        'Content-Type': 'application/json'
      }
    })
    return response
  }

  getShortUrl() {
    let code = []
    for (let i in this.state.shortLink) {
      code.push(<h5 key={i}>{i}</h5>)
    }
    return code
  }

  handleSubmits(e) {
    e.preventDefault()
    this.deleteData(`http://localhost:8080/${e.target.btn.value}`)
    setTimeout(() => window.location.reload(), 200)
  }

  getUrl() {
    let fullLinks = []
    for (let i in this.state.shortLink) {
      fullLinks.push(
        <div className="url-flex" key={i}>
          <h5>{this.state.shortLink[i]['url']}</h5>
          <form onSubmit={this.handleSubmits.bind(this)}>
            <button name="btn" value={i}>
              Delete!
            </button>
          </form>
        </div>
      )
    }
    return fullLinks
  }
  getCount() {
    let fullLinks = []
    for (let i in this.state.shortLink) {
      fullLinks.push(
        <div className="url-flex" key={i}>
          <h5>{this.state.shortLink[i]['count']}</h5>
        </div>
      )
    }
    return fullLinks
  }

  render() {
    const { value, code, error } = this.state
    //if (!this.state.shortLink) return <div>Loading...</div>
    return (
      <div id="centre">
        <h1>Very Good™️ Link Shortener Service</h1>
        <form>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              https://
            </span>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              value={value}
              onChange={(event) => this.handleChange(event)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={(event) => this.handleSubmit(event)}
          >
            Shorten
          </button>
          <br />
          <br />

          {code ? (
            <div className="alert alert-success" role="alert">
              URL has been shortened! You can find it at {code}.
            </div>
          ) : null}

          {error ? (
            <div className="alert alert-danger" role="alert">
              Oops! Something went wrong. Error: "{error}".
            </div>
          ) : null}
        </form>
        <div className="flex-code">
          <div className="simple">
            <h2>Code</h2>
            {this.getShortUrl()}
          </div>
          <div className="simple">
            <h2>Full URL</h2>
            {this.getUrl()}
          </div>
          <div className="simple">
            <h2>Count</h2>
            {this.getCount()}
          </div>
        </div>
      </div>
    )
  }
}

export default App
