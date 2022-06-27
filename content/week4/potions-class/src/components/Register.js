import React from 'react'

class Register extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="student-Record">
        <span>{this.props.name}</span>
        <br />

        <span>House: {this.props.house}</span>
        <br />
        <span>Time: {this.props.date}</span>
      </div>
    )
  }
}

export default Register
