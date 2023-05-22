import { useSelector } from 'react-redux';

// export const GetterCoursesListFromRedux = () =>
// 	useSelector((state) => {
// 		return state.coursesReducer.initialList;
// 	});
// export const GetterAuthorsListFromRdux = () =>
// 	useSelector((state) => {
// 		return state.authorReducers.authorsInitialState;
// 	});

export const selectCoursesList = (state) => state.coursesReducer.initialList;
export const selectAllAuthorsList = (state) =>
	state.authorReducers.authorsInitialState;
