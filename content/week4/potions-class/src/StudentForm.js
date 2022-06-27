import './App.css'
import React from 'react'

class StudentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', house: '', time: '' }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    this.setState({ time: new Date().toUTCString() })
  }

  handleClick(e) {
    e.preventDefault()

    const newEntry = this.state
    console.log(newEntry)
    this.props.getNew(newEntry)
  }

  render() {
    return (
      <form className="attendance-form">
        <span className="form-item">Name</span>
        <input
          className="form-item form-field"
          name="name"
          onChange={this.handleChange.bind(this)}
        ></input>
        <span className="form-item">House</span>
        <input
          className="form-item form-field"
          name="house"
          onChange={this.handleChange.bind(this)}
        ></input>
        <button onClick={this.handleClick.bind(this)} className="submit-btn">
          Register Me!
        </button>
      </form>
    )
  }
}

export default StudentForm
