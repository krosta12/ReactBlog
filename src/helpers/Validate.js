import { post } from '../API/apiWorker';

function Validate({ password, email, name }) {
	if (password && email && name) {
		console.log('f');
		post('/register', {
			password: password,
			email: email,
			name: name,
		})
			? navigate('/login')
			: alert('err');
	}
}

export default Validate;
