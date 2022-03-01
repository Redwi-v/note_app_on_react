import { connect } from 'react-redux';
import NavigationBar from './Navigation';
import { executeAuth } from '../../Redux/authReduser';

const NavigationBarContainer = props => {
	const { executeAuth } = props;
	const logoutHandler = () => {
		executeAuth(false);
		localStorage.clear();
	};

	return <NavigationBar logoutHandler={logoutHandler} />;
};

const mapStateToProps = state => {
	return {};
};

export default connect(mapStateToProps, { executeAuth })(NavigationBarContainer);
