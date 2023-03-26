import { postAsMe, post } from '../apiWorker';
function systemApiCreateCource(post, setKey) {
	post('http://localhost:4000/courses/add', post, setKey);
}

export default systemApiCreateCource;
