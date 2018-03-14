import _ from 'lodash';
import {FETCH_TVSHOW, SEARCH_TVSHOW} from '../actions';

export default function (state = {}, action) {
	switch (action.type){
		case SEARCH_TVSHOW:
			return {...state, [action.payload.data]: action.payload.query}
		case FETCH_TVSHOW:
			return _.mapKeys(action.payload.data, 'id');
		default:
			return state;
	}
}