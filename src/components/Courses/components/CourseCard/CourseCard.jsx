import { useNavigate } from 'react-router-dom';

import Button from '../../../../common/Button/Button';

import { Roles, Texts } from '../../../../const';

import { _delete } from '../../../../API/apiWorker';

import { useDispatch } from 'react-redux';
import { compiledCoursesList } from '../../../../store/asyncAPI/ReduxAsyncRequests';

import '../../../../CSS/styles.css';
import { deleteCourse } from '../../../../API/secondLayer';
import { useState } from 'react';

function CourceCard(props) {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [isError, setIsError] = useState(false);

	async function deletePost(el) {
		try {
			await deleteCourse(el.target.id);
		} catch (error) {
			setIsError(true);
		}

		dispatch(compiledCoursesList());
	}

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
			{isError ? (
				<div className='ErrorCard'>
					<div>Sorry, you can't delete this course</div>
					<Button text={Texts.ok} onClick={() => setIsError(false)} />
				</div>
			) : (
				<>
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
								text={`${Texts.show} ${Texts.course}`}
								onClick={(el) => {
									StartShowPost(props);
								}}
							/>
							{props.role === Roles.admin && (
								<>
									<Button
										text={Texts.edit}
										onClick={(el) => {
											navigate(`/courses/update/${props.id}`);
										}}
									/>
									<Button
										text={Texts.delete}
										id={props.id}
										onClick={(el) => deletePost(el)}
									/>
								</>
							)}
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default CourceCard;
