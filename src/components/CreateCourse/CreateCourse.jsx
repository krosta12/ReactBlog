import Input from '../../common/Input/input';
import Button from '../../common/Button/Button';

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Texts } from '../../const';
import { createCourse } from '../../helpers/createCourseFunction';
import { selectAllAuthorsList, user } from '../../store/selectors/selectors';
import { setAuthorsToList } from '../../store/authors/actionCreators';

import { allAuthorsGetter, getCourseById } from '../../API/secondLayer';
import { authorAdd } from '../../API/secondLayer';

import {
	coursePosting,
	updateCourse,
} from '../../store/asyncAPI/ReduxAsyncRequests';
import { useNavigate, useParams } from 'react-router-dom';

function CreateCource({
	// title,
	// description,
	// duration,
	// setDescription,
	// setTitle,
	// setDuration,
	// inputAuthorName,
	// setInputAuthorName,
	type,
	setIsEdit,
}) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isError, setIsError] = useState(false);
	const [errorBar, setErrorBar] = useState(false);

	const [inputAuthorName, setInputAuthorName] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);

	const { id } = useParams();

	async function createAuthorFunction() {
		if (inputAuthorName.split('').length > 3) {
			await authorAdd({ name: inputAuthorName });

			let authors = await allAuthorsGetter();
			authors = authors.data.result;
			const lastElem = authors[authors.length - 1];
			dispatch(setAuthorsToList(lastElem));
			setAuthorList((el) => [...el, lastElem]);
			setInputAuthorName('');
		} else {
			setIsError(true);
		}
	}

	const [authorList, setAuthorList] = useState(
		useSelector(selectAllAuthorsList)
	);
	const [applAuthors, setApplAuthor] = useState([]);
	return (
		<div className='EditBody'>
			{errorBar && (
				<div className='ErrorBar CreateError'>
					<p>Write all labels</p>
					<Button text='OK' onClick={() => setErrorBar(false)} />
				</div>
			)}
			<div className='EditInnerUp'>
				<div>
					<Input
						labelText={Texts.title}
						event='title'
						placeholder='Write Title'
						state={title}
						setState={setTitle}
					/>
				</div>
				<div>
					{type === 'create' && (
						<Button
							text={Texts.createCource}
							onClick={async () => {
								dispatch(
									coursePosting(
										await createCourse(
											title,
											description,
											duration,
											applAuthors,
											setDescription,
											setTitle,
											setDuration,
											setApplAuthor,
											setIsEdit,
											setErrorBar,
											type
										)
									)
								);
							}}
						/>
					)}
					{type === 'update' && (
						<Button
							text='Update Couse'
							onClick={async () => {
								dispatch(
									updateCourse(
										await createCourse(
											title,
											description,
											duration,
											applAuthors,
											setDescription,
											setTitle,
											setDuration,
											setApplAuthor,
											setIsEdit,
											setErrorBar,
											type,
											id
										)
									)
								);
								navigate('/courses');
							}}
						/>
					)}
				</div>
			</div>

			<div className='MainTextBox'>
				<Input
					labelText={Texts.description}
					state={description}
					setState={setDescription}
					event='description'
					className='description'
					placeholder='Enter description...'
				/>
			</div>

			<div className='BigInfoContainer'>
				<div className='CreateAuthorBox'>
					<p>Authors</p>
					<div>
						<Input
							labelText={Texts.authorName}
							state={inputAuthorName}
							setState={setInputAuthorName}
							event='authorName'
							placeholder='Enter author name...'
							onClick={() => setIsError(false)}
						/>
					</div>
					<Button
						text={Texts.createAuthor}
						onClick={async () => createAuthorFunction()}
					/>
					{isError && <div className='ErrorBar'> Write corrent name</div>}
				</div>

				<div className='isApllyedAuthorBox'>
					<div className='notAppled'>
						<p className='AuthorsTitle'>Authors</p>
						{authorList.map((el) => (
							<div>
								<div className='Name'>
									<span>{el.name}</span>
									<Button
										text={Texts.addAuthor}
										onClick={() => {
											setApplAuthor((elA) => [...elA, el]);
											setAuthorList((elem) =>
												elem.filter((elemB) => elemB != el)
											);
										}}
									/>
								</div>
							</div>
						))}
					</div>
					<div className='ApllyedAuthors'>
						<div className='ApllyedBox'>
							<p className='AuthorsTitle'>Applied authors</p>
							{applAuthors.map((el) => (
								<div>
									<span>{el.name}</span>
									<Button
										text={Texts.deleteAuthor}
										onClick={() => {
											setAuthorList((elA) => [...elA, el]);
											setApplAuthor((elem) =>
												elem.filter((elemB) => elemB != el)
											);
										}}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className='DurationBox'>
				<p className='Duration'>Duration</p>
				<div>
					<Input
						extraItem={true}
						labelText={Texts.duration}
						placeholder='Duration...'
						state={duration}
						setState={setDuration}
					/>
					<p className='DurationPEl'>
						{duration > 0 && duration
							? (duration / 60).toFixed(2)
							: 'write correct duration'}{' '}
						: Hours
					</p>
				</div>
			</div>
		</div>
	);
}

export default CreateCource;
