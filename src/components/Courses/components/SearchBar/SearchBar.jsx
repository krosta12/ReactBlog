import Input from '../../../../common/Input/input';
import Button2 from '../../../../common/Button/Button2';

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
			<Button2
				text={Texts.search}
				onClick={() => {
					props.butSetState(props.state);
				}}
			/>
		</div>
	);
}

export default SearchBar;
