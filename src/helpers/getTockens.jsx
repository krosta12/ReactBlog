import axios from 'axios';

function getTockens() {
	axios.interceptors.response.use(
		(res) => {
			localStorage.setItem('token', res.data.result);
			navigate('/');
		},
		(err) => {
			err;
		}
	);
}

export default getTockens;
