import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { post } from '../../API/apiWorker';
import Button2 from '../../common/Button/Button2';

import '../../App.css';

export default function Reg(props) {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const navigate = useNavigate();

	async function Validate() {
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
				<Button2
					text='Registration'
					onClick={(env) => {
						env.preventDefault();
						Validate();
					}}
				/>
			</form>

			<p>
				if you have an account you can <Link to={'/login'}>Log In</Link>
			</p>
		</div>
	);
}
