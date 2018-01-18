import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render(){
        return(
            <nav className="nav">
                <div className="container">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}