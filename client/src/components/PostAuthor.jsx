import React from 'react';
import { Link } from 'react-router-dom';

const PostAuthor = ({ authorID, authorName, authorImage }) => {
  return (
    <Link to={`/posts/author/${authorID}`} className="flex items-center space-x-2">
      <img
        src={authorImage || 'https://via.placeholder.com/40'}
        alt={authorName}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="text-sm text-gray-700">{authorName}</div>
    </Link>
  );
};

export default PostAuthor;
