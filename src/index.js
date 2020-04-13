import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { css } from 'emotion';

import './styles/reset.css';
import './styles/styles.css';
import App from './app/App';

import * as serviceWorker from './serviceWorker';

import backgroundImage from './images/concrete_wall.gif';
document.body.setAttribute(
	'class',
	css`
	background-image: url('${backgroundImage}');
`
);

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
