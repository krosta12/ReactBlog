import { registration } from "../API/secondLayer";

export default async function Validate({ password, email, name }) {
	if (password && email && name) {
		(await registration({
			password: password,
			email: email,
			name: name,
		}))
			? navigate('/login')
			: alert('err');
	}
	