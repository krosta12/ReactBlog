import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import Button2 from '../../common/Button/Button2';
import getTockens from '../../helpers/getTockens';
import apiWorker from '../../API/apiWorker';

export default function Login() {
	// const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	// const [nameBool, setNameBool] = useState(false);
	// const [passwordBool, setPasswordBool] = useState(false);
	// const [gmailBool, setEmailBool] = useState(false);

	const navigate = useNavigate();
	async function validate() {
		if (password && email) {
			const result = await apiWorker('http://localhost:4000/login', 'POST', {
				email: email,
				password: password,
			});
			// result.data.result
			// 	? localStorage.setItem('token', result.data.result)
			// 	: alert('invalid data'); не работает

			if (result.data.result) {
				localStorage.setItem('token', result.data.result);
				navigate('/');
			} else {
				alert('invalid data');
			}
		}
	}

	return (
		<div className='RegisterBox'>
			<form
				onSubmit={(env) => {
					env.preventDefault();

					validate();
				}}
			>
				<h1>Login</h1>

				<div className='inputToRegister'>
					<label>Gmail</label>
					<input
						type='email'
						value={email}
						onChange={(el) => setEmail(el.target.value)}
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
