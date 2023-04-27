import { createSlice } from '@reduxjs/toolkit';
// import { name1, name2, name3 } from './reducer';

const authorsInitialState = ['example'];

export const authorSlice = createSlice({
	name: 'named',
	initialState: { authorsInitialState },
	reducers: {
		// _name1: name1,
		// _name2: name2,
		// _name3: name3,
		_name1: (state) => {
			state.authorsInitialState.push('w');
			console.log(state.authorsInitialState[2]);
			console.log('NAME1');
			//to check it, you must click on "search" button
		},
		_name2: (state) => {
			console.log(state);
			console.log('NAME2');
		},
		_name3: (state) => {
			console.log(state);
			console.log('NAME3');
		},
	},
});

export const { _name1, _name2, _name3 } = authorSlice.actions;

export default authorSlice.reducer;
