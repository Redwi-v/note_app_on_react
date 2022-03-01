import preloader from '../../assets/preloader.gif';
import styles from './preloader.module.scss';

const Preloader = props => {
	return (
		<div className={styles.preloader}>
			<img className={styles.gif} src={preloader} alt='loading' />
		</div>
	);
};

export default Preloader;
