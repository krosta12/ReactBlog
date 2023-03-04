import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import Button2 from '../../common/Button/Button2';
import getTockens from '../../helpers/getTockens';

export default function Login() {
	// const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [gmail, setGmail] = useState('');

	// const [nameBool, setNameBool] = useState(false);
	// const [passwordBool, setPasswordBool] = useState(false);
	// const [gmailBool, setGmailBool] = useState(false);

	const standartAxios = axios;

	const navigate = useNavigate();

	return (
		<div className='RegisterBox'>
			{/* что делать с action */}
			<form
				onSubmit={(env) => {
					env.preventDefault();
					//сюда надо нормальную проверку от back-a
					// password.split('').length > 5
					// 	? setPasswordBool(true)
					// 	: alert('write Psasword');
					// gmail ? setGmailBool(true) : alert('write email');

					if (password && gmail) {
						// console.log('123');
						standartAxios.post('http://localhost:4000/login', {
							email: gmail,
							password: password,
						});

						axios.interceptors.response.use(
							(res) => {
								// console.log(res.data);
								localStorage.setItem('token', res.data.result);
								navigate('/');
							},
							(err) => {
								err;
							}
						);

						// .then((response) => {
						// 	console.log(response);
						// 	if (response.status < 400) {
						// 		//посмотреть какие статус коды не норм
						// 		alert('OK');
						// 	} else {
						// 		alert('error');
						// 	}
						// });
					}
				}}
			>
				<h1>Login</h1>

				<div className='inputToRegister'>
					<label>Gmail</label>
					<input
						type='email'
						value={gmail}
						onChange={(el) => setGmail(el.target.value)}
					/>
				</div>
				<div className='inputToRegister'>
					<label>password</label>
					<input
						type='password'
						value={password}
						onChange={(el) => setPassword(el.target.value)}
					/>
				</div>
				<Button2 text='Enter' type='submit' />
			</form>

			<p>
				if you have an account you can{' '}
				<Link to={'/registration'}>Registration</Link>
			</p>
		</div>
	);
}
