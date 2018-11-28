import React, { Component } from 'react'
import Header from '../home/Header'
import Objectives from '../home/Objectives'
import CounterSection from '../home/CounterSection'
import Projects from '../home/Projects'
import Footer from '../Footer'
import Resources from './Resources'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Objectives/>
        <CounterSection/>
        <Projects/>
        <Resources/>
        <Footer/>
      </div>
    )
  }
}
