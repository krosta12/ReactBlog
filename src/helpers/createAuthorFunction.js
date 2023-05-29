import { useDispatch } from 'react-redux';
import { get } from '../API/apiWorker';
import { getAllAuthors } from '../API/secondLayer';
import { authorAdd } from '../API/secondLayer';

let dispatch = useDispatch();
export const createAuthorFunction = async (inputAuthorName, post) => {
	if (inputAuthorName.split('').length > 3) {
		await authorAdd({ name: inputAuthorName });

		let authorList = await getAllAuthors();
		authorList = authorList.data.result;
		let lastElem = authorList[authorList.length - 1];
		dispatch(setAuthorsToList(lastElem));
		setAuthorList((el) => [...el, lastElem]);
	} else {
		alert('Write correct name');
	}
};
