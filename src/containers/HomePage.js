import React, { Component } from 'react'
import Header from '../components/Header'
import Shop from '../components/Shop'
import Footer from '../components/Footer'
import About from '../components/About'
import Contact from '../components/Contact'
import Services from '../components/Services'
class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <About />
                <Contact />
                <Services />
                <Footer></Footer>
            </React.Fragment>

        )
    }
}
export default HomePage;