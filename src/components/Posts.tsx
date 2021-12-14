import React from 'react';
import useRequest from '../lib/useRequest';
import { Post } from '../types/Post';

const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

interface Props {
  setPostId: React.Dispatch<React.SetStateAction<number>>;
}

const Posts = ({ setPostId }: Props) => {
  const {
    data: posts,
    error: postsError,
    isValidating: postsValidating,
  } = useRequest<Post[]>({
    method: 'GET',
    url: postsUrl,
  });

  return (
    <div>
      {posts?.map((post) => (
        <p key={post.id}>
          <a
            onClick={() => setPostId(post.id)}
            href="#"
            style={{
              fontWeight: 'bold',
              color: 'green',
            }}
          >
            {post.title}
          </a>
        </p>
      ))}
    </div>
  );
};

export default Posts;
