import React from 'react'
import Header from '../projects/Header'
import teams from '../../img/teams.jpg'
import Footer from '../Footer'
import Store from '../../Store'
import Expand from './Expand'
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
      <React.Fragment>
        <Header name="Resources" bgImg={teams} />
        <div id="resources-section">
          <div className="container">
            <div className="grid-container">
              {this.context.resources.map(resource => {
                return (
                  <div className="item" key={resource.id}>
                    <ExpansionPanel>
                      <ExpansionPanelSummary expandIcon={<Expand />}>
                        <h1>{resource.resource_title}</h1>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <List>
                          {resource.resource_links.map((link, i) => (
                            <h1 key={i}>
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
          </div>
        </div>

        <Footer />
      </React.Fragment>
    )
  }
}

export default Resources
