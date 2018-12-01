import React, { Component } from 'react'
import Header from './Header'
import Footer from '../Footer'
import Project from './Project'
import projects from '../../img/projects.jpg'
export default class App extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Header name="Projects" bgImg={projects} />
                <Project />
                <Footer />
            </div>
        )
    }
}
