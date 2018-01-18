import React, { Component } from 'react';

export default class SearchForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            term: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onSearch(this.state.term);
        this.setState({term: ''});
    }

    render(){
        return(
            <div className="row">

                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group mx-sm-3">
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}
                            placeholder="Search by country"
                            className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
        )
    }
}