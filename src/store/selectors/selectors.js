import { useSelector } from 'react-redux';
import store from '..';
import { _name1 } from '../authors/actionCreators';

export function authorList() {
	useSelector((state) => {
		return state.autorReducers;
	});
}

export function coursesList() {
	useSelector((state) => {
		console.log(state);
		return state;
	});
}

//must all fix
