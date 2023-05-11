import Header from './Header';
import Post from './Post';

import { getCategories, getPosts } from '@/lib/api';

const Page = async () => {
	const posts = await getPosts();
	const categories = await getCategories();

	return (
		<>
			<Header />

			<section className="py-24 bg-yellow-500 border border-b-neutral-800 border-solid">
				<div className="container-xl">
					<h1 className="text-8xl font-medium mb-9">Stay curious.</h1>
					<h3 className="text-2xl font text-neutral-600 max-w-md mb-12">
						Discover stories, thinking, and expertise from writers on any topic.
					</h3>
					<button className="btn w-48 font-medium text-lg hover:bg-transparent hover:text-black">
						Start reading
					</button>
				</div>
			</section>

			<main className="container-xl py-14 grid grid-cols-3 grid-flow-col gap-8">
				<section className="col-span-2">
					{posts?.map((post) => (
						<Post key={post._id} post={post} />
					))}
				</section>
				<aside>
					<h2 className="font-medium mb-4">
						Discover more of what matters to you
					</h2>
					<div className="flex flex-wrap gap-2">
						{categories.map((category) => (
							<span key={category.id} className="badge">
								{category.title}
							</span>
						))}
					</div>
				</aside>
			</main>
		</>
	);
};

export default Page;
