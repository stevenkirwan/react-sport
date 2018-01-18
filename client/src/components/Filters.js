import React, { Component } from 'react';

class Filters extends Component {

    renderFilters() {
        return(
            this.props.sports.map( (sport, index) => (
                <div className="form-check form-check-inline" key={index}>
                    <label className="form-check-label">
                        <input
                            type="checkbox" 
                            value={sport}
                            className="form-check-input" 
                        /> 
                        {sport}
                    </label>
                </div>
            ))
        )
    }

    render() {
        return(
            <div>{ this.renderFilters() }</div>
        )
    }
}

export default Filters;