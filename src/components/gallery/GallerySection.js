import React, { Component } from 'react'
import Store from '../../Store'
import { Link } from 'react-router-dom'
export default class GallerySection extends Component {
  static contextType = Store
  render() {
    return (
      <div id="gallery-section">
        <div className="gallery-container">
          {this.context.gallery.map((event, i) => {
            let link = `/gallery/${event.id}`
            return (
              <div className="gallery-item" key={i}>
                <Link to={link}>
                  <img alt="" src={event.images[0]} />
                  <h1>{event.event_name}</h1>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
