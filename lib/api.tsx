import { groq } from 'next-sanity';

import client from './client';

const getPosts = async () => {
	const posts = await client.fetch(groq`*[_type == "post"]`);
	return posts;
};

const getSelectedPost = async (slug) => {
	const post = await client.fetch(
		groq`*[_type == "post" && slug.current == $slug][0]{
			title,
			"authorName": author->name,
  		"authorImage": author->image,
			"categories": categories[]->title
		}`,
		{ slug }
	);
	return post;
};

export { getPosts, getSelectedPost };
