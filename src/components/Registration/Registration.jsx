import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Button from '../../common/Button/Button';

import '../../CSS/AllAppStyles.css';

import Validate from '../../helpers/ValidateFunction';

export default function Reg(props) {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const navigate = useNavigate();

	function Register(env) {
		env.preventDefault();
		Validate({ password, email, name, navigate });
	}

	return (
		<div className='RegisterBox'>
			<form>
				<h1>Registration</h1>
				<div className='inputToRegister'>
					<label>Name</label>
					<input
						value={name}
						onChange={(el) => setName(el.target.value)}
						placeholder='name'
						type='text'
					/>
				</div>
				<div className='inputToRegister'>
					<label>Email</label>
					<input
						value={email}
						onChange={(el) => setEmail(el.target.value)}
						type='email'
						placeholder='Enter Email'
					/>
				</div>
				<div className='inputToRegister'>
					<label>Password</label>
					<input
						value={password}
						onChange={(el) => setPassword(el.target.value)}
						type='password'
						placeholder='Enter Password'
					/>
				</div>
				<Button
					text='Registration'
					onClick={(env) => {
						Register(env);
					}}
				/>
			</form>

			<p>
				if you have an account you can <Link to={'/login'}>Log In</Link>
			</p>
		</div>
	);
}
