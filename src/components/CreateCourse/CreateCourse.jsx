import Input from '../../common/Input/input';
import Button from '../../common/Button/Button';
import { useEffect } from 'react';
import DateGenerator from '../../helpers/dateGenerator';
import { Button2 } from '../../common/Button/Button2';

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
}) {
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
						labelText={'Title'}
						event='title'
						placeholder='Write Title'
						state={title}
						setState={setTitle}
					/>
				</div>
				<div>
					{/* <Buttozn
						inputs={[title, description, duration, applAuthors]}
						setInputs={[
							setTitle,
							setDescription,
							setDuration,
							setApplAuthor,
							setAuthorList,
							mockedAuthorsList,
						]}
						event='showPosts'
						applAuthors={applAuthors}
						description={description}
						title={title}
						duration={duration}
						setPosts={setPosts}
						setIsEdit={setIsEdit}
						innerText='Create Cource'
					/> */}

					<Button2
						text={'Create Cource'}
						onClick={() => {
							if (title && description && applAuthors.length > 0 && duration) {
								let newAuthorsList = [];

								applAuthors.map((el) => newAuthorsList.push(el.name));
								setPosts((el) => [
									...el,
									{
										id: Math.random(),
										title: title,
										description: description,
										creationDate: DateGenerator(),
										duration: duration,
										authors: newAuthorsList,
									},
								]);
								setTitle('');
								setDescription('');
								setDuration(0);
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
					labelText={'Description'}
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
							labelText={'Author name'}
							state={inputAuthorName}
							setState={setInputAuthorName}
							event='authorName'
							placeholder='Enter author name...'
						/>
					</div>
					<Button2
						text={'Create author'}
						onClick={() => {
							setAuthorList((el) => [
								...el,
								{
									id: Math.random(),
									name: inputAuthorName,
								},
							]);
						}}
						event='createAuthor'
						name={inputAuthorName}
						i={authorList}
						setState={setAuthorList}
						mocketList={mockedAuthorsList}
						innerText='Create author'
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
										setState={setAuthorList}
										el={el}
										setStateApl={setApplAuthor}
										event='add'
										innerText='Add author'
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
										setState={setAuthorList}
										el={el}
										setStateApl={setApplAuthor}
										event='del'
										innerText='Delete author'
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
						labelText={'Duration'}
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
