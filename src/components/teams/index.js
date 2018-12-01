import React, { Component } from 'react'
import Header from '../projects/Header'
import teams from '../../img/teams.jpg'
import Footer from '../Footer'
import Teams from './Teams'
export default class App extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Header name="Teams" bgImg={teams} />
                <Teams />
                <Footer />
            </div>
        )
    }
}
