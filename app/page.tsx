import Link from 'next/link';

import Blog from './Blog';

type BlogType = {
  id: string;
  slug: string;
  author: {
    name: string;
    imageUrl: string;
  };
  title: string;
  description: string;
  datePublished: string;
  readTime: number;
  tags: string[];
  imageUrl: string;
};

const blogs: BlogType[] = [
  {
    id: '1',
    slug: 'the-ugly-american-passport-fiasco',
    author: {
      name: 'Tom Roston',
      imageUrl: 'https://placehold.co/16'
    },
    title: 'The Ugly American Passport Fiasco',
    description:
      "The State Department told me to fly to Puerto Rico to renew my passport. There's something wrong here.",
    datePublished: 'Apr 4',
    readTime: 5,
    tags: ['Passport', 'Travel'],
    imageUrl: 'https://placehold.co/200x134'
  }
];

const Page = () => {
  return (
    <div className='container my-24 mx-auto'>
      {/* <Link href='/blog' className='text-3xl font-bold underline'>
        Welcome to my blog :)
      </Link> */}
      <h1 className='text-8xl font-bold mb-10'>Welcome to my blog :&#41;</h1>

      {blogs.map((blog: BlogType) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Page;
