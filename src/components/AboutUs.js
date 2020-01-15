import React, { Component } from 'react';
// import src from '*.bmp';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <div>
                <h1>About Us</h1>
                <p>Menu App is a platform to present resturants menus for viewers to check the desired resturant menu.</p>
                <p>The App was built by GA students team as a team project done by: </p>
                </div>
                <div className="card">
                    <h2>Mohammed</h2>
                    <h4>Team Leader</h4>
                    <a href= 'https://github.com/Moohy?tab=repositories' target='_blank'>Profile</a>

                </div>
                <div className="card">
                    <h2>Amal</h2>
                    <h4>Team Member</h4>
                    <a href= 'https://github.com/Amal337?tab=repositories' target='_blank'>Profile</a>
                </div>
                <div className="card">
                    <h2>Hatim</h2>
                    <h4>Team Member</h4>
                    <a href= 'https://github.com/hatimalattas?tab=repositories' target='_blank'>Profile</a>
                </div>
                <div className="card">
                    <h2>Dalia</h2>
                    <h4>Team Member</h4>
                    <a href= 'https://github.com/dhdammas?tab=repositories' target='_blank'>Profile</a>
                </div>
                <div className="card">
                    <h2>Ibrahim</h2>
                    <h4>Team Member</h4>
                    <a href= 'https://github.com/izahran?tab=repositories' target='_blank'>Profile</a>
                </div>
            </div>
            
            
            
        
        );
    }
}

export default AboutUs;
