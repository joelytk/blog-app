export default {
	name: 'category',
	type: 'document',
	title: 'Category',
	fields: [
		{
			type: 'string',
			name: 'title',
			title: 'Title',
			required: true
		},
		{
			type: 'string',
			name: 'description',
			title: 'Description',
			required: true
		}
	]
};
