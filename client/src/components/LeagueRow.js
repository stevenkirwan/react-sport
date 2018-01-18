import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LeagueRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.i + 1}</td>
                <td><Link to={`/team/${this.props.team.teamid}`}>{this.props.team.name}</Link></td>
                <td>{this.props.team.played}</td>
                <td>{this.props.team.win}</td> 
                <td>{this.props.team.draw}</td>
                <td>{this.props.team.loss}</td>
                <td>{this.props.team.goalsfor}</td>
                <td>{this.props.team.goalsagainst}</td>
                <td>{this.props.team.goalsdifference}</td>
                <td>{this.props.team.total}</td>
            </tr>
        )
    }
}