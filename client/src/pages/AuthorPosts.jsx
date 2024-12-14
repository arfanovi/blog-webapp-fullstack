import React, { useState, useEffect } from 'react';
import PostItem from '../components/PostItem';
import { DUMMY_POSTS } from '../data';

const AuthorPosts = ({ authorId }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Filter posts based on the authorId
    const filteredPosts = DUMMY_POSTS.filter(post => post.authorID === authorId);
    setPosts(filteredPosts);
  }, [authorId]);

  return (
    <div>
      <section className='author_posts'>
        {
          posts.length > 0 ? (
            <div>
              {
                posts.map((post) => 
                  <PostItem key={post.id} {...post} />
                )
              }
            </div>
          ) : (
            <h2>No Posts found</h2>
          )
        }
      </section>
    </div>
  );
}

export default AuthorPosts;
