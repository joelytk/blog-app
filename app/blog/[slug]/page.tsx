const Page = ({ params }) => {
  const { slug } = params;

  return (
    <>
      <h2>Blog {slug}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        dolorum, corrupti a ab dignissimos, maxime ratione nulla cupiditate
        perferendis reiciendis laborum, minus provident fugiat iure quidem aut.
        Fugiat, earum beatae.
      </p>
    </>
  );
};

export default Page;
