import React, { Component } from 'react';
import axios from 'axios';

import LeagueItem from './LeagueItem';

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
          allLeagues: []
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
        });
    })
    .catch(error => {
        this.setState({
            hasError: true
        });
    });
  }
  renderLeagueList(){
    if (this.state.allLeagues !== null) {
      return (
        <div>
            {this.state.allLeagues.map( (league, index) => <LeagueItem key={league.idLeague} league={league}/>)}
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


                    
                    
                  
                    
                    { this.renderLeagueList() }
                </div>
    );
  }
}

export default App;
