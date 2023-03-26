import axios from 'axios';
export function createUserMe() {
	const userMe = axios.create({
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	});
	return userMe;
}
