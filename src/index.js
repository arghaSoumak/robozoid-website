import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/home/App'
import Projects from './components/projects/'
import Gallery from './components/gallery/'
import GalleryPage from './components/gallery/GalleryPage'
import Resources from './components/resources/'
import Teams from './components/teams/'
import About from './components/About'
import * as serviceWorker from './serviceWorker'
import Provider from './Provider'

import './sass/app.sass'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const root = document.getElementById('root')
ReactDOM.render(
  <Provider>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/gallery/:id" exact component={GalleryPage} />
        <Route path="/resources" exact component={Resources} />
        <Route path="/teams" exact component={Teams} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  </Provider>,
  root
)

serviceWorker.unregister()
