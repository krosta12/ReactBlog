//must create function

import DateGenerator from './dateGenerator';
import { post } from '../API/apiWorker';
import store from '../store';
import { setCreatedCource } from '../store/courses/actionCreators';

export function createCourseFunction(
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
		duration
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

		post('/courses/add', postToPublicate);
		store.dispatch(setCreatedCource(postToPublicate));
		setTitle('');
		setDescription('');
		setDuration(0);
		setAuthorList(mockedAuthorsList);
		setApplAuthor([]);
		setIsEdit(false);
	} else {
		alert(0);
	}
}
