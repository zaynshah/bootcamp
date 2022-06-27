import React from 'react'

class Students extends React.Component {
  constructor(props) {
    super(props)
    this.house = props.house
    this.date = props.time
    this.name = props.name
  }

  render() {
    return (
      <div className="student-records">
        <span>{this.name}</span>
        <br />
        <span>House: {this.house}</span>
        <br />
        <span>Time: {this.date}</span>
      </div>
    )
  }
}

export default Students
