import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../../API/apiWorker';
import { getAllCourses } from '../courses/actionCreators';
import store from '..';
import { getAllAuthorsSecondLayer } from '../../API/secondLayer';
import { getAllCoursesSecondLayer } from '../../API/secondLayer';
import { SaveUser } from '../user/actionCreators';

async function getterCourses() {
	return await getAllCoursesSecondLayer();
}

async function getterAuthors() {
	return await getAllAuthorsSecondLayer();
}

export const compiledCoursesList = createAsyncThunk(
	'coursesSlice/fetch',
	async () => {
		let coursesList = await getterCourses();
		let authorsList = await getterAuthors();

		let allAuthors = authorsList.data.result;
		let allCourses = coursesList.data.result;

		allAuthors.map((el) => replaceIds(allCourses, el.id, el.name));

		store.dispatch(getAllCourses(allCourses)); //without 'store' dosen't work
		// return allCourses;  Cannot access 'compiledCoursesList' before initialization (in slice file)
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
		return allAuthorsList;
	}
);

export const UserGetter = createAsyncThunk('userReducers/fetch', async () => {
	let authors = await getUserMe();
	store.dispatch(SaveUser(authors.data.result));
});
