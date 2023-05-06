import { useSelector } from 'react-redux';
import { _name1 } from '../authors/actionCreators';

export function authorList() {
	useSelector((state) => {
		return state.autorReducers;
	});
}

export const coursesList = (state) => state.courcesReducer.initialList;
