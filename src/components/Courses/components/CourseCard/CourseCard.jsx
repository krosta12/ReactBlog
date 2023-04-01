import { useNavigate } from 'react-router-dom';

import Button from '../../../../common/Button/Button';

import { Texts } from '../../../../const';

import '../../../../App.css';

function CourceCard(props) {
	const navigate = useNavigate();

	function StartShowPost(props) {
		props.setPost({
			id: props.id,
			title: props.theme,
			description: props.text,
			creationDate: props.creationDate,
			duration: props.duration,
			authors: props.authors,
		});

		navigate(`/courses/:id=${props.id}`);
	}

	return (
		<div div className='Card'>
			<div className='Texts'>
				<h2>{props.theme}</h2>
				<p>{props.text}</p>
			</div>
			<div className='Info'>
				<div className='InfoInner'>
					<div className='authors'>
						Authors:{' '}
						{props.authors.map((el) => {
							return <span>{el} </span>;
						})}
					</div>
					<p>Duration: {props.duration} Hours</p>
					<p>Created: {props.creationDate}</p>
				</div>
				<div className='ShowButton'>
					<Button
						text={Texts.showCource}
						onClick={(el) => {
							StartShowPost(props);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default CourceCard;
