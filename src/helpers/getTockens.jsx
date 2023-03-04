import axios from 'axios';

function getTockens() {
	axios.interceptors.response.use(
		(res) => {
			console.log(res.data);
			localStorage.setItem('token', res.data.result);
			navigate('/');
		},
		(err) => {
			err;
		}
	);
}

export default getTockens;
