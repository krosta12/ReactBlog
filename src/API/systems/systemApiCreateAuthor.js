import { postAsMe, get } from '../apiWorker';

async function systemApiCreateAuthor(author, functions, inputAuthorName) {
	let req = await postAsMe(
		'http://localhost:4000/authors/add',
		author,
		() => {}
	);

	let answ = await req.data.result;

	let id3 = await get('http://localhost:4000/authors/all');
	let id2 = await id3.data.result;
	let id = await id2[id2.length - 1].id;

	functions((el) => [...el, { id: id, name: inputAuthorName }]);
}

export default systemApiCreateAuthor;
