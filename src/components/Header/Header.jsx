import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Logo from './components/Logo/Logo';

import Button2 from '../../common/Button/Button2';
import { getAsMe, _delete } from '../../API/apiWorker';
import { Texts } from '../../const';

import '../../App.css';

function Header(props) {
	props.isLogin(localStorage.getItem('token'));
	const navigate = useNavigate();
	const [name, setName] = useState('');

	if (props.token) {
		getAsMe('http://localhost:4000/users/me').then((el) => {
			setName(el.data.result.name);
		});
	}

	if (props.token) {
		return (
			<>
				<div className='Header'>
					<Logo />
					<div className='InnerHeader'>
						<span className='Name'>{name}</span>
						<Button2
							text={Texts.logOut}
							onClick={async () => {
								_delete('http://localhost:4000/logout', props.isLogin);
								props.isLogin(false);
								localStorage.removeItem('token');
							}}
						/>
					</div>
				</div>
				<Outlet />;
			</>
		);
	} else {
		return (
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
}

export default Header;
