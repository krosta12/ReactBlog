import '../../App.css';

export default function CourseInfo(props) {
	return (
		<div className='Card'>
			<div className='Texts'>
				<h2>{props.post.title}</h2>
				{/* <Button2 text='back' onClick={alert('D')} /> какойто максимально тупой баг с копкой*/}
				<p>{props.post.description}</p>
			</div>
			<div className='Info'>
				<div className='InfoInner'>
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
	);
}
