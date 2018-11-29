import React from 'react'
import Header from '../projects/Header'
import resources from '../../img/resources.jpg'
import Footer from '../Footer'
import Store from '../../Store'
import ExpandSection from './ExpandSection'
class Resources extends React.Component {
    static contextType = Store
    render() {
        return (
            <React.Fragment>
                <Header name="Resources" bgImg={resources} />
                <div id="resources-section">
                    <div className="container">
                        <div className="grid-container">
                            {this.context.resources.map(resource => {
                                return (
                                    <div className="item" key={resource.id}>
                                        <ExpandSection resource={resource} />
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
