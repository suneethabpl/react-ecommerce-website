import React, { Component } from 'react'
import Header from '../components/Header'
import Users from '../components/Users'
import Footer from '../components/Footer'
class UsersPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Users></Users>
                <Footer></Footer>
            </React.Fragment>

        )
    }
}
export default UsersPage;