import CreateUserMe from './helpers/CreateUserMe';

export async function post(url, object) {
	let userMe = CreateUserMe(); //if I don’t call it like that, then the token will be static
	const el = await userMe.post(url, object);
	return el;
}

export async function get(url) {
	let userMe = CreateUserMe();
	const el = userMe.get(url);
	return el;
}
export async function _delete(url) {
	let userMe = CreateUserMe();
	userMe.delete(url);
}
