import { useSelector } from 'react-redux';
import store from '..';
import { _name1 } from '../authors/actionCreators';

export function authorList() {
	useSelector((state) => {
		return state.autorReducers;
	});
}

// export const coursesList = () => {
// 	return useSelector((state) => {
// 		return state.coursesReducer.initialList;
// 	});
// };

export const coursesList = (state) => state.courcesReducer.initialList;
