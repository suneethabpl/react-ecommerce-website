import React, { Component } from 'react'
import Header from '../components/Header'
import Shop from '../components/Shop'
import Footer from '../components/Footer'
class NotFoundPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
            <Shop></Shop>
                <Footer></Footer>
            </React.Fragment>

        )
    }
}
export default NotFoundPage;