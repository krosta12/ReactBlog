import { createSlice } from '@reduxjs/toolkit';

import { authorsGetter } from '../asyncAPI/ReduxAsyncRequests';

const authorSlice = createSlice({
	name: 'authorReducerSlice',
	initialState: {
		authorsInitialState: [
			{ name: '111111', id: '715de352-9124-448c-9a15-4285c1390999' },
			{ name: 'SECOND', id: 'b82afc53-804d-407c-8656-b3cdfeb986f1' },
		],
	},
	reducers: {
		getAllAuthors: (state, action) => {
			state.authorsInitialState = [...action.payload];
			return state;
		},
		setAuthorsToList: (state, action) => {
			console.log('d');
			state.authorsInitialState = [
				...state.authorsInitialState,
				action.payload,
			];
			return state;
		},
	},
	// extraReducers: {
	// 	[authorsGetter.fulfilled]: (state, action) => {
	// 		try {
	// 			state.authorsInitialState = action.payload;
	// 		} catch (error) {
	// 			alert(`error - ${error.status}`);
	// 		}
	// 	},
	// 	[authorsGetter.rejected]: () => {
	// 		alert('error, try later');
	// 	},
	// },
});

export const { getAllAuthors, setAuthorsToList } = authorSlice.actions;

export default authorSlice.reducer;
