export default function Home() {}

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 5 * 60,
  };
};
