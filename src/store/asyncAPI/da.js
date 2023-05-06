import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../../API/apiWorker';
import { useDispatch } from 'react-redux';
import { getAllCourses } from '../courses/actionCreators';
import store from '..';

export const fetch = createAsyncThunk('counterSlice/fetch', async () => {
	let coursesList = await get('/courses/all');
	let authorsList = await get('/authors/all');

	let allAuthors = authorsList.data.result;
	let allCourses = coursesList.data.result;

	allAuthors.map((el) => replaceIds(allCourses, el.id, el.name));
	store.dispatch(getAllCourses(allCourses));
});

function replaceIds(allCourses, id, name) {
	allCourses.map((el, i) => {
		el.authors.map((el, index) => {
			if (el == id) {
				allCourses[i].authors[index] = name;
			} //try catch!!
		});
	});
}
