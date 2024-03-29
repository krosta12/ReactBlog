import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../common/Button/Button';

import { login } from '../../API/secondLayer';

import '../../CSS/styles.css';

export default function Login({ setJwtToken }) {
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [isError, setIsError] = useState(false);

	const navigate = useNavigate();
	async function validate() {
		if (password && email) {
			const el = await login({
				email: email,
				password: password,
			});

			if (el.data.result) {
				localStorage.setItem('token', el.data.result);
				setJwtToken(localStorage.getItem('token'));

				navigate('/courses');
			} else {
				setIsError(true);
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
				{isError ? (
					<div>
						<h3>error, try later</h3>
					</div>
				) : (
					<>
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
					</>
				)}
			</form>

			<p>
				if you have an account you can{' '}
				<Link to={'/registration'}>Registration</Link>
			</p>
		</div>
	);
}
