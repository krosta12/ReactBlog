import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './components/SearchBar/SearchBar';
import CourceCard from './components/CourseCard/CourseCard';
import PipeDuration from '../../helpers/PipeDuration';

import CreateCource from '../CreateCourse/CreateCourse';

import Button from '../../common/Button/Button';

import { Roles, Texts } from '../../const';

import {
	authorsGetter,
	compiledCoursesList,
} from '../../store/asyncAPI/ReduxAsyncRequests';

import '../../CSS/styles.css';
import { selectCoursesList, user } from '../../store/selectors/selectors';

function Cources(props) {
	const [search, setSearch] = useState('');
	const [inputAuthorName, setInputAuthorName] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);

	const [searchButton, setSearchButton] = useState('');

	const dispatch = useDispatch();

	let allCourses = useSelector(selectCoursesList);

	let role = useSelector(user).role;

	useEffect(() => {
		dispatch(compiledCoursesList());
		dispatch(authorsGetter());
	}, [dispatch]);

	useEffect(() => {
		search ? 0 : setSearchButton('');
	}, [search]);

	return !props.isEdit ? (
		<div className='Pos'>
			<div className='CourcesBody'>
				<div className='InnerUppCourcesBody'>
					<div className='SearchBox'>
						<SearchBar
							butSatate={searchButton}
							butSetState={setSearchButton}
							state={search}
							setState={setSearch}
						/>
					</div>
					{role === Roles.admin && (
						<div>
							<Button
								text={`${Texts.add} ${Texts.new} ${Texts.course}`}
								onClick={() => props.setIsEdit(true)}
							/>
						</div>
					)}
				</div>

				<div>
					{allCourses?.length &&
						allCourses
							.filter((el) => {
								return (
									el.title.toLowerCase().includes(searchButton.toLowerCase()) &&
									el
								);
							})
							.map((el) => (
								<>
									<CourceCard
										id={el.id}
										theme={el.title}
										text={el.description}
										creationDate={el.creationDate}
										duration={PipeDuration(el)}
										authors={el.authors}
										setPost={props.setPost}
										role={role}
									/>
								</>
							))}
				</div>
			</div>
		</div>
	) : (
		<CreateCource
			title={title}
			description={description}
			duration={duration}
			setDescription={setDescription}
			setTitle={setTitle}
			setDuration={setDuration}
			inputAuthorName={inputAuthorName}
			setInputAuthorName={setInputAuthorName}
			setIsEdit={props.setIsEdit}
			type={Texts.create}
		/>
	);
}

export default Cources;
