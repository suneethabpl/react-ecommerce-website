import React, { Component } from 'react'
import Header from '../components/Header'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
class CounterPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
           <Counter></Counter>
                <Footer></Footer>
            </React.Fragment>

        )
    }
}
export default CounterPage;