import React, { Component } from 'react';
import './App.css';
import AddItem from './components/addItem';
import ShowItem from './components/showItem';

class App extends Component {
  state = {
    courses: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "SQL" }

    ],
    current: ""
  }

  deleteCourse = (index) => {
    let { courses } = this.state;
    courses.splice(index, 1)
    this.setState({
      courses
    })

  }
  handleChange = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  addCourse = (e) => {
    e.preventDefault();
    let { courses } = this.state;
    let { current } = this.state;
    courses.push({ name: current })
    this.setState({
      courses,
      current: ''
    })
  }

  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }

  render() {
    let { courses } = this.state;
    let ListCourses = courses.map((course, index) => {
      return (
        <ShowItem course={course} key={index} index={index} editCourse={this.editCourse} deleteCourse={this.deleteCourse} />
      )
    })
    return (
      <div className="App">
        <div className="container-fluid">
          <h1 className="title-app">Todo Test</h1>
          <AddItem addCourse={this.addCourse} handleChange={this.handleChange} current={this.state.current} />
          <ul>
            {ListCourses}
          </ul>
        </div>
      </div>
    )
  }

}

export default App;
