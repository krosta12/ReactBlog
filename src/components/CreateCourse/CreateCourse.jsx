import Input from '../../common/Input/input';
import { useEffect } from 'react';
import DateGenerator from '../../helpers/dateGenerator';
import Button from '../../common/Button/Button';
import { v4 } from 'uuid';
import { Texts } from '../../const';
import systemApiCreateCource from '../../API/systems/systemApiCreateCource';
import systemApiCreateAuthor from '../../API/systems/systemApiCreateAuthor';
import apiWorker from '../../API/apiWorker';

function CreateCource({
	title,
	description,
	duration,
	applAuthors,
	setDescription,
	setTitle,
	setDuration,
	setApplAuthor,
	setAuthorList,
	mockedAuthorsList,
	inputAuthorName,
	authorList,
	setInputAuthorName,
	setPosts,
	setIsEdit,
	setKey,
}) {
	let api = new apiWorker();
	// useEffect(() => {
	// 	if (duration < 0 || duration == NaN) {
	// 		setDuration('');
	// 	} else if (parseInt(duration)) {
	// 		setDuration(parseInt(duration));
	// 	}
	// });
	// я так и не смог буква Е и знак - проходят

	return (
		<div className='EditBody'>
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
					<Button
						text={Texts.createCource}
						onClick={() => {
							if (
								title.split('').length > 3 &&
								description.split('').length > 3 &&
								applAuthors.length > 0 &&
								duration
							) {
								let newAuthorsList = [];

								applAuthors.map((el) => newAuthorsList.push(el.id));
								systemApiCreateCource(
									{
										id: v4(),
										title: title,
										description: description,
										creationDate: DateGenerator(),
										duration: parseInt(duration),
										authors: newAuthorsList,
									},
									setKey
								);

								// setPosts((el) => [
								// 	...el,
								// 	{
								// 		id: v4(),
								// 		title: title,
								// 		description: description,
								// 		creationDate: DateGenerator(),
								// 		duration: duration,
								// 		authors: newAuthorsList,
								// 	},
								// ]);

								setTitle('');
								setDescription('');
								setDuration(0);
								setAuthorList(mockedAuthorsList);
								console.log(authorList);
								setApplAuthor([]);
								setIsEdit(false);
							} else {
								alert(0);
							}
						}}
					/>
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
						/>
					</div>
					<Button
						text={Texts.createAuthor}
						onClick={async () => {
							let generatedId = v4();
							if (inputAuthorName.split('').length > 3) {
								// setAuthorList((el) => [
								// 	...el,
								// 	{
								// 		id: generatedId,
								// 		name: inputAuthorName,
								// 	},
								// ]);
								// mockedAuthorsList.push({
								// 	id: generatedId,
								// 	name: inputAuthorName,
								// });

								// await

								await systemApiCreateAuthor(
									{
										name: inputAuthorName,
										// id: generatedId, не надо
									},
									setAuthorList,
									inputAuthorName
								);
							} else {
								alert('Write correct name');
							}
						}}
					/>
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
											setApplAuthor((ela) => [...ela, el]); //ela потому что конфдиктовал с el
											setAuthorList((elem) =>
												elem.filter((elemB) => elemB != el)
											); //с ELEMB тоже самое
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
											setAuthorList((ela) => [...ela, el]); //ela потому что конфдиктовал с el
											setApplAuthor((elem) =>
												elem.filter((elemB) => elemB != el)
											); //с ELEMB тоже самое
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
