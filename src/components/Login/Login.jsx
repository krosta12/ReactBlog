import { useState } from 'react';
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';
import Button from '../../common/Button/Button';
import getTockens from '../../helpers/getTockens';
import apiWorker from '../../API/apiWorker';

export default function Login({ setJwtToken }) {
	let apiHook = new apiWorker();
	// const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	// const [nameBool, setNameBool] = useState(false);
	// const [passwordBool, setPasswordBool] = useState(false);
	// const [gmailBool, setEmailBool] = useState(false);

	const navigate = useNavigate();
	async function validate() {
		if (password && email) {
			const el = await apiHook.post('http://localhost:4000/login', {
				email: email,
				password: password,
			});

			if (el.data.result) {
				setJwtToken('da'); //костыль, спаспающий всё
				localStorage.setItem('token', el.data.result);

				navigate('/corces'); //оно не перекидывает на index
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
				<Button text='Enter' type='submit' />
			</form>

			<p>
				if you have an account you can{' '}
				<Link to={'/registration'}>Registration</Link>
			</p>
		</div>
	);
}
