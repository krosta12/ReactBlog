import Input from '../../../../common/Input/input';
import Button from '../../../../common/Button/Button';

import { Texts } from '../../../../const';
function SearchBar(props) {
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
					props.butSetState(props.state);
				}}
			/>
		</div>
	);
}

export default SearchBar;
