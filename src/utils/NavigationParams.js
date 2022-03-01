import Home from '../pages/Home';
import About from '../pages/About/About';
import { HOME_ROUTER, ABOUT_ROUTER } from '../routes';

export const defaultPages = [
	{
		path: HOME_ROUTER,
		Component: Home,
	},
	{
		path: ABOUT_ROUTER,
		Component: About,
	},
];
