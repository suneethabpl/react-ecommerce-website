// import React, { Component } from 'react'
import React, { PureComponent } from 'react'
import Item from './Item'

// class Catalog extends Component {
class Catalog extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        }
    }
    addItemToCart = (item) => {
        console.log(item);
        this.props.addItemToCart(item);
    }
    // shouldComponentUpdate() {
    //     return false;
    // }

    render() {
        console.log("rendering catalog")
        return (
            <React.Fragment>
                <h1>Catalog</h1>
                {
                    this.state.items.map((item) => {
                        return <Item key={item.id} item={item} addItemToCart={this.addItemToCart} isCart={false} />
                    })
                }

            </React.Fragment>

        )
    }
}

export default Catalog;

