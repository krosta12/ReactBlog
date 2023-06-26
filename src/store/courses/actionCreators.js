import { createSlice } from '@reduxjs/toolkit';

const actionCreators = createSlice({
	name: 'coursesSlice',
	initialState: { initialList: null },
	reducers: {
		getAllCourses(state, action) {
			state.initialList = [...action.payload];
			return state;
		},
		setCreatedCource(state, action) {
			state.initialList = [...state.initialList, action.payload];
			return state;
		},
		replaceCourse(state, action) {
			// state.initialList = [...state.initialList, action.payload];
			return state;
		},
	},
});

export const { getAllCourses, setCreatedCource, replaceCourse } =
	actionCreators.actions;

export default actionCreators.reducer;
