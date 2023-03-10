import apiWorker from './apiWorker';

function systemApiCreateCource(post, setKey) {
	let api = new apiWorker();
	api.postMe('http://localhost:4000/courses/add', post, setKey);
}

export default systemApiCreateCource;
