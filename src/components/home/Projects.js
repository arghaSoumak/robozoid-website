import React, { Component } from 'react'
import Store from '../../Store'
import { Link } from 'react-router-dom'
import { Icon } from '@material-ui/core'
export default class Projects extends Component {
  static contextType = Store
  state = {
    index: 0
  }

  next = () => {
    const index = this.state.index + 1
    this.setState({ index })
  }
  prev = () => {
    const index = this.state.index - 1
    this.setState({ index })
  }

  render() {
    return (
      <div id="projects">
        <div className="section-heading">
          <h1>What do we make?</h1>
          <div className="line" />
        </div>
        <div className="slider">
          <ul
            className="slider-wrapper"
            style={{
              transform: `translate(-${this.state.index *
                (100 / this.context.projects.length)}%)`
            }}
          >
            {this.context.projects.map(item => {
              return (
                <li key={item.project_id}>
                  <img alt="" src={item.project_image} />
                  <h1>{item.project_name}</h1>
                </li>
              )
            })}
          </ul>
          <button
            onClick={this.prev}
            disabled={this.state.index === 0}
            className="arrow prev-arrow"
          >
            <div className="arrow-wrapper">
              <Icon
                style={{
                  marginLeft: '8px'
                }}
              >
                arrow_back_ios
              </Icon>
            </div>
          </button>
          <button
            disabled={this.state.index === this.context.projects.length - 1}
            onClick={this.next}
            className="arrow next-arrow"
          >
            <div className="arrow-wrapper">
              <Icon
                style={{
                  marginLeft: '0px'
                }}
              >
                arrow_forward_ios
              </Icon>
            </div>
          </button>
        </div>
        <div className="load-more">
          <Link to="/projects">View all projects</Link>
          <i className="material-icons">arrow_right_alt</i>
        </div>
      </div>
    )
  }
}
