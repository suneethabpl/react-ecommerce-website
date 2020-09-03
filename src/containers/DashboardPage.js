import React, { Component } from 'react'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import Shop from '../components/Shop'
import Footer from '../components/Footer'
import { Redirect } from 'react-router-dom'
class DashboardPage extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: true
        }
    }
    render() {
        if (!this.state.loggedIn) {
            return (
                <Redirect to="/login" />
            )
        }
        return (
            <React.Fragment>
                <Header />
                <Dashboard></Dashboard>
                <Shop />
                <Footer></Footer>
            </React.Fragment>
        )

    }

}
export default DashboardPage;