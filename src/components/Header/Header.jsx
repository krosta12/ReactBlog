import Logo from './components/Logo/Logo';
import '../../App.css';
import Button from '../../common/Button/Button';
import { Texts } from '../../const';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import getTockens from '../../helpers/getTockens';
import apiWorker from '../../API/apiWorker';

function Header(props) {
	let apiHook = new apiWorker();
	// getTockens();

	props.isLogin(localStorage.getItem('token'));
	const navigate = useNavigate();
	const [name, setName] = useState('');

	if (props.token) {
		// apiWorker('http://localhost:4000/users/me', 'GET_MY').then((el) =>
		// 	setName(el.data.result.name)
		// );
		apiHook.getMe('http://localhost:4000/users/me').then((el) => {
			setName(el.data.result.name);
		});
	}

	// .catch(alert('d'));

	if (props.token) {
		return (
			<>
				<div className='Header'>
					<Logo />
					<div className='InnerHeader'>
						<span className='Name'>{name}</span>
						<Button
							text={Texts.logOut}
							onClick={async () => {
								apiHook.delete('http://localhost:4000/logout', props.isLogin);
								// await apiWorker(
								// 	'http://localhost:4000/logout',
								// 	'DELETE',
								// 	props.isLogin
								// );
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
						<Button
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
	// я помню что такие условия надо через & или ? но return не возвразает кнопки если я так сделаю
}

export default Header;
