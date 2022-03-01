import styles from './navigation.module.scss';
import NavItem from './Nav_item/NavItem';

const NavigationBar = props => {
	const { logoutHandler } = props;

	return (
		<nav className={styles.navigation}>
			<div className={`container ${styles.navigationFlex}`}>
				<div className={styles.logo}>Note App</div>
				<ul className={styles.linkList}>
					<NavItem linkName={'Home'} linkRoute={'/'} />
					<NavItem linkName={'About'} linkRoute={'about'} />
				</ul>
				<button className={styles.logout} onClick={logoutHandler}>
					log out
				</button>
			</div>
		</nav>
	);
};

export default NavigationBar;
