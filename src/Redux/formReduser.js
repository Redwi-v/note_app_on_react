import noteApi from '../API/NoteApi';
import { addNewNote, deleteNoteFromState } from './noteListReduser';
import { toggleAlertVisible, chageAletText, chageAletType } from './alertReduser';

const UPDATE_VALUE = 'UPDATE_VALUE';

const initialState = {
	value: '',
};

export const formReduser = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_VALUE:
			return { ...state, value: action.newValue };
		default:
			return state;
	}
};

export const updateFormValue = newValue => {
	return {
		type: UPDATE_VALUE,
		newValue,
	};
};

//thunks

//TO DO: перенести санки в noteListRed
export const sendNote = note => {
	return async dispatch => {
		try {
			const date = new Date().toISOString().slice(0, 10);
			const noteItem = { note, date };
			const createdNote = await noteApi.sendNote(noteItem);

			dispatch(addNewNote(createdNote));
			chageAletType('good');
			chageAletText('Заметка создана: ' + note);
			toggleAlertVisible(true);
		} catch (error) {
			//TO DO: сделать нормальную обработку ошибок
			dispatch(chageAletType('danger'));
			dispatch(chageAletText(error.response.data.massage));
			dispatch(toggleAlertVisible(true));
		}
	};
};

//TO DO: зделать обработку ошибок
export const deleteNote = noteId => {
	return async dispatch => {
		await noteApi.deleteNote(noteId);
		dispatch(deleteNoteFromState(noteId));
	};
};
