export const selectCoursesList = (state) => state.coursesReducer.initialList;
export const selectAllAuthorsList = (state) =>
	state.authorReducers.authorsInitialState;
export const selectLocalUser = (state) => state.userReducer.user;
