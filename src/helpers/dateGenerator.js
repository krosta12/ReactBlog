function DateGenerator() {
	let date = new Date();
	let newDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
	return newDate;
}

export default DateGenerator;
