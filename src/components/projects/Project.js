import React, { Component } from 'react'
import Store from '../../Store'
import ProjectItem from './ProjectItem'

export default class Project extends Component {
  static contextType = Store
  render() {
    return (
      <div id="projects-section">
        <ul>
          {this.context.projects.map(project => {
            return (
              <ProjectItem
                left={Boolean(project.project_id % 2 === 1)}
                key={project.project_id}
                project={project}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
