import React from 'react';
import { useParams } from 'react-router-dom';
import { DUMMY_POSTS } from '../data'; 

const PostDetails = () => {
  const { id } = useParams();  
  const post = DUMMY_POSTS.find(post => post.id === id);  

  if (!post) {
    return <p>Post not found!</p>;  
  }

  return (
    <section className="post-details">
      <div className="post-details__image-container">
        <img src={post.img} alt={post.title} className="post-details__image" />
      </div>
      <div className="post-details__content">
        <h1>{post.title}</h1>
        <span className="post-details__category">{post.category}</span>
        <p className="post-details__desc">{post.desc}</p>
        <div className="post-details__meta">
          <span>By {post.authorName}</span> | <span>{post.readTime}</span> | <span>{post.date}</span>
        </div>
      </div>
    </section>
  );
};

export default PostDetails;
