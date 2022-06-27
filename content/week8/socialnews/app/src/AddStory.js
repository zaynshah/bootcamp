import React from 'react'
import './Story.css'

class AddStory extends React.Component {
  constructor(props) {
    super(props)
    this.state = { success: true }
  }

  async handleSubmit(e) {
    e.preventDefault()
    const title = e.target.title.value
    const url = e.target.url.value
    const response = await this.postStory(title, url)

    if (response.status === 200) {
      let task = await response.json()
      this.setState({ success: true })
      this.props.getNew(task)
    } else {
      this.setState({ success: false })
    }
    e.target.title.value = ''
    e.target.url.value = ''
  }

  async postStory(title, url) {
    const data = { title: title, url: url }
    const response = await fetch(`http://localhost:8080/stories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    return response
  }

  render() {
    if (!this.state.success)
      return (
        <div>
          <h3>Error Not Valid! Enter a valid URL</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Title:</label>
            <input name="title"></input>
            <label>URL</label>
            <input name="url"></input>
            <button>Submit!</button>
          </form>
        </div>
      )
    return (
      <div>
        <h3>Success Story Added!</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Title:</label>
          <input name="title"></input>
          <label>URL</label>
          <input name="url"></input>
          <button>Submit!</button>
        </form>
      </div>
    )
  }
}

export default AddStory
