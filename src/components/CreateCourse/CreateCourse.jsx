import Input from '../../common/Input/input';
import Button from '../../common/Button/Button';
import { useEffect } from 'react';

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
	useEffect(() => {
		if (duration < 0 || duration == NaN) {
			setDuration('');
		} else if (parseInt(duration)) {
			setDuration(parseInt(duration));
		}
	});
	// я так и не смог
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
					<Button
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
					<Button
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
					<p className='DurationPEl'>{duration} : Hours</p>
				</div>
			</div>
		</div>
	);
}

export default CreateCource;
