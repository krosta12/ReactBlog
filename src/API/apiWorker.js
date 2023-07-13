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

CreateUserMe.interceptors.response.use((config) => {
	return config;
});

export async function post(url, object) {
	const el = await CreateUserMe.post(url, object);
	return el;
}

export async function get(url) {
	const el = await CreateUserMe.get(url);
	return el;
}

export async function _delete(url) {
	await CreateUserMe.delete(url);
}

export async function put(url, post, id) {
	await CreateUserMe.put(`${url}/${id}`, post);
}
