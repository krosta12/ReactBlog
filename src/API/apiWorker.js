import axios from 'axios';
import { URL } from '../const';
const CreateUserMe = axios.create({
	baseURL: URL,
});

CreateUserMe.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token');

		if (token) {
			config.headers.Authorization = token;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

CreateUserMe.interceptors.response.use(
	(config) => {
		console.log(config);
		return config;
	},
	(error) => {
		if (error.response.status == 401) {
			//refresh code
		}
	}
);

export async function post(url, object) {
	const el = await CreateUserMe.post(url, object);
	return el;
}

export async function get(url) {
	const el = CreateUserMe.get(url);
	return el;
}
export async function _delete(url) {
	CreateUserMe.delete(url);
}
