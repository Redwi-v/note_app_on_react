const TOGGLE_ALERT_VISIBILITI = 'SHOW_ALERT';
const CHANGE_TEXT = 'CHANGE_TEXT';
const CHANGE_ALERT_TYPE = 'CHANGE_ALERT_TYPE ';

const initialState = {
	text: 'hi how are you',
	alertType: 'worning',
	isvisible: false,
};

export const alertReduser = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_ALERT_VISIBILITI:
			return { ...state, isvisible: action.isVisible };
		case CHANGE_TEXT:
			return { ...state, text: action.newText };
		case CHANGE_ALERT_TYPE:
			return { ...state, alertType: action.alertType };
		default:
			return state;
	}
};

export const toggleAlertVisible = isVisible => {
	return {
		type: TOGGLE_ALERT_VISIBILITI,
		isVisible,
	};
};

export const chageAletText = newText => {
	return {
		type: CHANGE_TEXT,
		newText,
	};
};

export const chageAletType = alertType => {
	return {
		type: CHANGE_ALERT_TYPE,
		alertType,
	};
};
