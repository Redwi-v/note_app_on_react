import styles from './auth.module.scss';
import AlertContainer from '../../components/Alert/AlertContainer';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

const Auth = props => {
	const {
		passwordInput,
		loginInput,
		buttonIsDisable,
		//methods
		changePasswordInput,
		changeLoginInput,
		sendFormHandler,
	} = props;

	const ButtonClassName = buttonIsDisable ? styles.disabled : '';

	// buttons for form
	const LoginBtn = () => {
		return (
			<div className={styles.footer}>
				<button
					className={ButtonClassName}
					onClick={sendFormHandler}
					disabled={buttonIsDisable}
					handlertype={'login'}
					type='submit'>
					login
				</button>
				<NavLink className={styles.changeAuth} to={'/reg'}>
					{'Registration '}
				</NavLink>
			</div>
		);
	};
	const RegBtn = () => {
		return (
			<li className={styles.footer}>
				<button
					className={ButtonClassName}
					handlertype={'reg'}
					onClick={sendFormHandler}
					disabled={buttonIsDisable}
					type='submit'>
					Registration
				</button>
				<NavLink className={styles.changeAuth} to={'/'}>
					{'login '}
				</NavLink>
			</li>
		);
	};

	return (
		<div className={styles.authPage}>
			<div className={styles.auth}>
				<AlertContainer styleOptions={styles.alert} />
				<h1 className={styles.logo}>Note App</h1>
				<form className={styles.form}>
					<input
						placeholder='User name or login'
						onChange={e => {
							changeLoginInput(e.target.value);
						}}
						value={loginInput}
						type='text'
					/>
					<input
						placeholder='Password'
						onChange={e => {
							changePasswordInput(e.target.value);
						}}
						value={passwordInput}
						type='password'
					/>
					<Routes>
						<Route path='/' element={<LoginBtn />} />
						<Route path='/reg' element={<RegBtn />} />
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</form>
			</div>
		</div>
	);
};

export default Auth;
