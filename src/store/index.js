import userReducer from './user/actionCreators';
import authorReducers from './authors/actionCreators';
import coursesReducer from './courses/actionCreators';

import { configureStore } from '@reduxjs/toolkit';

let RootReducer = {
	userReducer,
	coursesReducer,
	authorReducers,
};

let store = configureStore({
	reducer: RootReducer, //must learn
});

export default store;
