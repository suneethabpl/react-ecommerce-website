import React, { Component } from 'react'
import Header from '../components/Header'
import ItemDetail from '../components/ItemDetail'
import Footer from '../components/Footer'
class ItemDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id
        }
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <ItemDetail id={this.state.id} />
                <Footer></Footer>
            </React.Fragment>
        )
    }
}
export default ItemDetailPage;