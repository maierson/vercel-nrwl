import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';

export const Test = ({ value }) => {
  return (
    <div>
      <div>Test Page</div>
      <Link href="/">Back</Link>
      <div style={{ marginTop: '40px' }}>{value}</div>
    </div>
  );
};

export const getServerSideProps = async ({
  params,
  query,
}: GetServerSidePropsContext) => {
  return {
    props: {
      value: 'in the page',
    },
  };
};

export default Test;
