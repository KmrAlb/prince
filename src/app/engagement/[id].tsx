import { useRouter } from 'next/router';

const EngagementDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <p>Loading...</p>;
  }

  return <h1>Hello! You are viewing engagement with ID: {id}</h1>;
};

export default EngagementDetail;
