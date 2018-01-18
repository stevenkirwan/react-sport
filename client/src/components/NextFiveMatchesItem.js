import React, { Component } from 'react';

export default class NextFiveMatchesItem extends Component {

    render() {
        return (
            <div>
                <li className="list-group-item">
                    {this.props.match.strHomeTeam} v {this.props.match.strAwayTeam}
                    - {this.props.match.strTime} 
                     - {this.props.match.dateEvent}
                </li>
            </div>
        )
    }
}