import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style.css';  
import PostAuthor from './PostAuthor';

const PostItem = ({ id, img, category, title, desc, readTime, date, authorID, authorName }) => {
  return (
    <div className="post-item">
      <div className="post-item__image-container">
        <img src={img} alt={title} className="post-item__image" />
      </div>
      <div className="post-item__content">
        <Link to={`/posts/categories/${category}`}>
          <span className="post-item__category btn">{category}</span>
        </Link>
        
        <Link to={`/posts/${id}`} className="post-item__title">
          {title}
        </Link>
        
        <p className="post-item__desc">{desc}</p>
        <div className="post-item__meta">
          <Link to={`/posts/author/${authorID}`}>
            <PostAuthor 
              authorID={authorID} 
              authorName={authorName} 
              authorImage={`https://via.placeholder.com/40`} 
            />
          </Link>
          
          | <span>{readTime}</span> | <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

// PropTypes for validation
PostItem.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  authorID: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
};

export default PostItem;
