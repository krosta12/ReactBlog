function Button({ id, link, text, onClick, type }) {
	return (
		<button id={id} onClick={onClick} type={type}>
			{text}
		</button>
	);
}

export default Button;
