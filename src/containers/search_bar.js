/**
 * Created by nicolaigaina on 12/17/16.
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {term:''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term:event.target.value});
    }

    onFormSubmit(event){
       event.preventDefault();

        // fire action creator
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }


    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Type in the city name to get the five-day forecast"
                    value={this.state.term}
                    onChange={this.onInputChange}
                    className="form-control"
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    //this guaranties to have this.props.fetchWeather in our container class SearchBar
    return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
