import Image from 'next/image';
import Link from 'next/link';

const Blog = ({ blog }) => {
  return (
    <Link href={'/blog/' + blog.slug} className='flex max-w-2xl'>
      <div>
        {blog.author && (
          <div className='flex items-center'>
            <img
              alt={blog.author.name}
              src={blog.author.imageUrl}
              className='rounded-full mr-1.5'
              width={16}
              height={16}
            />
            <p>{blog.author.name}</p>
          </div>
        )}

        <h2 className='text-2xl font-bold'>{blog.title}</h2>
        <h3 className='text-lg text-gray-500 font-light'>{blog.description}</h3>

        <div className='flex items-center'>
          <span>
            {blog.datePublished} <span className='px-1.5'>·</span>{' '}
            {blog.readTime} min read <span className='px-1.5'>·</span>{' '}
          </span>
          <div className='inline-flex gap-1'>
            {blog.tags.map((tag: string) => (
              <span key={tag} className='bg-gray-200 rounded-2xl py-0.5 px-2'>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <img alt={blog.title} src={blog.imageUrl} width={200} height={134} />
    </Link>
  );
};

export default Blog;
