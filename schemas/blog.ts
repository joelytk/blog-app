export default {
	name: 'post',
	type: 'document',
	title: 'Post',
	fields: [
		{
			type: 'string',
			name: 'title',
			title: 'Title',
			required: true
		},
		{
			type: 'slug',
			name: 'slug',
			title: 'Slug',
			options: {
				source: 'title',
				maxLength: 200,
				slugify: (input) =>
					input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
			},
			required: true
		},
		{
			type: 'reference',
			name: 'author',
			title: 'Author',
			to: [{ type: 'author' }],
			required: true
		},
		{
			type: 'image',
			name: 'image',
			title: 'Main image',
			required: true
		},
		{
			type: 'reference',
			name: 'category',
			title: 'Categories',
			to: [{ type: 'category' }],
			required: true
		},
		{
			type: 'string',
			name: 'description',
			title: 'Description',
			required: true
		},
		{
			type: 'number',
			name: 'readTime',
			title: 'Read time',
			required: true
		},
		{
			type: 'array',
			name: 'content',
			title: 'Content',
			of: [{ type: 'block' }],
			required: true
		}
	]
};
