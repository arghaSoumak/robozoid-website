import React, { Component } from 'react'
import mentor from '../../img/mentorship.png'
import outreach from '../../img/outreach.png'
import rd from '../../img/rd.png'

export default class Objectives extends Component {
    render() {
        return (
            <div id="objectives">
                <div className="container">
                    <div className="section-heading">
                        <h1>What do we do?</h1>
                        <div className="line" />
                    </div>
                    <div className="grid-container">
                        <div className="item">
                            <img src={mentor} alt="" />
                            <h2>Mentorship and Training</h2>
                            <p>
                                We are devoted towards mentoring it’s members in
                                the fields of Robotics and AI. The members get
                                to learn as well as work in cutting edge
                                robotics projects.
                            </p>
                        </div>

                        <div className="item">
                            <img src={outreach} alt="" />
                            <h2>Outreach and Hands-on workshops</h2>
                            <p>
                                We perform outreach activities and organize
                                different workshops for schools and colleges.
                                It’s in our motto to learn and spread.
                            </p>
                        </div>

                        <div className="item">
                            <img src={rd} alt="" />
                            <h2>Innovation and R&D</h2>
                            <p>
                                We prepare our members to take up Research &
                                Development in the fields of Robotics, Path
                                Planning, IoT, AI and associated fields.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
