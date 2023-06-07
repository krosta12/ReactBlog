import DateGenerator from './dateGenerator';
import { allAuthorsGetter, coursesAdd } from '../API/secondLayer';
import { allCoursesGetter } from '../API/secondLayer';

export async function createCourse(
	title,
	description,
	duration,
	applAuthors,
	setDescription,
	setTitle,
	setDuration,
	setApplAuthor,
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

		await coursesAdd(postToPublicate);
		const allCourses = await allCoursesGetter();
		const lastCourse =
			allCourses.data.result[allCourses.data.result.length - 1];

		replacer(newAuthorsList, allAuthors);
		replacer(lastCourse.authors, allAuthors);

		function replacer(itereribleList, comparativeList) {
			itereribleList.map((elA, id2) => {
				comparativeList.map((el, id) => {
					if (elA == el.id) {
						itereribleList[id2] = comparativeList[id].name;
					}
				});
			});
			// return newAuthorsList;
		}

		setTitle('');
		setDescription('');
		setDuration(0);
		setApplAuthor([]);
		setIsEdit(false);
		return lastCourse;
	} else {
		alert('check all labels');
	}
}
