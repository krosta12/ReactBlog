import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const userActionCreators = createSlice({
	name: 'userReducers',
	initialState: initialState,
	reducers: {
		name_1(state) {
			return state;
		}, //must rename
		name_2(state) {
			return state;
		},
	},
});

export const { name_1, name_2 } = userActionCreators.actions;
export default userActionCreators.reducer;
