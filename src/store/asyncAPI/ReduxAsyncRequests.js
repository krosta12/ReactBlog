import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCourses, setCreatedCource } from '../courses/actionCreators';
import { allAuthorsGetter, allCoursesGetter } from '../../API/secondLayer';
import { saveUser } from '../user/actionCreators';

async function getterCourses() {
	return await allCoursesGetter();
}

async function getterAuthors() {
	return await allAuthorsGetter();
}

export const compiledCoursesList = createAsyncThunk(
	'coursesSlice/fetch',
	async (_, { dispatch }) => {
		let coursesList = await getterCourses();
		let authorsList = await getterAuthors();

		let allAuthors = authorsList.data.result;
		let allCourses = coursesList.data.result;

		allAuthors.map((el) => replaceIds(allCourses, el.id, el.name));

		dispatch(getAllCourses(allCourses));
	}
);

function replaceIds(allCourses, id, name) {
	try {
		allCourses.map((el, i) => {
			el.authors.map((el, index) => {
				if (el == id) {
					allCourses[i].authors[index] = name;
				}
			});
		});
	} catch (error) {
		alert('fatal error');
	}
}

export const authorsGetter = createAsyncThunk(
	'authorReducerSlice/fetch',
	async () => {
		let allAuthorsList = await getterAuthors();
		allAuthorsList = allAuthorsList.data.result;
		console.log(allAuthorsList);
		return allAuthorsList;
	}
);

export const UserGetter = createAsyncThunk(
	'userReducers/fetch',
	async (_, { dispatch }) => {
		let authors = await getUserMe();
		dispatch(saveUser(authors.data.result));
	}
);

export const coursePosting = createAsyncThunk(
	'coursesSlice/fetch/addCourse',
	async (course, { dispatch }) => {
		dispatch(setCreatedCource(course));
	}
);
