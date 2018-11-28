import React, { Component } from 'react'
import Header from '../projects/Header'
import teams from '../../img/teams.jpg'
import Footer from '../Footer'
import Teams from './Teams'
export default class App extends Component {
  render() {
    return (
      <div>
        <Header name="Teams" bgImg={teams} />
        <Teams />
        <Footer />
      </div>
    )
  }
}
