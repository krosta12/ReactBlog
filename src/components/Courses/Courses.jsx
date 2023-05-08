import { useEffect, useState } from 'react';

import store from '../../store';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from './components/SearchBar/SearchBar';
import CourceCard from './components/CourseCard/CourseCard';
import PipeDuration from '../../helpers/PipeDuration';

import CreateCource from '../CreateCourse/CreateCourse';

import Button from '../../common/Button/Button';

import { Texts } from '../../const';

import { mockedAuthorsList } from '../../const';

import { compiledCoursesList } from '../../store/asyncAPI/ReduxAsyncRequests';

import '../../App.css';
import { coursesList } from '../../store/selectors/selectors';

function Cources(props) {
	const [search, setSearch] = useState('');
	const [posts, setPosts] = useState([]);
	const [isEdit, setIsEdit] = useState(false);
	const [inputAuthorName, setInputAuthorName] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);

	const [authorList, setAuthorList] = useState(mockedAuthorsList);
	const [applAuthors, setApplAuthor] = useState([]);

	const [searchButton, setSearchButton] = useState('');

	const dispatch = useDispatch();

	let selector = coursesList();

	useEffect(() => {
		dispatch(compiledCoursesList());
	}, [selector]);

	useEffect(() => {
		search ? 0 : setSearchButton('');
	}, [search]);

	useEffect(() => {
		if (selector != null) {
			setPosts(selector);
		}
	}); //so bad

	return !isEdit ? (
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
					<div>
						<Button text={Texts.addNewCource} onClick={() => setIsEdit(true)} />
					</div>
				</div>

				<div>
					{posts
						.filter((el) => {
							if (el.title.toLowerCase().includes(searchButton.toLowerCase())) {
								return el;
							}
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
			applAuthors={applAuthors}
			setDescription={setDescription}
			setTitle={setTitle}
			setDuration={setDuration}
			setApplAuthor={setApplAuthor}
			setAuthorList={setAuthorList}
			mockedAuthorsList={mockedAuthorsList}
			inputAuthorName={inputAuthorName}
			authorList={authorList}
			setInputAuthorName={setInputAuthorName}
			setIsEdit={setIsEdit}
		/>
	);
}

export default Cources;
