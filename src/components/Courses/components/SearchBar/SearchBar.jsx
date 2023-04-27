import Input from '../../../../common/Input/input';
import Button from '../../../../common/Button/Button';

import store from '../../../../store';
import { useDispatch, useSelector } from 'react-redux';

import { _name1 } from '../../../../store/authors/actionCreators';

import { Texts } from '../../../../const';

function SearchBar(props) {
	let dispatch = useDispatch();
	let iDontKnow = useSelector((state) => {
		state.named.authorsInitialState;
	});
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
					props.butSetState(props.state);
				}}
			/>
		</div>
	);
}

export default SearchBar;
