import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import favicon from './assets/favicon.ico';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Helmet>
				<meta charSet='utf-8' />
				<title>Note App</title>
				<link rel='icon' type='image/ico' href={favicon} sizes='16x16' />
			</Helmet>

			{/* my app */}
			<App />
		</Provider>
	</BrowserRouter>,

	document.getElementById('root'),
);
