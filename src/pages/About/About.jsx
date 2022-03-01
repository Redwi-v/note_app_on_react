import { Fragment } from 'react';
import styles from './about.module.scss';

const About = props => {
	return (
		<Fragment>
			<div className={`container ${styles.aboutWraper}`}>
				<h1 className={styles.title}>About page</h1>
				<p className={styles.par}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, quia ipsam,
					corporis veritatis qui assumenda sed error at mollitia nisi magni saepe atque
					maiores aspernatur ex vel sequi. Porro, adipisci. Lorem ipsum dolor, sit amet
					consectetur adipisicing elit. Eaque sequi ullam eligendi veritatis corrupti,
					odit eum fuga ipsam deleniti culpa at similique in minima totam optio natus
					quaerat, cumque unde.
				</p>
			</div>
		</Fragment>
	);
};

export default About;
