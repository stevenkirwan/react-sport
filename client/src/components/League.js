import React, { Component } from 'react';
import axios from 'axios';

import LeagueRow from './LeagueRow';

export default class League extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            data: [],
            tableHeadings:['Pos','Team','Pl','W','D','L','PF','PA','Diff','Total'],
            leagueName: '',
            leagueLogo: '',
            hasError: false
        })
    }

    goBack(){
        this.props.history.goBack();
    }

    // Make AJAX request to API
    componentWillMount() {
        const LEAGUE_URL = `/api/league/${this.props.match.params.id}`;
        const TABLE_URL = `/api/table/${this.props.match.params.id}&s=1718`;

        axios.get(TABLE_URL)
        .then(response => {
            this.setState({
                data: response.data.table
            })
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });

        axios.get(LEAGUE_URL)
        .then(response => {
            console.log(response.data.leagues[0].strLeague)
            this.setState({
                leagueName: response.data.leagues[0].strLeague,
                leagueLogo: response.data.leagues[0].strLogo
            })
        })
        .catch(error => {
            this.setState({
                hasError: true
            })
            console.log('Error fetching and parsing data', error);
        });
    }

    renderTable(){
        if (this.state.data !== null) {
            return (
              <div>
                    <div className="col-4 text-center">
                        <img src={this.state.leagueLogo} alt={this.state.leagueName} className="img-fluid"/>
                    </div>
    
                    <table className="table table-striped">
                        <thead className="thead-inverse">
                            <tr>
                                {this.state.tableHeadings.map( (heading, index) => <th key={index}>{heading}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map( (team, i) => <LeagueRow key={team.teamid} i={i} team={team} />)}
                        </tbody>
                    </table>
              </div>
            );
          } else {
            return (
              <h2>No records........look again!!</h2>
            );
        }
    }

    render() {
            return (
                <div className="container">
                   
                    { this.renderTable() }
                    <button onClick={this.goBack.bind(this)} className="btn btn-primary">Back</button>
                </div>
            )
        }
    }
