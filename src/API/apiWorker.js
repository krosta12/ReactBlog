import { createUserMe } from './helpers/CreateUserMe';
import { createAxiosChild } from './helpers/CreateAxiosChild';

export async function post(url, object, setKey) {
	const userMe = createUserMe();
	const el = await userMe.post(url, object);
	!!setKey && setKey(true);
	return el;
}

export async function get(url) {
	let userMe = createUserMe();
	const el = userMe.get(url);
	return el;

	// axiosChild.get(url); он вроде не надо, но проветить сейчас не могу
}
export async function _delete(url) {
	let userMe = createUserMe();
	userMe.delete(url).then(alert('ad'));
}
