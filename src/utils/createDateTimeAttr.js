const createDateTimeAttr = (date) => {
	const createDate = new Date(date);
	const year = createDate.getFullYear();
	const getMonth = createDate.getMonth() + 1;
	const month = getMonth.toString().length === 1 ? `0${getMonth}` : getMonth;
	const getDay = createDate.getDate();
	const day = getDay.toString().length === 1 ? `0${getDay}` : getDay

	return `${year}-${month}-${day}`;
};

export default createDateTimeAttr;
