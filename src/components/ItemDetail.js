import React, { Component } from 'react'
class ItemDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            id:props.id
        }
    }
    render() {
        return (
            <p>Item Detail:{this.state.id}</p>
        )
    }
}
export default ItemDetail;