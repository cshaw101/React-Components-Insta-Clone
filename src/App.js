/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import './App.css';
import SearchBar from '../src/components/SearchBar/SearchBar';
import Posts from '../src/components/Posts/Posts';
import dummyData from './dummy-data';

const App = () => {
  const [posts, setPosts] = useState(dummyData);

  const likePost = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {...post, likes: post.likes + 1};
      }else {
        return post;
      }
    })
    
    setPosts(updatedPosts);
  };

  return (
    <div className='App'>
      <SearchBar />
      <Posts likePost={likePost} posts={posts} />
    </div>
  );
};

export default App;
