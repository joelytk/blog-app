import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

import Logo from '@/components/Logo';
import { getSelectedPost } from '@/lib/api';
import dateFormatter from '@/utils/dateFormatter';
import urlFor from '@/utils/urlFor';

const Page = async ({ params }: { params: { slug: string } }) => {
	const { slug } = params;

	const post = await getSelectedPost(slug);

	const {
		image,
		title = 'Missing title',
		description = 'Missing description',
		authorName = 'Missing name',
		authorImage,
		readTime,
		_updatedAt,
		// categories,
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
		},
		block: {
			h4: ({ children }) => (
				<h4 className="text-lg font-bold mb-3">{children}</h4>
			),
			customHeading: ({ children }) => <p className="mb-3">{children}</p>
		},
		hardBreak: true
	};

	return (
		<>
			<header className="flex justify-between items-center px-6 h-14 border-b border-b-neutral-100">
				<div className="flex items-center">
					<Logo withBrand={false} />
					<div className="flex items-center w-60 h-10 ml-4 rounded-full bg-neutral-100 text-sm">
						<MagnifyingGlassIcon className="w-6 h-6 mx-3 opacity-80" />
						<input
							className="border-none outline-none bg-transparent"
							placeholder="Search Not Medium"
						/>
					</div>
				</div>
			</header>

			<main className="container mx-auto max-w-screen-md py-16">
				<article>
					<h1 className="text-5xl text-neutral-800 font-bold mb-3">{title}</h1>

					<h2 className="text-2xl text-neutral-500 mb-3">{description}</h2>

					{/* {categories && (
						<ul>
							{categories.map((category) => (
								<li key={category}>{category}</li>
							))}
						</ul>
					)} */}

					<div className="flex items-center gap-4 mb-8">
						{authorImage && (
							<Image
								alt={authorName}
								src={urlFor(authorImage).width(100).url()}
								width={44}
								height={44}
								loading="lazy"
								className="rounded-full"
							/>
						)}
						<div className="text-sm">
							<p className="mb-1">
								<span>{authorName}</span>
								<span className="mx-2">·</span>
								<span>Follow</span>
							</p>
							<p>
								<span>{readTime} min read</span>
								<span className="mx-2">·</span>
								<span>{dateFormatter(_updatedAt)}</span>
							</p>
						</div>
					</div>

					{image && (
						<Image
							alt={title}
							src={urlFor(image).width(1024).url()}
							width={768}
							height={432}
							loading="lazy"
							className="object-cover mb-6"
						/>
					)}

					<div className="blog-body">
						<PortableText value={body} components={ptComponents} />
					</div>
				</article>
			</main>
		</>
	);
};

export default Page;
