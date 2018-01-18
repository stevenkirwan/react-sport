import React, { Component } from 'react';

export default class LastFiveMatchesItem extends Component {

    render() {
        return (
            <div>
                <li className="list-group-item">
                    {this.props.match.strHomeTeam} {this.props.match.intHomeScore}-{this.props.match.intAwayScore} {this.props.match.strAwayTeam}
                    - {this.props.match.dateEvent}
                </li>
            </div>
        )
    }
}