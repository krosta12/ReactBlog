import Input from '../../common/Input/input';
import Button from '../../common/Button/Button';

import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Texts } from '../../const';
import { createCourse } from '../../helpers/createCourseFunction';
import { selectAllAuthorsList } from '../../store/selectors/selectors';
import { setAuthorsToList } from '../../store/authors/actionCreators';

import { allAuthorsGetter, getCourseById } from '../../API/secondLayer';
import { authorAdd } from '../../API/secondLayer';

import {
	coursePosting,
	updateCourse,
} from '../../store/asyncAPI/ReduxAsyncRequests';
import { useNavigate, useParams } from 'react-router-dom';

function CreateCource({ type, setIsEdit }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [isError, setIsError] = useState(false);
	const [errorBar, setErrorBar] = useState(false);

	const [inputAuthorName, setInputAuthorName] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);

	const [authorList, setAuthorList] = useState(
		useSelector(selectAllAuthorsList)
	);
	const [applAuthors, setApplAuthor] = useState([]);
	const { id } = useParams();
	const [oldCourseVersion, setOldCourseversion] = useState({});

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
	async function CourseUpdater() {
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
	}

	useEffect(() => {
		id &&
			getCourseById(id)
				.then((el) => el.data.result)
				.then((el) => {
					setTitle(el.title);
					setDescription(el.description);
					setDuration(el.duration);
					const list = authorList;
					const applList = el.authors;
					const lastList = [];
					list.map((listEl) => {
						applList.map((nameEl) => {
							if (listEl.id == nameEl) {
								lastList.push(listEl);
								setAuthorList((el) =>
									el.filter((element) => element.id != nameEl)
								);
							}
						});
						setApplAuthor(lastList);
						setOldCourseversion({
							title: el.title,
							description: el.description,
							duration: el.duration,
							authors: lastList,
						});
					});
				});
	}, []);

	return (
		<div className='EditBody'>
			{errorBar && (
				<div className='ErrorBar CreateError'>
					<p>Write all labels</p>
					<Button text={Texts.ok} onClick={() => setErrorBar(false)} />
				</div>
			)}
			<div className='EditInnerUp'>
				<div>
					<Input
						labelText={Texts.title}
						placeholder={`${Texts.write} ${Texts.title}`}
						state={title}
						setState={setTitle}
					/>
				</div>
				<div>
					{type === Texts.create && (
						<Button
							text={`${Texts.create} ${Texts.course}`}
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
					)}{' '}
					{type === Texts.update && (
						<Button
							text={`${Texts.update} ${Texts.course}`}
							onClick={async () => {
								console.log(oldCourseVersion);
								if (
									oldCourseVersion.title != title ||
									oldCourseVersion.description != description ||
									oldCourseVersion.duration != duration ||
									oldCourseVersion.authors.length != applAuthors.length
								) {
									await CourseUpdater();
								} else {
									navigate('/');
								}
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
					event={Texts.description}
					className={Texts.description.toLocaleLowerCase()}
					placeholder={`${Texts.enter} ${Texts.description}...`}
				/>
			</div>

			<div className='BigInfoContainer'>
				<div className='CreateAuthorBox'>
					<p>Authors</p>
					<div>
						<Input
							labelText={`${Texts.author} ${Texts.name}`}
							state={inputAuthorName}
							setState={setInputAuthorName}
							event='authorName'
							placeholder={`${Texts.enter} ${Texts.author} ${Texts.name}...`}
							onFocus={() => setIsError(false)}
						/>
					</div>
					<Button
						text={`${Texts.create} ${Texts.author}`}
						onClick={async () => createAuthorFunction()}
					/>
					{isError && <div className='ErrorBar'> Write corrent name</div>}

					<div className='DurationBox'>
						<p className='Duration'>Duration</p>
						<div>
							<Input
								extraItem={true}
								labelText={Texts.duration}
								placeholder={`${Texts.duration}`}
								state={duration}
								setState={setDuration}
							/>
							<p className='DurationPEl'>
								{duration > 0 && duration
									? (duration / 60).toFixed(2)
									: `${Texts.write} ${Texts.correct} ${Texts.duration}`}{' '}
								: Hours
							</p>
						</div>
					</div>
				</div>

				<div className='isApllyedAuthorBox'>
					<div className='notAppled'>
						<p className='AuthorsTitle'>Authors</p>
						{authorList.map((el) => (
							<div>
								<div className='Name'>
									<span>{el.name}</span>
									<Button
										text={`${Texts.add} ${Texts.author}`}
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
										text={`${Texts.delete} ${Texts.author}`}
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
		</div>
	);
}

export default CreateCource;
