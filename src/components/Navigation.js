import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@material-ui/core'
import logo from '../img/logo.png'

export default class Navigatio extends React.Component {
  state = {
    isOpen: false
  }
  open = () => {
    this.setState({ isOpen: true })
  }
  close = () => {
    this.setState({ isOpen: false })
  }
  render() {
    return (
      <div className="nav container">
        <nav>
          <img src={logo} alt="robozoid logo" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/teams">Teams</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div className="menu_icon" onClick={this.open}>
            <Icon>menu</Icon>
          </div>
          {this.state.isOpen ? (
            <div id="sidebar_menu">
              <Icon onClick={this.close}>close</Icon>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/resources">Resources</Link>
              </li>
              <li>
                <Link to="/teams">Teams</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </div>
          ) : null}
        </nav>
      </div>
    )
  }
}
