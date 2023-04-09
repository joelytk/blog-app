import Post from './Post';

import { getPosts } from '../api';

const Page = async () => {
	const posts = await getPosts();

	return (
		<div className="container my-24 mx-auto">
			<h1 className="text-8xl font-bold mb-10">Welcome to my blog :&#41;</h1>

			{posts.map((post) => (
				<Post key={post._id} post={post} />
			))}
		</div>
	);
};

export default Page;
