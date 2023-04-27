import userReducer from './user/reducer';
import autorReducers from './authors/actionCreators';
import coursesReducer from './courses/reducer';

import { configureStore } from '@reduxjs/toolkit';

let RootReducer = {
	userReducer,
	coursesReducer,
	autorReducers,
};

export default configureStore({
	reducer: {
		named: autorReducers,
		// named:RootReducer not are work
	},
});
