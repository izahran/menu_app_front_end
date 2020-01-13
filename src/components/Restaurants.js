import React, { Component } from 'react';
import axios from 'axios';
import Restaurant from './Restaurant'

export default class Restaurants extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            restaurants: []
        }
    }

    componentDidMount = () =>{
        axios.get('https://shielded-mesa-36213.herokuapp.com/api/restaurants')
        .then(r=>{
            console.log(r.data.restaurants);
            
            this.setState({restaurants: r.data.restaurants});
        })
        .catch(e=>{
            console.log(e);
        })
    }
    
    render() {
        const restaurants = this.state.restaurants.map((e,i)=>(
            <Restaurant key={i} restaurant={e}/>
        ))
        return (
            <div>
                 {restaurants}
            </div>
        )
    }
}
