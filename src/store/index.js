import userReducer from './user/actionCreators';
import authorReducers from './authors/actionCreators';
import coursesReducer from './courses/actionCreators';

import { configureStore } from '@reduxjs/toolkit';

const RootReducer = {
	userReducer,
	coursesReducer,
	authorReducers,
};

let store = configureStore({
	reducer: RootReducer,
});

export default store;
