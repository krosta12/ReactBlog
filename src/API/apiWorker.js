import axios from 'axios';

// async function apiWorker(url, method, object) {
// 	const da = () => {
// 		console.log('da');
// 	};

// 	const o = {
// 		name: object?.name,
// 		password: object?.password,
// 		email: object?.email,
// 	};

// 	if (method == 'POST') {
// 		const el = await axiosChild.post(url, o);
// 		return el;
// 	} else if (method == 'GET') {
// 		const el = await axiosChild.get(url);
// 		return el;
// 	} else if (method == 'GET_MY') {
// 		const el = await userMe.get(url);
// 		return el;
// 	} else if (method == 'DELETE') {
// 		userMe
// 			.delete('http://localhost:4000/logout')
// 			.then(alert('ad'))
// 			.catch((el) => alert('err'));
// 	}
// }

// я его переписал
class apiWorker {
	createVars() {}

	async post(url, object) {
		// alert(url);
		// console.log(object);
		const el = await axios.post(url, object);
		return el;
	}
	async postMe(url, object, setKey) {
		const userMe = this.createUserMe(url);
		const el = await userMe.post(url, object);
		setKey(true);
		return el;
	}
	async get(url) {
		const axiosChild = this.createAxiosChild(url);
		const el = await axiosChild.get(url);
		return el;
	}
	async getMe(url) {
		let userMe = this.createUserMe();
		const el = await userMe.get(url);
		// alert('getME');
		return el;
	}
	async delete() {
		let userMe = this.createUserMe();
		userMe.delete('http://localhost:4000/logout').then(alert('ad'));
	}

	createUserMe() {
		const userMe = axios.create({
			headers: {
				Authorization: localStorage.getItem('token'),
			},
		});
		return userMe;
	}
	createAxiosChild({ url }) {
		const axiosChild = axios.create({
			baseURL: url,
		});
		return axiosChild;
	}
}

export default apiWorker;
