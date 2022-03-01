import { createStore, combineReducers, applyMiddleware } from 'redux';
import { alertReduser } from './alertReduser';
import { formReduser } from './formReduser';
import thunkMiddleware from 'redux-thunk';
import { noteListReduser } from './noteListReduser';
import { authReduser } from './authReduser';

let reduses = combineReducers({
	alertReduser,
	formReduser,
	noteListReduser,
	authReduser,
});

export let store = createStore(reduses, applyMiddleware(thunkMiddleware));

window.store = store;
