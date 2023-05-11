import { createSlice } from '@reduxjs/toolkit';

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
});

export const { getAllAuthors, setAuthorsToList } = authorSlice.actions;

export default authorSlice.reducer;
