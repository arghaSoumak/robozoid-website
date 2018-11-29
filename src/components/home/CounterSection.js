import React, { Component } from 'react'
import bg from '../../img/gallery.jpg'
import Store from '../../Store'

export default class CounterSection extends Component {
    static contextType = Store
    render() {
        return (
            <div
                id="counter"
                style={{
                    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(${bg})`
                }}
            >
                <div className="grid-container">
                    <div className="item">
                        <h1>{this.context.projects.length}</h1>
                        <p>projects</p>
                    </div>

                    <div className="item">
                        <h1>{this.context.resources.length}</h1>
                        <p>resources</p>
                    </div>

                    <div className="item">
                        <h1>{this.context.teams.length}</h1>
                        <p>members</p>
                    </div>
                </div>
            </div>
        )
    }
}
