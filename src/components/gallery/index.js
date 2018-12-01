import React, { Component } from 'react'
import Header from '../projects/Header'
import gallery from '../../img/gallery.jpg'
import Footer from '../Footer'
import GallerySection from './GallerySection'

export default class App extends Component {
    componentDidMount = () => {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Header name="Gallery" bgImg={gallery} />
                <GallerySection />
                <Footer />
            </div>
        )
    }
}
