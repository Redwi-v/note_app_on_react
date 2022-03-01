import { connect } from 'react-redux';
import Alert from './Alert';
import { toggleAlertVisible } from '../../Redux/alertReduser';

const AlertContainer = props => {
	const {
		text,
		isvisible,
		alertType,
		styleOptions,

		//func
		toggleAlertVisible,
	} = props;

	return (
		<Alert
			alert={{
				text,
				isvisible,
				alertType,
				styleOptions,

				//func
				toggleAlertVisible,
			}}
		/>
	);
};

const mapStateToProps = state => {
	const { text, alertType, isvisible } = state.alertReduser;
	return {
		text,
		alertType,
		isvisible,
	};
};
const mapDispatchToProps = {
	toggleAlertVisible,
};

export default connect(mapStateToProps, mapDispatchToProps)(AlertContainer);
