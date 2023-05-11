import { useSelector } from 'react-redux';

export const GetterCoursesListFromRedux = () =>
	useSelector((state) => {
		return state.coursesReducer.initialList;
	});
export const GetterAuthorsListFromRdux = () =>
	useSelector((state) => {
		return state.authorReducers.authorsInitialState;
	});
