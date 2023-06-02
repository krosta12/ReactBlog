import DateGenerator from './dateGenerator';
import store from '../store';
import { allAuthorsGetter, coursesAdd } from '../API/secondLayer';
import { coursePosting } from '../store/asyncAPI/ReduxAsyncRequests';

export async function createCourse(
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

		let allAuthors = await allAuthorsGetter();
		allAuthors = allAuthors.data.result;

		coursesAdd(postToPublicate);

		newAuthorsList.map((elA, id2) => {
			allAuthors.map((el, id) => {
				if (elA == el.id) {
					newAuthorsList[id2] = allAuthors[id].name;
				}
			});
		});

		store.dispatch(coursePosting(postToPublicate));
		setTitle('');
		setDescription('');
		setDuration(0);
		setApplAuthor([]);
		setIsEdit(false);
	} else {
		alert('check all labels');
	}
}
