import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LeagueItem extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <h4 className="card-title">{this.props.league.strLeague}</h4>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.league.strSport}</h6>
                    {/* <Link to={`/league/${this.props.league.idLeague}`} className="card-link">View table</Link> */}
                </div>
            </div>
        )
    }
}