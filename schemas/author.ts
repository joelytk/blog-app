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
			type: 'slug',
			name: 'slug',
			title: 'Slug',
			options: {
				source: 'name',
				maxLength: 200,
				slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
			},
			required: true
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image',
			required: true
		},
		{
			type: 'array',
			name: 'bio',
			title: 'Bio',
			of: [{ type: 'block' }],
			required: true
		}
	]
};
