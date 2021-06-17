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
  const url =
    'https://firestore.googleapis.com/v1/projects/nrwl-test/databases/(default)/documents/cities/LA';
  const result = await global.fetch(url).then((res) => res.json());

  return {
    props: {
      value: JSON.stringify(result, null, 2),
    },
  };
};

export default Test;
