const formatDate = (date, options) => {
	return new Date(date).toLocaleDateString("en-US", options);
};

export default formatDate;
