import { createSlice } from '@reduxjs/toolkit';
import { compiledCoursesList } from '../asyncAPI/ReduxAsyncRequests';

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
	},
	extraReducers: {
		// [compiledCoursesList.pending]: (state, action) => {},
		// [compiledCoursesList.fulfilled]: (state, action) => {
		// 	console.log(action.payload);
		// },
		// [compiledCoursesList.rejected]: (state, action) => {},  Cannot access 'compiledCoursesList' before initialization
	},
});

export const { getAllCourses, setCreatedCource } = actionCreators.actions;

export default actionCreators.reducer;
