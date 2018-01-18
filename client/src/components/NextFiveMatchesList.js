import React, { Component } from 'react';
import axios from "axios";

import NextFiveMatchesItem from './NextFiveMatchesItem';

export default class NextFiveMatchesList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nextMatchData: []
    };
  }

  componentWillMount() {
    const URL_NEXTMATCH = `http://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${this.props.teamId}`;

    axios
      .get(URL_NEXTMATCH)
      .then(response => {
        this.setState({
          nextMatchData: response.data.events
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    return (
      <div>
        <h3>Previous Fixtures</h3>
        <ul className="list-group">
          {this.state.nextMatchData.map( (match, i) => <NextFiveMatchesItem key={match.idEvent} i={i} match={match} />)}
        </ul>
      </div>
    )
  }
}