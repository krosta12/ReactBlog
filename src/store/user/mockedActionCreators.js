import { createSlice } from '@reduxjs/toolkit';

const userActionCreators = createSlice({
	name: 'userReducers',
	initialState: {
		user: {
			isAuth: true,
			name: 'admin',
			email: 'admin@email.com',
			token: 'token',
		},
	},
	reducers: {
		saveUser(state, action) {
			state.user.isAuth = true;
			state.user.name = action.payload.name;
			state.user.email = action.payload.email;
			state.user.token = localStorage.getItem('token');
			return state;
		},
		deleteUser(state) {
			state.user.isAuth = false;
			state.user.name = '';
			state.user.email = '';
			state.user.token = '';
			return state;
		},
	},
});

export const { saveUser, deleteUser } = userActionCreators.actions;
export default userActionCreators.reducer;
