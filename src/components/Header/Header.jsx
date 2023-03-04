import Logo from './components/Logo/Logo';
import '../../App.css';
import Button2 from '../../common/Button/Button2';
import { Texts } from '../../const';
import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import getTockens from '../../helpers/getTockens';

function Header(props) {
	// getTockens();

	props.isLogin(localStorage.getItem('token'));
	const navigate = useNavigate();
	const [name, setName] = useState('');

	const userMe = axios.create();

	const authlnterceptor = (config) => {
		config.headers = config.headers;
		config.headers.Authorization = localStorage.getItem('token');
		return config;
	};
	userMe.interceptors.request.use(authlnterceptor);

	// userMe.headers.Authorization = `${props.token}`;
	// // userMe.headers.get['accept'] = '*/*';
	// // console.log(userMe.defaults.headers);
	// console.log(props.token);
	// //вот тут не понимаю, catch срабатывает

	if (props.token)
		userMe
			.get('http://localhost:4000/users/me')
			.then((el) => console.log(el.status));
	// .then((el) => setName(el.data.result.name));
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
							onClick={() => {
								userMe.delete('http://localhost:4000/logout');
								localStorage.removeItem('token');
								props.isLogin(localStorage.getItem('token'));
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
