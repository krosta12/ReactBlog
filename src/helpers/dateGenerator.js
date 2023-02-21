function DateGenerator() {
	let date = new Date();
	let newDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
	return newDate;
}

//я решил не списывать твоё решение

export default DateGenerator;
