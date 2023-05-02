import Input from '../../../../common/Input/input';
import Button from '../../../../common/Button/Button';

import store from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';

import { _name1 } from '../../../../store/authors/actionCreators';

import { Texts } from '../../../../const';
import { authorList } from '../../../../store/selectors/selectors';

function SearchBar(props) {
	let AuthorList = authorList();
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
					store.dispatch(_name1());
					console.log(AuthorList);
					props.butSetState(props.state); //must create function
				}}
			/>
		</div>
	);
}

export default SearchBar;
