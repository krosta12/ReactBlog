import Logo from './components/Logo/Logo';
import '../../App.css';
import Button2 from '../../common/Button/Button2';
import { Texts } from '../../const';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import getTockens from '../../helpers/getTockens';
import apiWorker from '../../API/apiWorker';

function Header(props) {
	// getTockens();

	props.isLogin(localStorage.getItem('token'));
	const navigate = useNavigate();
	const [name, setName] = useState('');

	if (props.token)
		apiWorker('http://localhost:4000/users/me', 'GET_MY').then((el) =>
			setName(el.data.result.name)
		);
	// .catch(alert('d'));

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
								await apiWorker(
									'http://localhost:4000/logout',
									'DELETE',
									props.isLogin
								);
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
	// я помню что такие условия надо через & или ? но return не возвразает кнопки если я так сделаю
}

export default Header;
