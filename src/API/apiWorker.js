import axios from 'axios';

const userMe = axios.create();
const authlnterceptor = (config) => {
	config.headers = config.headers;
	config.headers.Authorization = localStorage.getItem('token');
	return config;
};
userMe.interceptors.request.use(authlnterceptor);

async function apiWorker(url, method, object) {
	const axiosChild = axios.create({
		baseURL: url,
		method: method,
		// headers: headers,
	});

	const o = {
		name: object?.name,
		password: object?.password,
		email: object?.email,
	};

	if (method == 'POST') {
		const el = await axiosChild.post(url, o);
		return el;
	} else if (method == 'GET') {
		const el = await axiosChild.get(url);
		return el;
	} else if (method == 'GET_MY') {
		const el = await userMe.get(url);
		return el;
	} else if (method == 'DELETE') {
		userMe
			.delete('http://localhost:4000/logout')
			.then(alert('ad'))
			.catch((el) => alert('err'));
	}

	// axios.post(url, {
	// 	name: object.name,
	// 	password: object.password,
	// 	email: object.email,
	// });

	// return isEnd;
}

export default apiWorker;
