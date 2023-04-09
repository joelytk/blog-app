import { createClient, groq } from 'next-sanity';

const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
	useCdn: false
});

const getPosts = async () => {
	const posts = await client.fetch(groq`*[_type == "post"]`);
	return posts;
};

const getSelectedPost = async (slug) => {
	const post = await client.fetch(groq`*[_type == "post"]`);
	return post;
};

export { getPosts, getSelectedPost };
