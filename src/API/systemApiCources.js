// import { mockedAuthorsList } from '../const';
import apiWorker from './apiWorker';

function systemApiCources(setPostse, key, setKey, setAuthorList) {
	if (key) {
		console.log('DSD');
		let voids = new apiWorker();
		console.log('ds');
		voids.get('http://localhost:4000/courses/all').then((el) => {
			let ReadyInfo = el.data.result;
			let mockedAuthorsList;
			voids
				.get('http://localhost:4000/authors/all')
				.then((el) => {
					mockedAuthorsList = el.data.result;
					setAuthorList(mockedAuthorsList);
				})
				.then(() => {
					function help(promose, name) {
						ReadyInfo.map((el, i) => {
							el.authors.map((el, index) => {
								if (el == promose) {
									ReadyInfo[i].authors[index] = name;
								}
							});
						});
					}
					mockedAuthorsList.map((el) => help(el.id, el.name));
				})
				.then(() => {
					setKey(false);
					setPostse(ReadyInfo);
				});
		});
	}
}
export default systemApiCources;
