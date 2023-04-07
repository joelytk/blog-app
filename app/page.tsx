import { createClient, groq } from 'next-sanity';

import Blog from './Blog';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false
});

const getBlogs = async () => {
  const blogs = await client.fetch(groq`*[_type == "blog"]`);
  return blogs;
};

const Page = async () => {
  const blogs = await getBlogs();

  return (
    <div className='container my-24 mx-auto'>
      <h1 className='text-8xl font-bold mb-10'>Welcome to my blog :&#41;</h1>

      {blogs.map(blog => (
        <Blog key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export default Page;
