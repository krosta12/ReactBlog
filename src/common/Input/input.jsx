function Input(props) {
	return (
		<label>
			{props.labelText}
			<input
				type={props.extraItem ? 'number' : 'text'}
				value={props.state}
				onChange={(el) => {
					props.setState(el.target.value);
				}}
				placeholder={props.placeholder}
				className={props.className}
				onClick={props.onClick}
			></input>
		</label>
	);
}

export default Input;
