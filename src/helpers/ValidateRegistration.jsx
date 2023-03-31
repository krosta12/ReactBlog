import { post } from '../API/apiWorker';

import { useNavigate } from 'react-router-dom';

async function ValidateRegistration({ name, email, password }) {
	const navigate = useNavigate();

	if (password && email && name) {
		(await post('/register', {
			password: password,
			email: email,
			name: name,
		}))
			? navigate('/login')
			: alert('err');
	}
}

export default ValidateRegistration;
