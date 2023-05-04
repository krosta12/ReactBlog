import { get } from '../API/apiWorker';

export function getterCourses() {
	let coursesList = get('/courses/all');

	coursesList.then((list) => {
		let allCourses = list.data.result;
		return getterAuthor(allCourses);
	}); //must create incaptsulation and getAll authors
}

function getterAuthor(allCourses) {
	let authorsList = get('/authors/all');
	authorsList.then((list) => {
		let allAuthors = list.data.result;
		return startReplace(allCourses, allAuthors);
	});
}

function startReplace(allCourses, allAuthors) {
	allAuthors.map((el) => replaceIds(allCourses, el.id, el.name));
	return allCourses;
}

function replaceIds(allCourses, id, name) {
	allCourses.map((el, i) => {
		el.authors.map((el, index) => {
			if (el == id) {
				allCourses[i].authors[index] = name;
			}
		});
	});
}
//was copied and transferred in actionCreators now i don't use it
