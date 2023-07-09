import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Post from './Post';

import { getCategories, getPosts } from '@/lib/api';

const Page = async () => {
	const posts = await getPosts();
	const categories = await getCategories();

	return (
		<>
			<Header />
			<Hero />
			<main className="container-xl py-14 grid grid-cols-3 grid-flow-col gap-8">
				<section className="col-span-2">
					{posts?.map((post) => (
						<Post key={post._id} post={post} />
					))}
				</section>
				<aside className="sticky top-16">
					<h2 className="font-medium mb-4">
						Discover more of what matters to you
					</h2>
					<div className="flex flex-wrap gap-2">
						{categories.map((category) => (
							<span key={category.id} className="badge-lg">
								{category.title}
							</span>
						))}
					</div>
				</aside>
			</main>
			<Footer />
		</>
	);
};

export default Page;
