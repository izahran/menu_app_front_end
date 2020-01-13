import React, { Component } from 'react'
// import Menu from './Menu'

export default class Restaurant extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    handleGetRestaurant = () => {
        // <Menu restaurant_id={this.props.restaurant.id} />
    }
    
    render() {
        return (
            <div onClick={this.handleGetRestaurant()}>
                {this.props.restaurant.name}
            </div>
        )
    }
}
