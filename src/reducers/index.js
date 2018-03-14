import { combineReducers } from 'redux';
import tvshow from './reducer_tv';

const rootReducer = combineReducers({
	shows: tvshow
})

export default rootReducer;