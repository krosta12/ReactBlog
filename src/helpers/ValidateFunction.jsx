import { registration } from '../API/secondLayer';

export default async function Validate({ password, email, name, navigate }) {
	const response = await registration({
		password: password,
		email: email,
		name: name,
	});

	response ? navigate('/login') : navigate('/error');
}
