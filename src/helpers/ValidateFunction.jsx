import { post } from '../API/apiWorker';

export default async function Validate({ password, email, name, navigate }) {
	(await postRegisterSecondLayer({
		password: password,
		email: email,
		name: name,
	}))
		? navigate('/login')
		: alert('err');
}
