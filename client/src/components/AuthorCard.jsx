import React from 'react';

const AuthorCard = ({ author }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 space-y-4">
      <img 
        src={author.image} 
        alt={author.authorName} 
        className="w-24 h-24 rounded-full object-cover"
      />
      <h3 className="text-xl font-semibold text-gray-800">{author.authorName}</h3>
      <p className="text-gray-600">{author.designation}</p>
      <p className="text-sm text-gray-500">Total Posts: {author.totalPosts}</p>
    </div>
  );
};

export default AuthorCard;
