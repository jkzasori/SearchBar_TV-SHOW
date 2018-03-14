import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducers from './reducers';
import HOME from './containers/home';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const app = document.getElementById('app');

render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<HOME />
	</Provider>
	, app);