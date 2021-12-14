import useRequest from '../lib/useRequest';
import { Post as P } from '../types/Post';

interface Props {
  postId: number;
  setPostId: React.Dispatch<React.SetStateAction<number>>;
}

const Post = ({ postId, setPostId }: Props) => {
  const { data, error, isValidating } = useRequest<P>({
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
  });

  return (
    <div>
      <a onClick={() => setPostId(-1)} href="#">
        Back
      </a>
      <>
        <h1>{data?.title}</h1>
        <div>
          <p>{data?.body}</p>
        </div>
      </>
    </div>
  );
};

export default Post;
