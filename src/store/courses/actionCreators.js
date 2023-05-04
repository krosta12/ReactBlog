import { createSlice } from '@reduxjs/toolkit';

import { getterCourses } from '../../helpers/parser';

import { get } from '../../API/apiWorker';

const actionCreators = createSlice({
	name: 'coursesSlice',
	initialState: { initialList: null },
	reducers: {
		getAllCourses(state) {
			// let i = getterCourses();
			// console.log(i);
			let coursesList = get('/courses/all');

			coursesList.then((list) => {
				let allCourses = list.data.result;

				let authorsList = get('/authors/all');
				authorsList.then((list) => {
					let allAuthors = list.data.result;

					function replaceIds(allCourses, id, name) {
						allCourses.map((el, i) => {
							el.authors.map((el, index) => {
								if (el == id) {
									allCourses[i].authors[index] = name;
								}
							});
						});
					}

					allAuthors.map((el) => replaceIds(allCourses, el.id, el.name));
					console.log(allCourses); //it's work
					state.initialList = [...allCourses]; //it's broke all
				});
			});
			return state;
		}, //must rename
		name_2(state) {
			return state;
		},
	},
});

export const { getAllCourses, name_2 } = actionCreators.actions;

export default actionCreators.reducer;
