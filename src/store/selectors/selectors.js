export const selectCoursesList = (state) =>
	state.mockedCourcesReducer.initialList;
export const selectAllAuthorsList = (state) =>
	state.mockedAuthorReducers.authorsInitialState;
export const selectLocalUser = (state) => state.mokedUserReducer.user;
