import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiWorker from '../../API/apiWorker';
import '../../App.css';
import Button2 from '../../common/Button/Button2';

export default function Reg(props) {
	const [nameBool, setNameBool] = useState(false);
	const [passwordBool, setPasswordBool] = useState(false);
	const [gmailBool, setGmailBool] = useState(false);

	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	// let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	let apiHook = new apiWorker();
	const navigate = useNavigate();

	async function Validate() {
		if (password && email && name) {
			// (await apiWorker('http://localhost:4000/register', 'POST', {
			// 	password: password,
			// 	email: email,
			// 	name: name,
			// }))
			(await apiHook.post('http://localhost:4000/register', {
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
			{/* action='back' ломает   form перезагружает станицу*/}
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

// Line 2:1:  Replace `····` with `↹`  prettier/prettier
// Editor: Format On Save : false и всё стало работать
