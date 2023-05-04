import Input from '../../../../common/Input/input';
import Button from '../../../../common/Button/Button';

import store from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCourses } from '../../../../store/courses/actionCreators';

import { Texts } from '../../../../const';
import { coursesList } from '../../../../store/selectors/selectors';

function SearchBar(props) {
	let dispatch = useDispatch();

	return (
		<div>
			<Input
				type={'search'}
				labelText={''}
				state={props.state}
				setState={props.setState}
				placeholder='Enter cource name...'
				butSetState={props.butSetState}
			/>{' '}
			<Button
				text={Texts.search}
				onClick={() => {
					store.dispatch(getAllCourses());
					props.butSetState(props.state); //must create function
				}}
			/>
		</div>
	);
}

export default SearchBar;
