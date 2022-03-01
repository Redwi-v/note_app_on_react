import { useEffect } from 'react';
import Preloader from '../Preloader/Preloader';
import styles from './notelist.module.scss';

const NoteLIst = props => {
	const { notes, setNotes, isLoading, deleteNoteHandler } = props;
	useEffect(() => {
		setNotes();
	}, []);

	const renderItems = notes => {
		return notes.map((note, index) => {
			return (
				<li key={note._id || index} className={styles.item}>
					<span className={styles.number}>{index + 1}.</span>
					<span className={styles.date}>{note.date}</span>
					<p className={styles.text}>{note.note}</p>
					<button className={styles.delete} _id={note._id} onClick={deleteNoteHandler}>
						&#10006;
					</button>
				</li>
			);
		});
	};

	if (isLoading) {
		return <Preloader />;
	}

	return <ul className={styles.list}>{renderItems(notes)}</ul>;
};

export default NoteLIst;
