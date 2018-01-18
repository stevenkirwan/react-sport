import React, { Component } from 'react';
import axios from 'axios';

import LeagueItem from './LeagueItem';
import SearchForm from './SearchForm';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allLeagues: [],
            isLoading: true,
            filteredLeague: [],
            sports: ['All', 'Motorsport', 'Rugby', 'Basketball', 'Soccer', 'Ice Hockey', 'American Football', 'Baseball', 'Golf', 'Cricket'],
        };
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        const URL = `api/leagues`;

        axios
        .get(URL)
        .then(response => {
            this.setState({
                allLeagues: response.data.leagues,
                filteredLeague: response.data.leagues,
                isLoading: false,
                hasError: false
            });
        })
        .catch(error => {
            this.setState({
                hasError: true
            });
        });
    }

    handleClick(e) {

        // if target value is not equal to All and is checked flter data
        if(e.target.value !== "All" && e.target.checked === true){
            const updatedData = this.state.allLeagues.filter(function (el) {
                return (el.strSport === e.target.value);
            });

            this.setState({
                filteredLeague: updatedData
            });
        }else{
            this.setState({
                filteredLeague: this.state.allLeagues
            });
        }
    }

    searchLeague(term){
        const URL = `/api/search/${term}`;

        axios
        .get(URL)
        .then(response => {
            this.setState({
                filteredLeague: response.data.countrys
            });
        })
        .catch(error => {
            this.setState({
                hasError: true
            });
        });
    }

    renderLeagueList(){
        if (this.state.filteredLeague !== null) {
            return (
                <div>
                    {this.state.filteredLeague.map( (league, index) => <LeagueItem key={league.idLeague} league={league}/>)}
                </div>
            );
        }else {
            return (
                <h2>Sorry no leagues in this country. Try again</h2>
            );
        }
    }

    renderFilters() {
        return(
            this.state.sports.map( (sport, index) => (
                <div className="form-check form-check-inline" key={index}>
                    <label className="form-check-label">
                        <input
                            type="checkbox" 
                            value={sport}
                            onChange={this.handleClick.bind(this)}
                            className="form-check-input" 
                        /> 
                        {sport}
                    </label>
                </div>
            ))
        )
    }

    render() {
        return (
            <div className="container">
                <SearchForm onSearch={term => this.searchLeague(term)}/>

                { this.renderFilters() }

                { this.renderLeagueList() }

            </div>
        );
    }
}

export default App;
