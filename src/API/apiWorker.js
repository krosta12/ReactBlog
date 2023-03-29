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
