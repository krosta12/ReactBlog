export default async function Validate({ password, email, name }) {
	if (password && email && name) {
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
