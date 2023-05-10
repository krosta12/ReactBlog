import { useSelector } from 'react-redux';

export const coursesList = () =>
	useSelector((state) => {
		return state.coursesReducer.initialList;
	});
export const authorsList = () =>
	useSelector((state) => {
		return state.authorReducers.authorsInitialState;
	});
