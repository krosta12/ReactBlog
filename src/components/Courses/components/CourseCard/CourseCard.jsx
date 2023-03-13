import Button from '../../../../common/Button/Button';
import '../../../../App.css';
import { Texts } from '../../../../const';
import { useHistory, useNavigate } from 'react-router-dom'; //usehistory заменили в 6 версии

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
					<Button //тут что то сломалось хотя не ничё не делал - пришлось играть с link и id
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
							// navigate.push('/s'); ne rabotaet

							navigate(`/courses/:id=${props.id}`);

							//Макс, спасибо я вытянул это из MAP и всё пофиксил
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default CourceCard;
