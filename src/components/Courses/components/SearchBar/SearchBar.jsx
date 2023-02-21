import Input from '../../../../common/Input/input';
import Button from '../../../../common/Button/Button';
function SearchBar(props) {
	return (
		<div>
			<Input
				labelText={''}
				state={props.state}
				setState={props.setState}
				placeholder='Enter cource name...'
			/>{' '}
			<Button
				event='Search'
				state={props.state}
				butSatate={props.butSatate}
				butSetState={props.butSetState}
				setState={props.setState}
				innerText='Search'
			/>
		</div>
	);
}

export default SearchBar;
