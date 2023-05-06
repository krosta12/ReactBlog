import { createSlice } from '@reduxjs/toolkit';

import { getterCourses } from '../../helpers/parser';

import { get } from '../../API/apiWorker';

const actionCreators = createSlice({
	name: 'coursesSlice',
	initialState: { initialList: null },
	reducers: {
		getAllCourses(state, payload) {
			console.log('list updated!');
			state.initialList = [...payload.payload];
			return state;
		}, //must rename
		setCreatedCource(state, payload) {
			state.initialList = [...state.initialList, payload.payload];
			return state;
		},
	},
});

export const { getAllCourses, setCreatedCource } = actionCreators.actions;

export default actionCreators.reducer;
