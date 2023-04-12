const dateFormatter = (dateString) => {
	const date = new Date(dateString);

	return new Intl.DateTimeFormat('en-GB', {
		month: 'short',
		day: 'numeric'
	}).format(date);
};

export default dateFormatter;
