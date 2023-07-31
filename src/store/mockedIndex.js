import { configureStore } from '@reduxjs/toolkit';
import mockedCourcesReducer from './courses/mockedActionCreators';
import mokedUserReducer from './user/mockedActionCreators';
import mockedAuthorReducers from './authors/mockedActionCreators';

const RootReducer = {
	mokedUserReducer,
	mockedCourcesReducer,
	mockedAuthorReducers,
};

const store = configureStore({
	reducer: RootReducer,
});

export default store;
