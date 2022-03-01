import { connect } from 'react-redux';
import Form from './Form';
import { updateFormValue, sendNote } from '../../Redux/formReduser';
import {
	chageAletText,
	toggleAlertVisible,
	chageAletType,
} from '../../Redux/alertReduser';

const FormContainer = props => {
	const {
		value,
		//methods
		sendNote,
		updateFormValue,
		chageAletText,
		toggleAlertVisible,
		chageAletType,
	} = props;

	const sendFormHandler = e => {
		e.preventDefault();
		let validValue = value.trim();

		if (validValue) {
			sendNote(value);
			updateFormValue('');
		} else {
			chageAletType('danger');
			chageAletText('Введите заметку!!!');
			toggleAlertVisible(true);
		}

		setTimeout(() => {
			toggleAlertVisible(false);
		}, 5000);
	};

	return (
		<Form
			value={value}
			//methods
			sendNote={sendFormHandler}
			updateFormValue={updateFormValue}
		/>
	);
};

const mapStateToProps = state => {
	return {
		value: state.formReduser.value,
	};
};

export default connect(mapStateToProps, {
	updateFormValue,
	chageAletText,
	toggleAlertVisible,
	chageAletType,
	sendNote,
})(FormContainer);
