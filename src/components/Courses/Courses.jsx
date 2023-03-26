import SearchBar from './components/SearchBar/SearchBar';
import CourceCard from './components/CourseCard/CourseCard';
import '../../App.css';
import { useEffect, useState } from 'react';
import ReadyInfo from '../../const';
import { mockedAuthorsList } from '../../const';
import CreateCource from '../CreateCourse/CreateCourse';
import PipeDuration from '../../helpers/PipeDuration';
import Button2 from '../../common/Button/Button2';
import { Texts } from '../../const';

function Cources(props) {
	const [search, setSearch] = useState('');
	const [posts, setPosts] = useState(ReadyInfo);
	const [isEdit, setIsEdit] = useState(false);
	const [inputAuthorName, setInputAuthorName] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);

	const [authorList, setAuthorList] = useState(mockedAuthorsList);
	const [applAuthors, setApplAuthor] = useState([]);

	const [searchButton, setSearchButton] = useState('');
	// setPosts(ReadyInfo) re-render err
	useEffect(() => {
		search ? 0 : setSearchButton('');
	}, [search]);

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
						<Button2
							text={Texts.addNewCource}
							onClick={() => setIsEdit(true)}
						/>
					</div>
				</div>

				<div>
					{posts
						.filter((el) => {
							if (
								el.title.toLowerCase().includes(searchButton.toLowerCase()) ||
								el.id.toLowerCase().includes(searchButton.toLowerCase())
							) {
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
			setPosts={setPosts}
			setIsEdit={setIsEdit}
		/>
	);
}

export default Cources;
