import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import CourceCard from './components/CourseCard/CourseCard';
import '../../App.css';
import { useState } from 'react';
import ReadyInfo from '../../cost';
import Input from '../../common/Input/input';
import { mockedAuthorsList } from '../../cost';
import CreateCource from '../CreateCourse/CreateCourse';
import PipeDuration from '../../helpers/PipeDuration';

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

	if (!isEdit) {
		return (
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
							<Button
								setIsEdit={setIsEdit}
								event='create'
								innerText='Add new Cource'
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
								<CourceCard
									id={el.id}
									theme={el.title}
									text={el.description}
									creationDate={el.creationDate}
									duration={PipeDuration(el)}
									authors={el.authors}
								/>
							))}
					</div>
				</div>
			</div>
		);
	} else {
		return (
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
	//5 xfc + 5xfcjd
}

export default Cources;
