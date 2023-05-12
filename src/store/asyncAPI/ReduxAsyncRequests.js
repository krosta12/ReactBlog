import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../../API/apiWorker';
import { getAllCourses } from '../courses/actionCreators';
import store from '..';
import { getAllAuthors } from '../authors/actionCreators';
import { SaveUser } from '../user/actionCreators';

async function getterCourses() {
	return await get('/courses/all');
}

async function getterAuthors() {
	return await get('/authors/all');
}

export const compiledCoursesList = createAsyncThunk(
	'counterSlice/fetch',
	async () => {
		let coursesList = await getterCourses();
		let authorsList = await getterAuthors();

		let allAuthors = authorsList.data.result;
		let allCourses = coursesList.data.result;

		allAuthors.map((el) => replaceIds(allCourses, el.id, el.name));

		store.dispatch(getAllCourses(allCourses)); //without 'store' dosen't work
	}
);

function replaceIds(allCourses, id, name) {
	allCourses.map((el, i) => {
		el.authors.map((el, index) => {
			if (el == id) {
				allCourses[i].authors[index] = name;
			} //try catch!!
		});
	});
}

export const authorsGetter = createAsyncThunk(
	'authorReducerSlice/fetch',
	async () => {
		let allAuthorsList = await getterAuthors();
		allAuthorsList = allAuthorsList.data.result;
		store.dispatch(getAllAuthors(allAuthorsList));
	}
);

export const UserGetter = createAsyncThunk('userReducers/fetch', async () => {
	let authors = await get('/users/me');
	store.dispatch(SaveUser(authors.data.result));
});
