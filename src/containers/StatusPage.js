import React, { Component } from 'react'
import Header from '../components/Header'
import Status from '../components/Status'
import Footer from '../components/Footer'
class StatusPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Status></Status>
                <Footer></Footer>
            </React.Fragment>

        )
    }
}
export default StatusPage;