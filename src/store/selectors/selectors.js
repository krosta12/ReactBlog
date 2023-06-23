export const selectCoursesList = (state) => state.coursesReducer.initialList;
export const selectAllAuthorsList = (state) =>
	state.authorReducers.authorsInitialState;
export const user = (state) => state.userReducer.user;
