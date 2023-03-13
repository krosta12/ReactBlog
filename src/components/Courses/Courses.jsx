import SearchBar from './components/SearchBar/SearchBar';
import CourceCard from './components/CourseCard/CourseCard';
import '../../App.css';
import { useEffect, useState } from 'react';
import ReadyInfo from '../../const';
import { mockedAuthorsList } from '../../const';
import CreateCource from '../CreateCourse/CreateCourse';
import PipeDuration from '../../helpers/PipeDuration';
import Button from '../../common/Button/Button';
import { Texts } from '../../const';
import apiWorker from '../../API/apiWorker';
import systemApiCources from '../../API/systems/systemApiCources';

function Cources(props) {
	let myApi = new apiWorker();

	const [key, setKey] = useState(true); //костыль

	const [search, setSearch] = useState('');
	const [posts, setPosts] = useState(ReadyInfo);
	const [authorList, setAuthorList] = useState(mockedAuthorsList); //kostil
	// systemApiCources(setPosts);

	//readyInfo из констант нужен чтоб запонить пробел, можно передать рандомное что-то но не хочу чтоб оно было пустым, ещё я не знаю как это изменить и мне както лень, думаю ге трудно

	const [isEdit, setIsEdit] = useState(false);
	const [inputAuthorName, setInputAuthorName] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [duration, setDuration] = useState(0);

	const [applAuthors, setApplAuthor] = useState([]);

	const [searchButton, setSearchButton] = useState('');

	// setPosts(ReadyInfo) re-render err
	useEffect(() => {
		search ? 0 : setSearchButton('');
	});
	if (!isEdit) {
		//не могу заменить на ??
		return (
			<div className='Pos'>
				{
					systemApiCources(setPosts, key, setKey, setAuthorList) //костыль
				}
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
				mockedAuthorsList={authorList}
				inputAuthorName={inputAuthorName}
				authorList={authorList}
				setInputAuthorName={setInputAuthorName}
				setPosts={setPosts}
				setIsEdit={setIsEdit}
				setKey={setKey}
				z
			/>
		);
	}
	//5 xfc + 5xfcjd
}

export default Cources;
