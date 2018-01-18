import React, { Component } from 'react';
import axios from "axios";

export default class TeamDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
          teamData: []
        };
    }

    componentWillMount() {
        const URL = `/api/team/${this.props.teamId}`;
    
        axios
        .get(URL)
        .then(response => {
            this.setState({
                teamData: response.data.teams[0]
            });
        })
        .catch(error => {
            console.log("Error fetching and parsing data", error);
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <img src={this.state.teamData.strTeamBadge} alt={this.state.teamData.strAlternate} className="img-fluid team-logo" />
                </div>
                <div className="col-9">
                    <h2>{this.state.teamData.strAlternate}</h2>
                    <br />
                    <strong>Ground:</strong> {this.state.teamData.strStadium}
                    <br />
                    <strong>Manager:</strong> {this.state.teamData.strManager}
                    <br />
                    <strong>Capacity:</strong> {this.state.teamData.intStadiumCapacity}
                    <br/>
                    <a href={`http://${this.state.teamData.strFacebook}`} className="btn btn-primary">Facebook</a>
                    <a href={`http://${this.state.teamData.strTwitter}`} className="btn btn-primary">Twitter</a>
                    <a href={`http://${this.state.teamData.strInstagram}`} className="btn btn-primary">Instagram</a>
                    <a href={`http://${this.state.teamData.strWebsite}`} className="btn btn-primary">Website</a>
                </div>
            </div>
        )
    }
}