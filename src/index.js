import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
    	<HashRouter>
			<Home />
    	</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
