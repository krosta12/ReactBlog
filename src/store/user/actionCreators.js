import { createSlice } from '@reduxjs/toolkit';

const userActionCreators = createSlice({
	name: 'userReducers',
	initialState: {
		isAuth: false,
		name: '',
		email: '',
		token: '',
	},
	reducers: {
		saveUser(state, action) {
			state.isAuth = true;
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.token = localStorage.getItem('token');
			return state;
		},
		deleteUser(state) {
			state.isAuth = false;
			state.name = '';
			state.email = '';
			state.token = '';
			return state;
		},
	},
});

export const { saveUser, deleteUser } = userActionCreators.actions;
export default userActionCreators.reducer;
