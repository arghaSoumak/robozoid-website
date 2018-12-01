import React, { Component } from 'react'
import Nav from '../Navigation'
import Footer from '../Footer'
import Store from '../../Store'

export default class GalleryPage extends Component {
    static contextType = Store
    componentDidMount = () => {
        window.scrollTo(0, 0)
    }
    render() {
        let event = this.context.gallery.find(
            event => event.id === this.props.match.params.id
        )
        return (
            <div>
                <Nav />
                <div id="gallery_page">
                    <div className="container">
                        <h1>{event.event_name}</h1>
                        <h2>held on {event.date.toDate().toDateString()}</h2>
                        <div className="grid-container">
                            {event.images.map((img, i) => (
                                <div className="item" key={i}>
                                    <img src={img} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
