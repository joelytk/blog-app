import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Link href='/blog' className='text-3xl font-bold underline'>
        Blog
      </Link>
    </>
  );
};

export default Page;
