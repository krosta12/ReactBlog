import { useNavigate } from 'react-router-dom';

import '../../App.css';

import Button from '../../common/Button/Button';

export default function CourseInfo(props) {
	let navigate = useNavigate();
	return (
		<>
			<div className='Card Main'>
				<Button
					text='back'
					onClick={() => {
						navigate('/');
					}}
				/>
				<div className='Texts'>
					<h2>{props.post.title}</h2>
					<p>{props.post.description}</p>
				</div>
				<div className='Info'>
					<div className='InfoInner infoInnerCard'>
						<div className='authors'>
							Authors:{' '}
							{props.post.authors.map((el) => {
								return <span>{el} </span>;
							})}
						</div>
						<p>Duration: {props.post.duration} Hours</p>
						<p>Created: {props.post.creationDate}</p>
					</div>
				</div>
			</div>
		</>
	);
}
