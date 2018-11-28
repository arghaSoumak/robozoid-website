import React from 'react'
import Store from '../../Store'
class Teams extends React.Component {
  static contextType = Store
  render() {
    return (
      <React.Fragment>
        <div id="teams">
          <div className="container">
            <div className="grid-container">
              {this.context.teams.map((team, i) => {
                return (
                  <div className="item" key={i}>
                    <img src={team.avatar} alt="" />
                    <h3>{team.name}</h3>
                    <h4>{team.position}</h4>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Teams
