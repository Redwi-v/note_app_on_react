import { connect } from 'react-redux';
import Auth from './Auth';
import {
	changePasswordInput,
	changeLoginInput,
	authHandler,
} from '../../Redux/authReduser';
import { useEffect } from 'react';

const AuthContainer = props => {
	const {
		isAuth,
		buttonIsDisable,
		passwordInput,
		loginInput,
		//methods
		changePasswordInput,
		changeLoginInput,
		authHandler,
	} = props;

	useEffect(() => {
		if (isAuth) {
			authHandler(loginInput, passwordInput, 'login');
		}
	}, [isAuth]);

	const sendFormHandler = e => {
		e.preventDefault();
		const type = e.target.getAttribute('handlertype');
		authHandler(loginInput, passwordInput, type);
	};
	return (
		<Auth
			passwordInput={passwordInput}
			loginInput={loginInput}
			buttonIsDisable={buttonIsDisable}
			//methods
			sendFormHandler={sendFormHandler}
			changePasswordInput={changePasswordInput}
			changeLoginInput={changeLoginInput}
		/>
	);
};

//connect
const mapStateToProps = state => {
	return {
		passwordInput: state.authReduser.passwordInput,
		loginInput: state.authReduser.loginInput,
		buttonIsDisable: state.authReduser.buttonIsDisable,
		isAuth: state.authReduser.isAuth,
	};
};

const dispatchs = {
	changePasswordInput,
	changeLoginInput,
	authHandler,
};

export default connect(mapStateToProps, dispatchs)(AuthContainer);
