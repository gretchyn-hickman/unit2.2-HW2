
import React, {useState} from 'react';
import Posts from './components/Posts/Posts'
import SearchBar from './components/SearchBar/SearchBar'
import dummyData from './dummy-data'
import './App.css';

const App = () => {
  const [posts, setPosts] = useState(dummyData);


  const likePost = postId => {
    const update = posts.map (post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes +1 }
      } else {
        return post;
      }
    })
    setPosts(update);
  };

  return (
    <div className='App'>
      <SearchBar/>
      <Posts posts={posts} likePost={likePost} />
    </div>
  );
};

export default App;
