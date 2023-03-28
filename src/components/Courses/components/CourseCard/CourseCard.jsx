import { useNavigate } from 'react-router-dom';

import Button2 from '../../../../common/Button/Button2';

import { Texts } from '../../../../const';

import '../../../../App.css';

function CourceCard(props) {
	const navigate = useNavigate();

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
					<Button2
						text={Texts.showCource}
						onClick={(el) => {
							props.setPost({
								id: props.id,
								title: props.theme,
								description: props.text,
								creationDate: props.creationDate,
								duration: props.duration,
								authors: props.authors,
							});

							navigate(`/courses/:id=${props.id}`);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default CourceCard;
