import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchTVSHOW } from '../actions/index';


class SearchBar extends Component {
	constructor(){
		super();
		this.state = {
			searchTV: ''
		}
	}

	onInputChange = (event) => {
		this.setState({
			searchTV: event.target.value
		})
	}

	onFormSubmit = (event) =>{
		event.preventDefault();
		this.props.searchTVSHOW(this.state.searchTV)
		this.setState({
			searchTV: ''
		})
	}

	render(){
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input
					placeholder="Find your favorite TV-SHOW"
					className="form-control"
					value={this.state.searchTV}
					onChange={this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
					Submit
					</button>
				</span>
			</form>
			)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({searchTVSHOW}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);