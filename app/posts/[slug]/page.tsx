import imageUrlBuilder from '@sanity/image-url';

import { getSelectedPost } from '../../../lib/api';
import client from '../../../lib/client';

const Page = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;

	const post = await getSelectedPost(slug);

	const {
		title = 'Missing title',
		authorName = 'Missing name',
		authorImage,
		description,
		categories
	} = post;

	const urlFor = (source) => {
		return imageUrlBuilder(client).image(source);
	};

	return (
		<article>
			<h2>{title}</h2>
			<p>{description}</p>
			{categories && (
				<ul>
					Posted in
					{categories.map((category) => (
						<li key={category}>{category}</li>
					))}
				</ul>
			)}
			{authorImage && (
				<div>
					<img alt={authorName} src={urlFor(authorImage).width(50).url()} />
				</div>
			)}
			{authorName}
		</article>
	);
};

export default Page;
