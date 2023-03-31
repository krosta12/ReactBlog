export default async function Validate({ password, email, name }) {
	console.log('fd');
	if (password && email && name) {
		console.log('fd')(
			await post('/register', {
				password: password,
				email: email,
				name: name,
			})
		)
			? alert(`navigate('/login')`)
			: alert('err');
	}
}
