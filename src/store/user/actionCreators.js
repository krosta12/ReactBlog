import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const userActionCreators = createSlice({
	name: 'userReducers',
	initialState: initialState,
	reducers: {
		getAllCourses(state) {
			return state;
		}, //must rename
		name_2(state) {
			return state;
		},
	},
});

export const { getAllCourses, name_2 } = userActionCreators.actions;
export default userActionCreators.reducer;
