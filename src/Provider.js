import React from 'react'
import Store from './Store'
import { db } from './firebase'
import logo from './img/robotic.png'

class Provider extends React.Component {
  state = {
    projects: [],
    gallery: [],
    resources: [],
    teams: []
  }
  componentDidMount = () => {
    db.collection('projects')
      .get()
      .then(snap => {
        let projects = []
        snap.forEach(doc => {
          if (doc.exists) {
            projects.push(Object.assign(doc.data(), { id: doc.id }))
          }
        })
        // this.setState({ projects })
        db.collection('gallery')
          .orderBy('date', 'desc')
          .get()
          .then(snap => {
            let gallery = []
            snap.forEach(doc => {
              if (doc.exists) {
                gallery.push(Object.assign(doc.data(), { id: doc.id }))
              }
            })
            // this.setState({ gallery })
            db.collection('resources')
              .get()
              .then(snap => {
                let resources = []
                snap.forEach(doc => {
                  if (doc.exists) {
                    resources.push(Object.assign(doc.data(), { id: doc.id }))
                  }
                })
                // this.setState({ resources })
                db.collection('teams')
                  .get()
                  .then(snap => {
                    let teams = []
                    snap.forEach(doc => {
                      if (doc.exists) {
                        teams.push(Object.assign(doc.data(), { id: doc.id }))
                      }
                    })
                    this.setState({ projects, gallery, resources, teams })
                  })
                  .catch(err => console.log(err))
              })
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
  }
  render() {
    console.log(this.state)
    if (
      this.state.projects.length === 0 &&
      this.state.gallery.length === 0 &&
      this.state.resources.length === 0 &&
      this.state.teams.length === 0
    ) {
      return (
        <div id="loading">
          <img src={logo} alt="" />
          <h1>Robozoid</h1>
          <h2>Loading...</h2>
        </div>
      )
    } else {
      return (
        <Store.Provider value={this.state}>
          {this.props.children}
        </Store.Provider>
      )
    }
  }
}

export default Provider
