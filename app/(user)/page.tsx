import Header from './Header';
import PostCard from './Post';

import { getPosts } from '@/lib/api';

const Page = async () => {
	const posts = await getPosts();

	return (
		<>
			<Header />

			<main className="container mx-auto">
				<section className="my-24">
					<h1 className="text-8xl font-medium mb-9">Stay curious.</h1>
					<h3 className="text-2xl font text-neutral-600 max-w-md mb-12">
						Discover stories, thinking, and expertise from writers on any topic.
					</h3>
					<button className="btn w-48 font-medium text-lg">
						Start reading
					</button>
				</section>

				{posts?.map((post) => (
					<PostCard key={post._id} post={post} />
				))}
			</main>
		</>
	);
};

export default Page;
