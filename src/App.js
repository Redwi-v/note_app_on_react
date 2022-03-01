import { Route, Routes } from 'react-router-dom';
import NavBarContainer from './components/Navigation/NavigationContainer';
import { defaultPages } from './utils/NavigationParams';
import { connect } from 'react-redux';
import AuthContainer from './pages/Auth/AuthContainer';
import Home from './pages/Home';
import AlertContainer from './components/Alert/AlertContainer';

function App(props) {
	const { isAuth } = props;

	// если в local storage isAuth равен 0 то рисуем страницу авторизации
	if (!isAuth) {
		return <AuthContainer />;
	}

	const renderRouters = () => {
		return defaultPages.map(({ path, Component }) => {
			return <Route key={path} path={path} element={<Component />} />;
		});
	};

	return (
		<div>
			<NavBarContainer />
			<AlertContainer styleOptions='alert' />
			<div className='container'>
				<Routes>
					{renderRouters()}
					<Route path='*' element={<Home />} />
				</Routes>
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		isAuth: state.authReduser.isAuth,
	};
};

export default connect(mapStateToProps, {})(App);
