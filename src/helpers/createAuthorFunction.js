import { useDispatch } from 'react-redux';
import { get } from '../API/apiWorker';
let dispatch = useDispatch();
export const createAuthorFunction = async (inputAuthorName, post) => {
	if (inputAuthorName.split('').length > 3) {
		await post('authors/add/', {
			name: inputAuthorName,
		});

		let w = await get('authors/all');
		w = w.data.result;
		let lastElem = w[w.length - 1];
		dispatch(setAuthorsToList(lastElem));
		setAuthorList((el) => [...el, lastElem]); //BIG BUG! if name of this variable != w, it's doesn't work
	} else {
		alert('Write correct name');
	}
};
