import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const actionCreators = createSlice({
	name: 'coursesSlice',
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

export const { name_1, name_2 } = actionCreators.actions;

export default actionCreators.reducer;
