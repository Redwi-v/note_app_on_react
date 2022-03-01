import user from '../API/UserAPI';
import { toggleAlertVisible, chageAletText, chageAletType } from './alertReduser';

const AUTH = 'AUTH';
const CHANGE_PASSWORD_INPUT = 'CHANGE_PASSWORD_INPUT';
const CHANGE_lOGIN_INPUT = 'CHANGE_LOGIN_INPUT';
const TOGGLE_BUTTON_DISABLE = 'TOGGLE_BUTTON_DISABLE';

const initialState = {
	isAuth: parseInt(localStorage.getItem('isAuth')) || 0,
	loginInput: localStorage.getItem('login') || '',
	passwordInput: localStorage.getItem('password') || '',
	buttonIsDisable: false,
};

export const authReduser = (state = initialState, action) => {
	switch (action.type) {
		case AUTH:
			return { ...state, isAuth: action.isAuth };
		case CHANGE_PASSWORD_INPUT:
			return { ...state, passwordInput: action.newValue };
		case CHANGE_lOGIN_INPUT:
			return { ...state, loginInput: action.newValue };
		case TOGGLE_BUTTON_DISABLE:
			return { ...state, buttonIsDisable: action.value };
		default:
			return state;
	}
};

export const changePasswordInput = newValue => {
	return {
		type: CHANGE_PASSWORD_INPUT,
		newValue,
	};
};
export const changeLoginInput = newValue => {
	return {
		type: CHANGE_lOGIN_INPUT,
		newValue,
	};
};

export const executeAuth = isAuth => {
	return {
		type: AUTH,
		isAuth,
	};
};

export const toggleButtonDisable = value => {
	return {
		type: TOGGLE_BUTTON_DISABLE,
		value,
	};
};

//thunks

export const authHandler = (username, password, reqType) => {
	return async dispatch => {
		try {
			dispatch(toggleButtonDisable(true));

			await user[reqType](username, password);

			localStorage.setItem('login', username);
			localStorage.setItem('password', password);
			localStorage.setItem('isAuth', 1);

			dispatch(changePasswordInput(''));
			dispatch(changeLoginInput(''));
			dispatch(executeAuth(true));
			dispatch(toggleButtonDisable(false));
		} catch (error) {
			dispatch(chageAletText(error.response.data.massage));
			dispatch(chageAletType('danger'));
			dispatch(toggleAlertVisible(true));
			setTimeout(() => {
				dispatch(toggleAlertVisible(false));
			}, 8000);

			dispatch(toggleButtonDisable(false));
		}
	};
};
