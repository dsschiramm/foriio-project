import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react'

import 'bootstrap';
import './assets/scss/custom.scss';
import './assets/css/main.css';

import Root from './components/Root';
import { store, persistor } from "./store";

ReactDOM.render((
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Root />
			</PersistGate>
		</Provider>
	</BrowserRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
