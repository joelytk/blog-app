import Link from 'next/link';

import Post from '../interfaces/post';

const PostCard = ({ post }: Post) => {
	return (
		<Link href={'/posts/' + post.slug?.current} passHref>
			<article className="flex max-w-2xl hover:bg-gray-200">
				<div>
					{post.author && (
						<div className="flex items-center">
							{post.author._ref}
							{/* <img
		          alt={post.author.name}
		          src={post.author.imageUrl}
		          className='rounded-full mr-1.5'
		          width={16}
		          height={16}
		        />
		        <p>{post.author.name}</p> */}
						</div>
					)}

					<h2 className="text-2xl font-bold">{post.title}</h2>
					<h3 className="text-lg text-gray-500 font-light">
						{post.description}
					</h3>

					<div className="flex items-center">
						<span>
							{post._updatedAt} <span className="px-1.5">·</span>{' '}
							{post.readTime} min read <span className="px-1.5">·</span>{' '}
						</span>
						<div className="inline-flex gap-1">
							{post.categories.map((tag) => (
								<span
									key={tag._key}
									className="bg-gray-200 rounded-2xl py-0.5 px-2"
								>
									{tag._ref}
								</span>
							))}
						</div>
					</div>
				</div>

				{post.image && (
					<img
						alt={post.title}
						src={post.image?.asset?._ref}
						width={200}
						height={134}
					/>
				)}
			</article>
		</Link>
	);
};

export default PostCard;
