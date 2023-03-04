import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../App.css';
import Button2 from '../../common/Button/Button2';

export default function Reg(props) {
	const [nameBool, setNameBool] = useState(false);
	const [passwordBool, setPasswordBool] = useState(false);
	const [gmailBool, setGmailBool] = useState(false);

	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [gmail, setGmail] = useState('');
	let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	const navigate = useNavigate();

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
						value={gmail}
						onChange={(el) => setGmail(el.target.value)}
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
						name.split('').length > 3 ? setNameBool(true) : alert('Write Name');
						password.split('').length > 5
							? setPasswordBool(true)
							: alert('pass len > 5');
						reg.test(gmail) ? setGmailBool(true) : alert('write correct Email');

						if (passwordBool && gmailBool && nameBool) {
							axios.post('http://localhost:4000/register', {
								name: name,
								email: gmail,
								password: password,
								headers: {
									'Content-Type': 'application/json',
								}, //headers я скопировал из методички я так и не понял зачем он
							});

							navigate('/login');
							// ОНО не работает изза тогоч то оно перезргружается
						}
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
