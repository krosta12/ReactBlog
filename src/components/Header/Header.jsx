import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Logo from './components/Logo/Logo';

import Button2 from '../../common/Button/Button2';
import { get, _delete } from '../../API/apiWorker';
import { Texts } from '../../const';

import '../../App.css';

function Header(props) {
	props.isLogin(localStorage.getItem('token'));
	const navigate = useNavigate();
	const [name, setName] = useState('');

	if (props.token) {
		get('/users/me')
			.then((el) => {
				setName(el.data.result.name);
			})
			.catch();
	}

	return props.token ? (
		<>
			<div className='Header'>
				<Logo />
				<div className='InnerHeader'>
					<span className='Name'>{name}</span>
					<Button2
						text={Texts.logOut}
						onClick={async () => {
							_delete('/logout', props.isLogin);
							props.isLogin(false);
							localStorage.removeItem('token');
						}}
					/>
				</div>
			</div>
			<Outlet />;
		</>
	) : (
		<>
			<div className='Header'>
				<Logo />
				<div className='InnerHeader'>
					<Button2
						onClick={() => {
							navigate(`/registration`);
						}}
						text='Registration'
					/>
				</div>
			</div>
			<Outlet />;
		</>
	);
}

export default Header;
