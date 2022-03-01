import styles from './alert.module.scss';

const Alert = ({ alert }) => {
	if (!alert.isvisible) return null;

	const alertTypes = {
		danger: styles.danger,
		good: styles.good,
		worning: styles.worning,
	};

	return (
		<div
			className={`${styles.alert} ${alertTypes[alert.alertType]} ${alert.styleOptions}`}>
			<p className={styles.text}>{alert.text}</p>
			<button
				className={styles.close}
				onClick={() => {
					alert.toggleAlertVisible(false);
				}}>
				&#10006;
			</button>
		</div>
	);
};

export default Alert;
