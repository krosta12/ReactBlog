import { postAsMe } from '../apiWorker';
function systemApiCreateCource(post, setKey) {
	postAsMe('http://localhost:4000/courses/add', post, setKey);
}

export default systemApiCreateCource;
