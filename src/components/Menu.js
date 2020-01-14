import React, { Component } from 'react';
import axios from 'axios';
import MenuItem from './MenuItem'

export default class Menu extends React.Component {
    state = {
        menu: [],
    };

    componentDidMount() {
        axios.get(`https://shielded-mesa-36213.herokuapp.com/api/restaurants/${this.props.restaurant_id}/menu_items`).then(res => {
            console.log(res.data.menu_items);
            this.setState({ menu: res.data.menu_items });
        });
    }



    render() {
        const menu_items = this.state.menu.map((e,i) =>(
            <MenuItem key={i} item={e} />
        ))
        return (
            
            <div className="item container-m">
                {menu_items}
            </div>
            
            
        )
    }
}

<<<<<<< HEAD
=======
// { this.state.menu.map(menu => <li >{menu.name}</li>) }
// { this.state.menu.map(menu => <img src={menu.image}></img>) }
// { this.state.menu.map(menu => <li>{menu.description}</li>) }
// { this.state.menu.map(menu => <li>{menu.price}</li>) }
>>>>>>> 17595f0049763a40c06ff1633784c943b18b1f0d
