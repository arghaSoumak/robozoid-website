import React, { Component } from 'react'

import Navigation from '../Navigation'

export default class Header extends Component {
    render() {
        return (
            <header style={{
                height: '300px'
            }}>
                <div style={{
                    backgroundImage: `url(${this.props.bgImg})`
                }} className="header-bg"></div>

                <Navigation />
                <div className="header-content">
                    <h2>
                        Our   
                    </h2>
                    <h1>
                        {this.props.name}
                    </h1>
                </div>
            </header>
        )
    }
}
