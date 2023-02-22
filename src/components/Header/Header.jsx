import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import '../../App.css';
import { Button2 } from '../../common/Button/Button2';

function Header(props) {
	return (
		<div className='Header'>
			<Logo />
			<div className='InnerHeader'>
				<span className='Name'>Max</span>
				<Button2 text={'Log out'} />
			</div>
		</div>
	);
}

export default Header;
