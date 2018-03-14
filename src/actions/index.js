import axios from 'axios';

export const FETCH_TVSHOW = 'fetch_tvshow';
export const SEARCH_TVSHOW = 'search_tvshow'
const URL = 'http://api.tvmaze.com/search/shows';

export function fetchTVSHOW(){
	const request = axios.get(`${URL}`);
	return {
		type: FETCH_TVSHOW,
		payload: request
	}
}

export function searchTVSHOW(query){
	const request = axios.get(`${URL}?q=${query}`);
	return {
		type: SEARCH_TVSHOW,
		payload: request
	}
}