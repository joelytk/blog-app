import Link from 'next/link';

const Post = ({ post }) => {
	return (
		<Link
			href={'/post/' + post.slug?.current}
			className="flex max-w-2xl hover:bg-gray-200"
		>
			<article>
				{post.author && (
					<div className="flex items-center">
						{post.author.ref}
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
				<h3 className="text-lg text-gray-500 font-light">{post.description}</h3>

				{/* <div className='flex items-center'>
		      <span>
		        {post._updatedAt} <span className='px-1.5'>·</span>{' '}
		        {post.readTime} min read <span className='px-1.5'>·</span>{' '}
		      </span>
		      <div className='inline-flex gap-1'>
		        {post.tags.map((tag: string) => (
		          <span key={tag} className='bg-gray-200 rounded-2xl py-0.5 px-2'>
		            {tag}
		          </span>
		        ))}
		      </div>
		    </div> */}
			</article>

			{post.image && (
				<img
					alt={post.title}
					src={post.image?.asset?._ref}
					width={200}
					height={134}
				/>
			)}
		</Link>
	);
};

export default Post;
