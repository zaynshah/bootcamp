import React from 'react'
import './Story.css'

class Story extends React.Component {
  state = {}

  constructor(props) {
    super(props)
    this.state = { points: null }
  }

  async handleClick(e) {
    e.preventDefault()
    const response = await this.props.vote(
      { direction: e.target.value },
      this.props.story.id
    )
    const task = await response.json()
    this.props.new(task)
  }

  // To be able to register a click event on the upvote or downvote, we need pass a callback function
  // as a prop to this component.
  //
  // The callback function will be called when the user clicks on the upvote or downvote button.
  render() {
    const { title, score, url } = this.props.story

    return (
      <li>
        <button
          name="vote"
          value="up"
          onClick={this.handleClick.bind(this)}
          className="upVote"
        >
          ⬆
        </button>
        <button
          name="down"
          value="down"
          onClick={this.handleClick.bind(this)}
          className="downvote"
        >
          ⬇
        </button>
        <a className="title" href={url}>
          {title}
        </a>
        ({score} points)
      </li>
    )
  }
}

export default Story
