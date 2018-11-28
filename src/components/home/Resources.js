import React from 'react'
import { Link } from 'react-router-dom'
import Store from '../../Store'
import Expand from '../resources/Expand'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  List
} from '@material-ui/core'
class Resources extends React.Component {
  static contextType = Store
  render() {
    return (
      <div id="resources">
        <div className="container">
          <div className="section-heading">
            <h1>Resources</h1>
            <div className="line" />
          </div>
          <div className="grid-container">
            {this.context.resources.slice(0, 4).map(resource => {
              return (
                <div className="item" key={resource.id}>
                  <ExpansionPanel style={{
                    width: '500px'
                  }}>
                    <ExpansionPanelSummary expandIcon={<Expand />}>
                      <h1>{resource.resource_title}</h1>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <List>
                        {resource.resource_links.map((link, i) => (
                          <h1>
                            <a href={link}>{link}</a>
                          </h1>
                        ))}
                      </List>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              )
            })}
          </div>
          <div className="load-more">
            <Link to="/resources">View all resources</Link>
            <i className="material-icons">arrow_right_alt</i>
          </div>
        </div>
      </div>
    )
  }
}

export default Resources
