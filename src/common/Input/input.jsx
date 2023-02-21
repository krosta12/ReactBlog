function Input(props) {
	if (props.extraItem) {
		return (
			<label>
				{props.labelText}
				<input
					type='number'
					value={props.state}
					onChange={(el) => props.setState(el.target.value)}
					placeholder={props.placeholder}
					className={props.className}
				></input>
			</label>
		);
	}
	return (
		<label>
			{props.labelText}
			<input
				value={props.state}
				onChange={(el) => props.setState(el.target.value)}
				placeholder={props.placeholder}
				className={props.className}
			></input>
		</label>
	);
}

export default Input;
