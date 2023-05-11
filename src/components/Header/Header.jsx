import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Logo from './components/Logo/Logo';

import Button from '../../common/Button/Button';
import { get, _delete } from '../../API/apiWorker';
import { Texts } from '../../const';

import '../../CSS/AllAppStyles.css';

function Header(props) {
	async function LogOutFunction() {
		_delete('/logout', props.isLogin);
		props.isLogin(false);
		localStorage.removeItem('token');
	}

	props.isLogin(localStorage.getItem('token'));
	const navigate = useNavigate();
	const [name, setName] = useState('');

	if (props.token) {
		get('/users/me').then((el) => {
			setName(el.data.result.name);
		});
	}

	return props.token ? (
		<>
			<div className='Header'>
				<Logo />
				<div className='InnerHeader'>
					<span className='Name'>{name}</span>
					<Button
						text={Texts.logOut}
						onClick={() => {
							LogOutFunction();
						}}
					/>
				</div>
			</div>
			<Outlet />
		</>
	) : (
		<>
			<div className='Header'>
				<Logo />
				<div className='InnerHeader'>
					<Button
						onClick={() => {
							navigate(`/registration`);
						}}
						text='Registration'
					/>
				</div>
			</div>
			<Outlet />
		</>
	);
}

export default Header;
