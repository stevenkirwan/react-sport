import React, { Component } from 'react';
import axios from "axios";
import LastFiveMatchesItem from './LastFiveMatchesItem'

export default class LastFiveMatchesList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lastMatchData: []
    };
  }

  componentWillMount() {
    const URL_LASTMATCH = `http://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${this.props.teamId}`;

    axios
      .get(URL_LASTMATCH)
      .then(response => {
        this.setState({
          lastMatchData: response.data.results
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
    });
  }
  render() {
    return (
      <div>
        <h3>Upcoming Fixtures</h3>
        <ul className="list-group">
          {this.state.lastMatchData.map( (match, i) => <LastFiveMatchesItem key={match.idEvent} i={i} match={match} />)}
        </ul>
      </div>
    )
  }
}