import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchTVSHOW} from '../actions';

class showtv extends Component {
	componentDidMount() {
		this.props.fetchTVSHOW();
	}
	render(){
		return(
			<div> nada</div>
			)
	}
}

function mapStateToProps(state){
	return {shows: state.shows};
}

export default connect(mapStateToProps, {fetchTVSHOW})(showtv);