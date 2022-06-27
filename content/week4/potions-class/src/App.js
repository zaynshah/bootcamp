import './App.css'
import React from 'react'
import Students from './Students.js'
import hogwartsStudentRegistry from './data.js'
import StudentForm from './StudentForm.js'
import Register from './Register'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dataList: hogwartsStudentRegistry }
  }

  getNewState(newStudent) {
    let studentList = [newStudent, ...this.state.dataList]

    this.setState({ dataList: studentList })
  }

  getStudents() {
    const studentList = this.state.dataList.map((d, i) => {
      return (
        <Students
          key={Math.random() * 100 * Math.random()}
          name={d.name}
          house={d.house}
          time={d.time}
        />
      )
    })
    return studentList
  }
  render() {
    return (
      <div className="App">
        <header className="title">Potions Class</header>
        <div className="app-wrapper">
          <div className="app-lhs-container">
            <div className="form-wrapper">
              <StudentForm getNew={this.getNewState.bind(this)} />
            </div>
          </div>
          <div className="app-rhs-container">
            <div className="register-wrapper">
              <h1>Register</h1>
              {this.getStudents()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
