import { PortableText } from '@portabletext/react';
import Image from 'next/image';

import { getSelectedPost } from '@/lib/api';
import urlFor from '@/utils/urlFor';

const Page = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;

	const post = await getSelectedPost(slug);

	const {
		title = 'Missing title',
		authorName = 'Missing name',
		authorImage,
		categories,
		body = []
	} = post;

	const ptComponents = {
		types: {
			image: ({ value }) => {
				if (!value?.asset?._ref) {
					return null;
				}
				return (
					<Image
						alt={value.alt || ' '}
						loading="lazy"
						src={urlFor(value).width(320).height(240).fit('max').auto('format')}
					/>
				);
			}
		}
	};

	return (
		<div className="container mx-auto py-16">
			<article>
				<h2 className="text-4xl">{title}</h2>
				{categories && (
					<ul>
						Posted in
						{categories.map((category) => (
							<li key={category}>{category}</li>
						))}
					</ul>
				)}

				<div className="flex items-center gap-4">
					{authorImage && (
						<Image
							alt={authorName}
							src={urlFor(authorImage).width(100).url()}
							width={50}
							height={50}
							loading="lazy"
							className="rounded-full"
						/>
					)}
					<p>{authorName}</p>
				</div>

				<PortableText value={body} components={ptComponents} />
			</article>
		</div>
	);
};

export default Page;
