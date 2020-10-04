import React from 'react';
import FetchedPosts from './components/FetchedPosts';
import PostForm from './components/PostForm';
import Posts from './components/Posts';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts posts={[]} />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
