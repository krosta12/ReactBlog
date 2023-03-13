import apiWorker from '../apiWorker';

function systemApiCreateCource(post, setKey) {
	let api = new apiWorker();
	console.log(post);
	api.postMe('http://localhost:4000/courses/add', post, setKey);
}

export default systemApiCreateCource;
