import React, { Component } from "react";

import TeamDetails from './TeamDetails';
import NextFiveMatchesList from "./NextFiveMatchesList";
import LastFiveMatchesList from "./LastFiveMatchesList";

export default class Team extends Component {
  goBack(){
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="container">
        <TeamDetails teamId={this.props.match.params.id} />
       
        <div className="row">
          <div className="col-6">
          <NextFiveMatchesList teamId={this.props.match.params.id} />
          </div>
          <div className="col-6">
            <LastFiveMatchesList teamId={this.props.match.params.id} />
          </div>
        </div>
        <button onClick={this.goBack.bind(this)} className="btn btn-primary">Back</button>
      </div>
    )
  }
}
