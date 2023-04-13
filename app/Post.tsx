import Image from 'next/image';
import Link from 'next/link';

import dateFormatter from '../utils/dateFormatter';
import urlFor from '../utils/urlFor';

const PostCard = ({ post }) => {
	return (
		<Link href={'/posts/' + post.slug?.current} passHref>
			<article className="blog-card">
				<div>
					<div className="flex items-center">
						{post.authorImage && (
							<Image
								alt={post.authorName}
								src={urlFor(post.authorImage).width(100).url()}
								width={20}
								height={20}
								loading="lazy"
								className="rounded-full mr-1.5"
							/>
						)}

						{post.authorName && (
							<p className="text-xs font-medium">{post.authorName}</p>
						)}
					</div>

					<h2 className="text-2xl font-bold">{post.title}</h2>
					<h3 className="text-lg text-gray-500 font-light">
						{post.description}
					</h3>

					<div className="flex items-center text-xs">
						<span>
							{post._updatedAt && dateFormatter(post._updatedAt)}{' '}
							<span className="px-1.5">·</span> {post.readTime} min read{' '}
							<span className="px-1.5">·</span>{' '}
						</span>
						<div className="inline-flex gap-1">
							{post.categories?.map((category) => (
								<span key={category} className="badge">
									{category}
								</span>
							))}
						</div>
					</div>
				</div>

				{post.image && (
					<Image
						alt={post.title}
						src={urlFor(post.image).width(500).url()}
						width={200}
						height={134}
						className="object-cover"
					/>
				)}
			</article>
		</Link>
	);
};

export default PostCard;
