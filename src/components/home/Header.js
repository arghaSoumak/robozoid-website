import React, { Component } from 'react'
import bg from '../../img/header-bg.jpg'
import Navigation from '../Navigation'

export default class Header extends Component {
  render() {
    return (
      <header
        style={{
          height: '450px',
          width: '100%'
        }}
      >
        <div
          style={{
            backgroundImage: `url(${bg})`
          }}
          className="header-bg"
        />

        <Navigation />
        <div className="header-content">
          <h2>Welcome to</h2>
          <h1>Robozoid</h1>
        </div>
      </header>
    )
  }
}
