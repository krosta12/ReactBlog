import { createSlice } from '@reduxjs/toolkit';

const authorsInitialState = [];

export const authorSlice = createSlice({
	name: 'authorReducerSlice',
	initialState: authorsInitialState,
	reducers: {
		_name1: (state) => {
			console.log(state);
			console.log('NAME1');
			return state; //must rename reducers!
		},
		_name2: (state) => {
			console.log(state);
			console.log('NAME2');
			return state;
		},
		_name3: (state) => {
			console.log(state);
			console.log('NAME3');
			return state;
		},
	},
});

export const { _name1, _name2, _name3 } = authorSlice.actions;

export default authorSlice.reducer;
