import axios from 'axios';
export function createAxiosChild({ url }) {
	const axiosChild = axios.create({
		baseURL: url,
	});
	return axiosChild;
}
