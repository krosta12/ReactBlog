import { Button2 } from '../../../../common/Button/Button2';
import '../../../../App.css';

function CourceCard(props) {
	return (
		<div div className='Card'>
			<div className='Texts'>
				<h2>{props.theme}</h2>
				<p>{props.text}</p>
			</div>
			<div className='Info'>
				<div className='InfoInner'>
					<div className='authors'>Authors: {props.authors}</div>
					<p>Duration: {props.duration}</p>
					<p>Created: {props.creationDate}</p>
				</div>
				<div className='ShowButton'>
					<Button2 text='Show Cource' onClick={() => ''} />
				</div>
			</div>
		</div>
	);
}

export default CourceCard;
