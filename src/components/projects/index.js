import React, { Component } from 'react'
import Header from './Header'
import Footer from '../Footer'
import Project from './Project'
import projects from '../../img/projects.jpg'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header name="Projects" bgImg={projects}/>
        <Project/>
        <Footer/>
      </div>
    )
  }
}
