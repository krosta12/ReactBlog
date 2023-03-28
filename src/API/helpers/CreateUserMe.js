import axios from 'axios';

import { URL } from '../../const';

function CreateUserMe() {
	return axios.create({
		baseURL: URL,
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	});
}

//if I don’t call it like that, then the token will be static

export default CreateUserMe;
