import { NavLink } from 'react-router-dom';
import styles from './navItem.module.scss';

const NavItem = props => {
	const { linkName, linkRoute } = props;

	return (
		<li className={styles.item}>
			<NavLink
				className={navData =>
					navData.isActive ? `${styles.active} ${styles.link}` : styles.link
				}
				to={linkRoute}>
				{linkName}
			</NavLink>
		</li>
	);
};

export default NavItem;
