import { useNavigate } from 'react-router-dom';

import Button from '../../../../common/Button/Button';

import { Texts } from '../../../../const';

import { _delete } from '../../../../API/apiWorker';

import { useDispatch } from 'react-redux';
import { compiledCoursesList } from '../../../../store/asyncAPI/ReduxAsyncRequests';

import '../../../../CSS/AllAppStyles.css';

function CourceCard(props) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

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
		<div div className='Card' id={props.id}>
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
					<Button text='edit' />
					<Button
						text='delete'
						onClick={async (el) => {
							await _delete(
								`/courses/${el.target.parentNode.parentNode.parentNode.id}`
							);

							dispatch(compiledCoursesList());
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default CourceCard;
