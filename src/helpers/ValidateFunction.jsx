import { post } from '../API/apiWorker';

export default async function Validate({ password, email, name, navigate }) {
	(await post('/register', {
		password: password,
		email: email,
		name: name,
	}))
		? navigate('/login')
		: alert('err');
}
