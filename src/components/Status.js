import React, { Component } from 'react';

class Status extends Component {
    constructor() {
        super();
        this.state = {
            status: "Like"
        }
    }

    updateStatus = () => {
        if (this.state.status === "Like") {
            this.setState({
                status: "Unlike"
            })
        }
        else {
            this.setState({
                status: "Like"
            })
        }
    }

    render() {
        return (
            <button onClick={this.updateStatus}>{this.state.status}</button>
        )
    }
}

export default Status;