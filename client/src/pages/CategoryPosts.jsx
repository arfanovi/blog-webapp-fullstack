import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DUMMY_POSTS } from '../data';
import PostItem from '../components/PostItem'; 
const CategoryPosts = () => {
  const { category } = useParams(); 
  const [posts, setPosts] = useState([]);

  // Filter posts based on the category
  useEffect(() => {
    const filteredPosts = DUMMY_POSTS.filter(post => post.category.toLowerCase() === category.toLowerCase());
    setPosts(filteredPosts);
  }, [category]);

  return (
    <div>
      <h1>Posts in "{category}" Category</h1>
      <div className="category-posts">
        {posts.length ? (
          posts.map(post => (
            <PostItem key={post.id} {...post} />
          ))
        ) : (
          <p>No posts found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPosts;
