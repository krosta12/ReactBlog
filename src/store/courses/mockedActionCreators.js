import { createSlice } from '@reduxjs/toolkit';

const actionCreators = createSlice({
	name: 'coursesSlice',
	initialState: {
		initialList: [
			{
				title: 'NEW2322',
				description: '21132dssd2',
				duration: 213,
				authors: [
					'b82afc53-804d-407c-8656-b3cdfeb986f1',
					'715de352-9124-448c-9a15-4285c1390999',
				],
				creationDate: '29/06/2023',
				id: '12d98fbc-5789-4811-8732-64857f221155',
			},
			{
				title: 'SEc112',
				description: '1edfsgfs',
				duration: 31124,
				authors: [
					'715de352-9124-448c-9a15-4285c1390999',
					'b82afc53-804d-407c-8656-b3cdfeb986f1',
				],
				creationDate: '13/07/2023',
				id: 'cc7c5455-2836-40bd-932c-e7d9e06de0b6',
			},
		],
		// [],
	},
	reducers: {
		getAllCourses(state, action) {
			state.initialList = [...action.payload];
			return state;
		},
		setCreatedCource(state, action) {
			state.initialList = [...state.initialList, action.payload];
			return state;
		},
		clearAllCources(state) {
			state.initialList = [];
			return state;
		},
		returnInitialStateTest(state) {
			return state;
		},
	},
});

export const {
	getAllCourses,
	setCreatedCource,
	clearAllCources,
	returnInitialStateTest,
} = actionCreators.actions;

export default actionCreators.reducer;
