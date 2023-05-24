//must create function

import DateGenerator from './dateGenerator';
import { post } from '../API/apiWorker';
import store from '../store';
import { setCreatedCource } from '../store/courses/actionCreators';
import { postCoursesAddSecondLayer } from '../API/secondLayer';

export async function createCourseFunction(
	title,
	description,
	duration,
	applAuthors,
	setDescription,
	setTitle,
	setDuration,
	setApplAuthor,
	setAuthorList,
	mockedAuthorsList,
	setIsEdit
) {
	if (
		title.split('').length > 3 &&
		description.split('').length > 3 &&
		applAuthors.length > 0 &&
		duration > 0
	) {
		let newAuthorsList = [];

		applAuthors.map((el) => newAuthorsList.push(el.id));

		let postToPublicate = {
			title: title,
			description: description,
			creationDate: DateGenerator(),
			duration: parseInt(duration),
			authors: newAuthorsList,
		};

		postCoursesAddSecondLayer(postToPublicate);

		store.dispatch(setCreatedCource(postToPublicate));
		setTitle('');
		setDescription('');
		setDuration(0);
		setApplAuthor([]);
		setIsEdit(false);
	} else {
		alert('check all labels');
	}
}
