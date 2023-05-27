import { protectedPostRegister } from "../API/secondLayer";

export default async function Validate({ password, email, name }) {
	if (password && email && name) {
		(await protectedPostRegister({
			password: password,
			email: email,
			name: name,
		}))
			? navigate('/login')
			: alert('err');
	}
	