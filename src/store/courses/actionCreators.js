import { createSlice } from '@reduxjs/toolkit';

const actionCreators = createSlice({
	name: 'coursesSlice',
	initialState: { initialList: null },
	reducers: {
		getAllCourses(state, payload) {
			console.log('list updated!');
			state.initialList = [...payload.payload];
			return state;
		},
		setCreatedCource(state, payload) {
			state.initialList = [...state.initialList, payload.payload];
			return state;
		},
	},
});

export const { getAllCourses, setCreatedCource } = actionCreators.actions;

export default actionCreators.reducer;
