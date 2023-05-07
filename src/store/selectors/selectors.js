import { useSelector } from 'react-redux';
import { _name1 } from '../authors/actionCreators';

export const coursesList = () =>
	useSelector((state) => {
		return state.coursesReducer.initialList;
	});
