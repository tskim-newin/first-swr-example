import React, { useState } from 'react';
import './App.css';
import Posts from './components/Posts';
import Post from './components/Post';

const App = () => {
  const [postId, setPostId] = useState(-1);

  return (
    <div className="App">
      {postId > -1 ? (
        <Post postId={postId} setPostId={setPostId} />
      ) : (
        <Posts setPostId={setPostId} />
      )}
    </div>
  );
};

export default App;
