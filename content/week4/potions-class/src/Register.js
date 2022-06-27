import React from 'react'
import Students from './Students'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.studentList = props.studentData
  }
  //<Register studentData={this.state.data} />
  getFullList() {
    console.log(this.studentList)
    const studentList = this.studentList.map((i) => {
      return <Students name={i.name} house={i.house} time={i.time} />
    })
    return studentList
  }

  render() {
    return (
      <div className="register-wrapper">
        <h1>Register</h1>
        {this.getFullList()}
      </div>
    )
  }
}

export default Register
