import { createSlice } from '@reduxjs/toolkit';

const userActionCreators = createSlice({
	name: 'userReducer',
	initialState: {
		user: { isAuth: false, name: '', email: '', token: '', role: '' },
	},
	reducers: {
		saveUser(state, action) {
			state.user.isAuth = true;
			state.user.name = action.payload.name;
			state.user.email = action.payload.email;
			state.user.token = localStorage.getItem('token');
			state.user.role = action.payload.role;
			return state;
		},
		deleteUser(state) {
			state.user.token = '';
			state.user.role = '';
			return state;
		},
	},
});

export const { saveUser, deleteUser } = userActionCreators.actions;
export default userActionCreators.reducer;
