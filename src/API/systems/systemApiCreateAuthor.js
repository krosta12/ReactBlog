import apiWorker from '../apiWorker';

async function systemApiCreateAuthor(author, functions, inputAuthorName) {
	let api = new apiWorker();

	// api
	// 	.postMe('http://localhost:4000/authors/add', author, () => {})
	// 	.then(() => {
	// 		functions((el) => [
	// 			...el,
	// 			{
	// 				id: api
	// 					.get('http://localhost:4000/authors/all')
	// 					.then((apiAns) => apiAns.data.result)
	// 					.then((apiAnsReq) => {
	// 						let index = apiAnsReq.length - 1;
	// 						console.log(apiAnsReq[index].id);
	// 						apiAnsReq[index].id;
	// 					}),
	// 				name: inputAuthorName,
	// 			},
	// 		]);
	// 	});

	let req = await api.postMe(
		'http://localhost:4000/authors/add',
		author,
		() => {}
	);

	let answ = await req.data.result;

	let id3 = await api.get('http://localhost:4000/authors/all');
	let id2 = await id3.data.result;
	let id = await id2[id2.length - 1].id;
	// 	let index = id2.length - 1;
	// 	return id2[index].id;
	// };

	functions((el) => [...el, { id: id, name: inputAuthorName }]);
}

export default systemApiCreateAuthor;
