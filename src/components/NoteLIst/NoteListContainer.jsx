import { connect } from 'react-redux';
import NoteLIst from './NoteList';
import { setNotes } from '../../Redux/noteListReduser';
import { deleteNote } from '../../Redux/formReduser';

const NpteListContainer = props => {
	const {
		notes,
		isLoading,
		// methods
		setNotes,
		deleteNote,
	} = props;

	const deleteNoteHandler = e => {
		deleteNote(e.target.getAttribute('_id'));
	};

	return (
		<NoteLIst
			notes={notes}
			isLoading={isLoading}
			//methods
			setNotes={setNotes}
			deleteNoteHandler={deleteNoteHandler}
		/>
	);
};

const mapStateToProps = state => {
	return {
		notes: state.noteListReduser.notes,
		isLoading: state.noteListReduser.isLoading,
	};
};
const dispatchs = {
	setNotes,
	deleteNote,
};

export default connect(mapStateToProps, dispatchs)(NpteListContainer);
