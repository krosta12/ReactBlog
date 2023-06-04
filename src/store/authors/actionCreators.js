import { createSlice } from '@reduxjs/toolkit';

import { authorsGetter } from '../asyncAPI/ReduxAsyncRequests';

const authorSlice = createSlice({
	name: 'authorReducerSlice',
	initialState: { authorsInitialState: null },
	reducers: {
		getAllAuthors: (state, action) => {
			state.authorsInitialState = [...action.payload];
			return state;
		},
		setAuthorsToList: (state, action) => {
			state.authorsInitialState = [
				...state.authorsInitialState,
				action.payload,
			];
			return state;
		},
	},
	extraReducers: {
		[authorsGetter.fulfilled]: (state, action) => {
			try {
				state.authorsInitialState = action.payload;
			} catch (error) {
				alert(`error - ${error.status}`);
			}
		},
		[authorsGetter.rejected]: () => {
			alert('error, try later');
		},
	},
});

export const { getAllAuthors, setAuthorsToList } = authorSlice.actions;

export default authorSlice.reducer;
