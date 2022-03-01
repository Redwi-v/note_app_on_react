import appAPI from '../API/NoteApi';

const SET_NOTES = 'SET_NOTES ';
const TOGGLE_LOADING = 'TOGGLE_LOADING';
const ADD_NOTE = 'UPDATE_NOTE_LIST';
const DELETE_NOTE = 'DELETE_NOTE';

const initialState = {
	notes: [],
	isLoading: false,
};

export const noteListReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_NOTES:
			return { ...state, notes: action.notes };
		case TOGGLE_LOADING:
			return { ...state, isLoading: action.isLoading };
		case ADD_NOTE:
			return { ...state, notes: [...state.notes, action.newNote] };
		case DELETE_NOTE:
			let deleteElIndx;
			state.notes.forEach((el, index) => {
				if (el._id === action.noteId) {
					deleteElIndx = index;
				}
			});
			let newNotes = [...state.notes];
			newNotes.splice(deleteElIndx, 1);
			return { ...state, notes: newNotes };
		default:
			return state;
	}
};

//thunks
export const setNotes = () => {
	return dispatch => {
		dispatch(toggleLoading(true));
		appAPI.getNoteList().then(notLIst => {
			dispatch(updatenotes(notLIst));
			dispatch(toggleLoading(false));
		});
	};
};

//Ac

export const addNewNote = newNote => {
	return {
		type: ADD_NOTE,
		newNote,
	};
};
export const deleteNoteFromState = noteId => {
	return {
		type: DELETE_NOTE,
		noteId,
	};
};

export const updatenotes = notes => {
	return {
		type: SET_NOTES,
		notes,
	};
};

export const toggleLoading = value => {
	return {
		type: TOGGLE_LOADING,
		isLoading: value,
	};
};
