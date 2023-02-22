import DateGenerator from '../../helpers/dateGenerator';

function Button(props) {
	function answer(props, all) {
		switch (props.event) {
			case 'create':
				props.setIsEdit(true);
				break;
			case 'showPosts':
				if (
					props.inputs[0] &&
					props.inputs[1] &&
					props.inputs[2] > 0 &&
					parseInt(props.inputs[2]) &&
					props.inputs[3].length > 0
				) {
					let pain = [];

					props.applAuthors.map((el) => pain.push(el.name));
					props.setPosts((el) => [
						...el,
						{
							id: Math.random(),
							title: props.title,
							description: props.description,
							creationDate: DateGenerator(),
							duration: props.duration,
							authors: pain,
						},
					]);

					props.setInputs[0]('');
					props.setInputs[1]('');
					props.setInputs[2](0);
					props.setInputs[3]([]);
					props.setInputs[4](props.setInputs[5]);
					props.setIsEdit(false);
				} else {
					alert('write all');
				}

				break;
			case 'add':
				props.seStateApl((el) => [...el, props.el]);
				props.setState((el) => el.filter((el) => el != props.el));
				break;
			case 'del':
				props.setState((el) => [...el, props.el]);
				props.setStateApl((el) => el.filter((el) => el != props.el));
				break;
			case 'createAuthor':
				props.setState((el) => [
					...el,
					{
						id: Math.random(),
						name: props.name,
					},
				]);
				break;
			case 'Search':
				props.butSetState(props.state);
				break;
			default:
				break;
		}
	}

	return <button onClick={() => answer(props)}>{props.innerText}</button>;
}

export default Button;
