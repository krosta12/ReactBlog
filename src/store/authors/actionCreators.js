import { createSlice } from '@reduxjs/toolkit';

const authorSlice = createSlice({
	name: 'authorReducerSlice',
	initialState: { authorsInitialState: null },
	reducers: {
		getAllAuthors: (state, action) => {
			state.authorsInitialState = [...action.payload];
			return state; //must rename reducers!
		},
		setAuthorsToList: (state, action) => {
			state.authorsInitialState = [
				...state.authorsInitialState,
				action.payload,
			];
			return state;
		},
		_name3: (state) => {
			console.log(state);
			console.log('NAME3');
			return state;
		},
	},
});

export const { getAllAuthors, _name2, _name3 } = authorSlice.actions;

export default authorSlice.reducer;
