import { groq } from 'next-sanity';

import client from './client';

const getPosts = async () => {
	const posts = await client.fetch(groq`*[_type == "post"]{
		_id,
		slug,
		"authorName": author->name,
		"authorImage": author->image,
		title,
		description,
		_updatedAt,
		readTime,
		"categories": categories[]->title,
		image
	}`);

	return posts;
};

const getSelectedPost = async (slug) => {
	const post = await client.fetch(
		groq`*[_type == "post" && slug.current == $slug][0]{
			image,
			title,
			description,
			"authorName": author->name,
			"authorImage": author->image,
			readTime,
			_updatedAt,
			"categories": categories[]->title,
			body
		}`,
		{ slug }
	);

	return post;
};

const getCategories = async () => {
	const categories = await client.fetch(groq`*[_type == "category"]{
		_id,
		title,
		description
	}`);

	return categories;
};

export { getPosts, getSelectedPost, getCategories };
