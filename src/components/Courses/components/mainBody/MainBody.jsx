import CourceCard from '../CourseCard/CourseCard';

import PipeDuration from '../../../../helpers/PipeDuration';
import Button from '../../../../common/Button/Button';

import { Texts } from '../../../../const';

import '../.../../../../../App.css';

export function MainBody({
	searchButton,
	setSearchButton,
	search,
	setSearch,
	SearchBar,
	posts,
}) {
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
						<Button text={Texts.addNewCource} onClick={() => setIsEdit(true)} />
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
}
