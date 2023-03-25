import axios from 'axios';

function createUserMe() {
	const userMe = axios.create({
		headers: {
			Authorization: localStorage.getItem('token'),
		},
	});
	return userMe;
}
function createAxiosChild({ url }) {
	const axiosChild = axios.create({
		baseURL: url,
	});
	return axiosChild;
}

export async function post(url, object) {
	const el = await axios.post(url, object);
	return el;
}
export async function postAsMe(url, object, setKey) {
	const userMe = createUserMe(url);
	const el = await userMe.post(url, object);
	setKey(true);
	return el;
}
export async function get(url) {
	const axiosChild = createAxiosChild(url);
	const el = await axiosChild.get(url);
	return el;
}
export async function getAsMe(url) {
	let userMe = createUserMe();
	const el = await userMe.get(url);

	return el;
}
export async function _delete(url) {
	let userMe = createUserMe();
	userMe.delete(url).then(alert('ad'));
}
