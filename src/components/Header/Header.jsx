import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import '../../App.css';

function Header(props) {
	return (
		<div className='Header'>
			<Logo />
			<div className='InnerHeader'>
				<span className='Name'>Max</span>
				<Button innerText='Logout' />
			</div>
		</div>
	);
}

export default Header;
