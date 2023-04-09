export default {
	name: 'author',
	type: 'document',
	title: 'Author',
	fields: [
		{
			type: 'string',
			name: 'name',
			title: 'Name',
			required: true
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image',
			required: true
		}
	]
};
