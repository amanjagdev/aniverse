import React from 'react';
import { withRouter } from 'react-router-dom';

//Importing Styles
import "./Home.css"

const Home = (props) => {
    
    return (
        <div className="Home">
            <h1>Home Page</h1>
        </div>
    )
}

export default withRouter(Home)
